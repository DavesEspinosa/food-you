const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

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

router.post("/edit-profile", async (req, res, next) => {
  try {
    const user = req.session.currentUser; //recuperando la session actual
    const {
      name,
      firstname,
      username,
      email,
      password,
      address,
      postcode,
      city,
      phone,
      profilePicture,
    } = req.body; //Datos recuperados de los inputs

    //CAMPOS REQUERIDOS
    //¿QWu hacer si usuario no intrduce un campo requerido?
    //comprobar qu elos campos estan vacios.

    console.log("[{...req.body}] ", { ...req.body });

    let dataUpdate = Object.entries(req.body).map((data) => {
      let key = data[0];
      if (data === "") {
        console.log(
          `Este es la key : ${data[0]} y este es el value ${data[1]} y este es el userssion: ${user[key]}`
        );
        return user[index];
      }
      console.log(
        `Este es el data : ${data} y este es el userssion: ${user[key]}`
      );
      return data;
    });
    /* 
    if (name === "") {
      name=user.name;
    }
    if (firstname === "") {
    }
    if (username === "") {
    }
    if (email === "") {
    }
    if (password === "") {
    }
    if (address === "") {
    }
    if (postcode === "") {
    }
    if (city === "") {
    }
    if (phone === "") {
    }
    if (profilePicture === "") {
    } */

    //igualar el campo vacio por la data de currentUser
    //crear nueva variable con datos de req.body y los de currentUser
    //Si el campo de la contraseña no esta vacio,hay contraseña nueva hash

    /* const salt = bcrypt.genSaltSync(bcrytpSalt);
const hashedPassword = bcrypt.hashSync(password, salt); */

    //updatear datos con updateOne;

    /*  const isUser = await User.findOne({ email });
    if (isUser) {
      res.render("/edit-profile", {
        errorMessage: "This user already exists",
      });
      return;
    } */
    /*   if (condition) {
       
     }
 */
    /* await User.update(
      { user },
      { $set: { ...req.body  password: hashedPassword  } }
    ); */
    //findone recuperar usuario e igualar

    //req.session.currentUser = user
    res.redirect("/profile");
  } catch (error) {
    console.log(error);
    res.redirect("/profile");
    return;
  }
});

module.exports = router;
