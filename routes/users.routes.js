const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/user.model");

const router = express.Router();
const bcrytpSalt = 15;
  
router.use((req, res, next) => {
  if (req.session.currentUser) {
    next();
    return;
  }
  // si no hay ning'un usuario le redige al Home
  res.redirect("/");
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/profile", (req, res, next) => {
  res.render("profile/user-profile");
});

router.get("/edit-profile", (req, res, next) => {
  res.render("profile/edit-profile");
});

router.post("/edit-profile", 
async (req, res, next) => {
  try {
    const user = req.session.currentUser;
    const { _id } = user;
    let profileUpdate = {}
    Object.entries(req.body).map( async(valueInput) => {
      try {
        let key = valueInput[0]; // campo
        let value = valueInput[1]; // valor del campo
  
        if(key === 'email' && value !== ''){
          const isUser = await User.findOne({key});
          if(isUser){
            errorMessage = 'This user already exists';
            res.render('/edit-profile', { errorMessage })
            return;
          }
          profileUpdate[key]=user[key];
        }
        if(key === 'password' && value !== ''){
          const salt = bcrypt.genSaltSync(bcrytpSalt);
          const hashedPassword = bcrypt.hashSync(value, salt);
          profileUpdate[key]=hashedPassword;
          return;
        }
        if (value === "") {
          profileUpdate[key]=user[key];
          return;
        }
        profileUpdate[key]=value;
      } catch (error) {
        console.log(error)
      }
    });
    await User.updateOne(
      { _id },
      { $set: { ...profileUpdate } },
      { new: true}
    );
    req.session.currentUser = await User.findById({ _id });
    res.redirect("/profile");
  } catch (error) {
    console.log(error);
    res.redirect("/profile");
    return;
  }
});

module.exports = router;
