const express = require("express");
const router = express.Router();

const Recipe = require("../models/recipe.model");
const User = require("../models/user.model");

const uploadCloud = require("../config/cloudinary.js");

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
router.get("/social-recipes", async (req, res, next) => {
  try {
    const { _id } = req.session.currentUser;
    const recipe = await Recipe.find({
      $and: [{ author: { $ne: null } }, { author: { $ne: _id } }],
    });
    const recipes = {
      recipe,
      isSocial: true,
    };
    recipe.length === 0
      ? res.render("recipes/social-recipes", { errorMessage: true })
      : res.render("recipes/social-recipes", { recipes });
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

router.post(
  "/add-recipe",
  uploadCloud.single("image"),
  async (req, res, next) => {
    try {
      const { _id } = req.session.currentUser;

      const { video } = req.body;

      let image = "";

      const key = (video) => {
        let arr = [...video];
        let result = "";

        if (arr.length > 43) {
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

      if (typeof req.file !== "undefined") {
        image = req.file.url;
      } else {
        image = process.env.RECIPE_DEFAULT_IMAGE;
      }

      await Recipe.create({
        ...req.body,
        video: key(video),
        image,
        author: _id,
      });

      res.redirect("/own-recipes");
    } catch (error) {
      console.log(error);
      next(error);
      return;
    }
  }
);

router.get("/recipe/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const recipe = await Recipe.findById({ _id: req.params.id });
    const cartList = await User.findOne({ cartList: id });

    let isSell = cartList ? true : false;

    let data = {
      recipe,
      isSell,
    };

    res.render("recipes/recipe-details", { data });
  } catch (error) {
    console.log(error);
    next(error);
    return;
  }
});


router.get("/social/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const recipe = await Recipe.findById({ _id: req.params.id });
    const cartList = await User.findOne({ cartList: id });

    let isSell = cartList ? true : false;

    let data = {
      recipe,
      isSell,
    };

    res.render("recipes/social-details", { data });
  } catch (error) {
    console.log(error);
    next(error);
    return;
  }
});


router.post("/:id", async (req, res, next) => {
  try {
    const { _id } = req.session.currentUser;
    const { id } = req.params;

    const isSell = await User.findOne({ cartList: id });

    if (isSell) {
      res.redirect(`/recipe/${id}`);
      return;
    }

    await User.updateOne(
      { _id },
      { $push: { cartList: req.params.id } },
      { new: true }
    );

    req.session.currentUser = await User.findOne({ _id });
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
