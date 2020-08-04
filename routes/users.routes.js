const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', function(req, res, next) {
  res.render('profile/user-profile');
});

router.get('/profile/edit', function(req, res, next) {
  res.render('profile/edit-profile');
});

module.exports = router;
