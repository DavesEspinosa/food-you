require('dotenv').config();

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Recipe = require("../models/recipe.model");
const User = require("../models/user.model");

const dbName = "food-you";
mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const recipes = [
  {
    author: null,
    title: "Whole roast turbot with clams, fennel and potatoes",
    inspiration:
      "Serving a whole turbot may seem extravagant, but it’s simple to prepare and makes a memorable centrepiece. Cooking a whole fish makes an impressive dinner party main.",
    ingredients: 
      "small fennel bulbs; waxy potatoes (such as charlotte); onion; chilli flakes; fennel seeds; olive oil; live clams; dry white wine; turbot",
    cuisine: "Mediterranian",
    video: "https://www.youtube.com/watch?v=A9T2WK3dMeI",
    image: "/images/photo-1481931098730-318b6f776db0.jpeg",
    duration: 50,
  },
  {
    author: null,
    title: "Whole roast turbot with clams, fennel and potatoes",
    inspiration:
      "Serving a whole turbot may seem extravagant, but it’s simple to prepare and makes a memorable centrepiece. Cooking a whole fish makes an impressive dinner party main.",
    ingredients: 
      "small fennel bulbs; waxy potatoes (such as charlotte); onion; chilli flakes; fennel seeds; olive oil; live clams; dry white wine; turbot",
    cuisine: "Mediterranian",
    video: "https://www.youtube.com/watch?v=A9T2WK3dMeI",
    image: "/images/photo-1476718406336-bb5a9690ee2a.jpeg",
    duration: 50,
  },
  {
    author: null,
    title: "Whole roast turbot with clams, fennel and potatoes",
    inspiration:
      "Serving a whole turbot may seem extravagant, but it’s simple to prepare and makes a memorable centrepiece. Cooking a whole fish makes an impressive dinner party main.",
    ingredients: 
      "small fennel bulbs; waxy potatoes (such as charlotte); onion; chilli flakes; fennel seeds; olive oil; live clams; dry white wine; turbot",
    cuisine: "Mediterranian",
    video: "https://www.youtube.com/watch?v=A9T2WK3dMeI",
    image: "/images/photo-1485921325833-c519f76c4927.jpeg",
    duration: 50,
  },{
    author: null,
    title: "Whole roast turbot with clams, fennel and potatoes",
    inspiration:
      "Serving a whole turbot may seem extravagant, but it’s simple to prepare and makes a memorable centrepiece. Cooking a whole fish makes an impressive dinner party main.",
    ingredients: 
      "small fennel bulbs; waxy potatoes (such as charlotte); onion; chilli flakes; fennel seeds; olive oil; live clams; dry white wine; turbot",
    cuisine: "Mediterranian",
    video: "https://www.youtube.com/watch?v=A9T2WK3dMeI",
    image: "/images/photo-1567620905732-2d1ec7ab7445.jpeg",
    duration: 50,
  },{
    author: null,
    title: "Whole roast turbot with clams, fennel and potatoes",
    inspiration:
      "Serving a whole turbot may seem extravagant, but it’s simple to prepare and makes a memorable centrepiece. Cooking a whole fish makes an impressive dinner party main.",
    ingredients: 
      "small fennel bulbs; waxy potatoes (such as charlotte); onion; chilli flakes; fennel seeds; olive oil; live clams; dry white wine; turbot",
    cuisine: "Mediterranian",
    video: "https://www.youtube.com/watch?v=A9T2WK3dMeI",
    image: "/images/photo-1518779578993-ec3579fee39f.jpeg",
    duration: 50,
  },{
    author: null,
    title: "Whole roast turbot with clams, fennel and potatoes",
    inspiration:
      "Serving a whole turbot may seem extravagant, but it’s simple to prepare and makes a memorable centrepiece. Cooking a whole fish makes an impressive dinner party main.",
    ingredients: 
      "small fennel bulbs; waxy potatoes (such as charlotte); onion; chilli flakes; fennel seeds; olive oil; live clams; dry white wine; turbot",
    cuisine: "Mediterranian",
    video: "https://www.youtube.com/watch?v=A9T2WK3dMeI",
    image: "/images/photo-1514326640560-7d063ef2aed5.jpeg",
    duration: 50,
  },{
    author: null,
    title: "Whole roast turbot with clams, fennel and potatoes",
    inspiration:
      "Serving a whole turbot may seem extravagant, but it’s simple to prepare and makes a memorable centrepiece. Cooking a whole fish makes an impressive dinner party main.",
    ingredients: 
      "small fennel bulbs; waxy potatoes (such as charlotte); onion; chilli flakes; fennel seeds; olive oil; live clams; dry white wine; turbot",
    cuisine: "Mediterranian",
    video: "https://www.youtube.com/watch?v=A9T2WK3dMeI",
    image: "/images/photo-1485921198582-a55119c97421.jpeg",
    duration: 50,
  },{
    author: null,
    title: "Whole roast turbot with clams, fennel and potatoes",
    inspiration:
      "Serving a whole turbot may seem extravagant, but it’s simple to prepare and makes a memorable centrepiece. Cooking a whole fish makes an impressive dinner party main.",
    ingredients: 
      "small fennel bulbs; waxy potatoes (such as charlotte); onion; chilli flakes; fennel seeds; olive oil; live clams; dry white wine; turbot",
    cuisine: "Mediterranian",
    video: "https://www.youtube.com/watch?v=A9T2WK3dMeI",
    image: "/images/photo-1485962398705-ef6a13c41e8f.jpeg",
    duration: 50,
  },{
    author: null,
    title: "Whole roast turbot with clams, fennel and potatoes",
    inspiration:
      "Serving a whole turbot may seem extravagant, but it’s simple to prepare and makes a memorable centrepiece. Cooking a whole fish makes an impressive dinner party main.",
    ingredients: 
      "small fennel bulbs; waxy potatoes (such as charlotte); onion; chilli flakes; fennel seeds; olive oil; live clams; dry white wine; turbot",
    cuisine: "Mediterranian",
    video: "https://www.youtube.com/watch?v=A9T2WK3dMeI",
    image: "/images/photo-1504544750208-dc0358e63f7f.jpeg",
    duration: 50,
  }
];

const users = [
  {
    name: "a",
    firstname: "a",
    username: "a",
    password: "$2a$15$ICydVO.GUykwgekvwCTJZOG83/mx6y1fFZypcBtVAj7498683LTuW",
    email: "a@a",
    firstname: "a",
    postcode: "a",
    address: "a",
    city: "a",
    phone: "admin",
    cartList: [],
    profilePicture: '',
  },
];

Recipe.create(recipes, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${recipes.length} recipes`);
  mongoose.connection.close();
});

User.create(users, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${users.length} users`);
  mongoose.connection.close();
});
