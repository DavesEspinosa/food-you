const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/user.model");

const router = express.Router();
const bcrytpSalt = 15;

const uploadCloud = require("../config/cloudinary.js");

router.get("/signup", (req, res, next) => {
  res.render("auth/signup", { errorMessage: "" });
});

router.post(
  "/signup",
  uploadCloud.single("profilePicture"),
  async (req, res, next) => {
    try {
      const { email, password, } = req.body;

      let profilePicture = '';

      let errorMessage = {}

      if (email === "" || password === "") {
        errorMessage.generic = "Enter email and password";
      }

      const isUser = await User.findOne({ email });
      if (isUser) {
        errorMessage.emailExists = "This user already exists";
      }

    if(password.length<8) {
        errorMessage.passwordMessage = "Password must contain at least 8 characters";
    }
    // address city postCode phone

    Object.entries(req.body).map( valueInput => {
      let key = valueInput[0]; // campo
      let value = valueInput[1]; // valor del campo
      console.log(`key: ${key} value: ${value}`)

      if (value === "") {
        errorMessage[key]="Mandatoy";
        return;
      }

      return;
    });

      // const passwordValidation = pass => /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(pass);
      // console.log(passwordValidation(password))
      // console.log('esta es la pass', password)
      // console.log(password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/));
      // if(password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)) {
      //   res.render("auth/signup", { passwordMessage: "Password must contain at least 8 characters, 1 capital letter, 1 number and 1 special character" });
      //   return;
      // }

      if(typeof req.file !== 'undefined'){
        profilePicture = req.file.url;
      }else{
        profilePicture = process.env.DEFAULT_PICTURE;
      }

      const salt = bcrypt.genSaltSync(bcrytpSalt);
      const hashedPassword = bcrypt.hashSync(password, salt);

      if(errorMessage.length!==0){
        console.log('hay errores', errorMessage)
        res.render("auth/signup", { errorMessage });
        return;
      }

    } catch (error) {
      console.log(error)
      res.render("auth/signup", {
        errorMessage: "Ops!! Error while creating account. Please try again.",
      });
    }
  }
);

router.get("/login", (req, res, next) => {
  res.render("auth/login", { errorMessage: "" });
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  if (email === "" || password === "") {
    res.render("auth/login", {
      errorMessage: "Enter both email and password to log in.",
    });
    return;
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.render("auth/login", {
        errorMessage: `There isn't an account with email ${email}.`,
      });
      return;
    }
    // magic, como compara un hash salteado x veces y te lo mira con un string...
    if (!bcrypt.compareSync(password, user.password)) {
      res.render("auth/login", {
        errorMessage: "Invalid password.",
      });
      return;
    }
    // GUARDAMOS LA SESSION EN CURRENTUSER ¡¡HABEMUS "PERSISTENCIA" DE DATOS!!
    req.session.currentUser = user;
    res.redirect("/list-recipes");
  } catch (error) {
    console.log(error);
  }
});

router.get("/logout", (req, res, next) => {
  // si no existe un usuario en la sesion
  if (!req.session.currentUser) {
    res.redirect("/");
    return;
  }
  // destruyes la sesion
  req.session.destroy((err) => {
    if (err) {
      next(err);
      return;
    }
    // redirecciona cuando haya terminado de destruir la sesion
    res.redirect("/");
  });
});

module.exports = router;
