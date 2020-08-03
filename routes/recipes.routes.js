const express = require("express");
const router = express.Router();

const Recipe = require("../models/recipe.model");
const User = require("../models/user.model");

router.use((req, res, next) => {
  if(req.session.currentUser){
    next();
    return;
  }
  // si no hay ning'un usuario le redige al Home
  res.redirect('/')
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
