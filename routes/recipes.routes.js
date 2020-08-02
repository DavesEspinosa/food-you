const express = require("express");
const router = express.Router();

const Recipe = require("../models/recipe");
const User = require("../models/user");

router.use((req, res, next) => {
  if(req.session.currentUser){
    next();
    return;
  }
  // si no hay ning'un usuario le redige al login
  res.redirect('/login')
})

router.get("/list-recipes", async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.render("recipes/list-recipes", { recipes });
  } catch (error) {
    console.log(error);
    next(error);
    return;
  }
});

module.exports = router;
