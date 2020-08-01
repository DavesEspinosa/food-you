const express = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const router = express.Router();
const bcrytpSalt = 15;

router.get('/signup', (req, res, next) => {
  res.render('auth/signup', { errorMessage: ''});
});

router.post('/signup', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(email === '' || password === ''){
      res.render('auth/signup', { errorMessage: 'Enter email and password'} );
      return;
    }
    
    const isUser = await User.findOne({ email });
    if(isUser){
      res.render('auth/signup', { errorMessage: 'This user already exists'} );
      return;
    }

    const salt = bcrypt.genSaltSync(bcrytpSalt);
    const hashedPassword = bcrypt.hashSync(password, salt);

    await User.create({
      password: hashedPassword,
      ...req.body
    });
    res.redirect('/login')
  } catch (error) {
    res.render('auth/signup', { errorMessage: "Ops!! Error while creating account. Please try again."})
  }
});

router.get('/login', (req, res, next) => {
  res.render('auth/login', { errorMessage: ''});
});

module.exports = router;
