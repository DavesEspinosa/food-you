const express = require("express");
const router = express.Router();

const Recipe = require("../models/recipe.model");

router.use((req, res, next) => {
  if (req.session.currentUser) {
    next();
    return;
  }
  // si no hay ning'un usuario le redige al Home
  res.redirect("/");
});

router.get("/list-recipes", async (req, res, next) => {
  try {
    const recipes = await Recipe.find({ author: null });

    recipes.length === 0
      ? res.render("recipes/list-recipes", { errorMessage: true })
      : res.render("recipes/list-recipes", { recipes });
  } catch (error) {
    console.log(error);
    next(error);
    return;
  }
});

router.get("/own-recipes", async (req, res, next) => {
  try {
    const { _id } = req.session.currentUser;
    
    const recipes = await Recipe.find({author: _id});
    recipes.length === 0 ?
    res.render("recipes/own-recipes", { errorMessage: true })
    :
    res.render("recipes/own-recipes", { recipes });
  } catch (error) {
    console.log(error);
    next(error);
    return;
  }
});

router.get("/add-recipe", (req, res, next) => {
  res.render("recipes/add-recipe");
});

router.post("/add-recipe", async (req, res, next) => {
  try {
    const { _id } = req.session.currentUser;
    await Recipe.create({ ...req.body, author: _id });
    res.redirect("/own-recipes");
  } catch (error) {
    console.log(error);
    next(error);
    return;
  }
});

router.get("/recipe/:id", async (req, res, next) => {
  try {
    const recipe = await Recipe.findById({_id:req.params.id});
    console.log(recipe);
    res.render("recipes/recipe-details", {recipe});
  } catch (error) {
    console.log(error);
    next(error);
    return;
  }
});

module.exports = router;
