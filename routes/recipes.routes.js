const express = require("express");
const router = express.Router();

const Recipe = require("../models/recipe.model");
const User = require("../models/user.model");

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

    const recipes = await Recipe.find({ author: _id });
    recipes.length === 0
      ? res.render("recipes/own-recipes", { errorMessage: true })
      : res.render("recipes/own-recipes", { recipes });
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
    //req.body para sacar video
    //crear un arrow function de extractkey
    const { video } = req.body;
    const key = (video) => {
      let arr = [...video];
      let result = "";
      if (arr.length > 43) {
        // si es una lista
        let index = arr.findIndex((letter) => letter === "=");
        let endIndex = arr.findIndex((letter) => letter === "&");
        let extract = arr.slice(index + 1, endIndex);
        extract.forEach((letter) => (result += letter));
        return result;
      }
      let index = arr.findIndex((letter) => letter === "=");
      let extract = arr.slice(index + 1, arr.length);
      extract.forEach((letter) => (result += letter));
      return result;
    };
    await Recipe.create({ ...req.body, video: key(video), author: _id });
    res.redirect("/own-recipes");
  } catch (error) {
    console.log(error);
    next(error);
    return;
  }
});

router.get("/recipe/:id", async (req, res, next) => {
  try {
    const recipe = await Recipe.findById({ _id: req.params.id });
    res.render("recipes/recipe-details", { recipe });
  } catch (error) {
    console.log(error);
    next(error);
    return;
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const { _id, cartList } = req.session.currentUser;
    console.log('Usuario viejo: ', req.session.currentUser)
    
    const { id } = req.params;
    
    let isSell = false;
    
    cartList.map(recipe => {
      if(recipe === id){
        isSell=true;
      }
    });
    
    console.log('isSell: ', isSell);
    if(isSell){
      res.redirect(`/recipe/${id}`);
      return;
    }
    
    await User.updateOne(
      {_id},
      { $push: { cartList: req.params.id }},
      { new: true }
      );

    req.session.currentUser = await User.findOne({_id});
    console.log('Usuario actualizado: ', req.session.currentUser)
    res.redirect(`/recipe/${id}`);

  } catch (error) {
    console.log(error);
    next(error);
    return;
  }
});

router.post("/:id/delete", async (req, res, next) => {
  try {
    await Recipe.findByIdAndRemove({ _id: req.params.id });
    res.redirect("/own-recipes");
  } catch (error) {
    console.log(error);
    next(error);
    return;
  }
});

module.exports = router;
