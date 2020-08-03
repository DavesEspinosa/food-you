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
    ingredients: [
      "small fennel bulbs",
      "waxy potatoes (such as charlotte)",
      "onion",
      "chilli flakes",
      "fennel seeds",
      "olive oil",
      "live clams",
      "dry white wine",
      "turbot",
    ],
    cuisine: "Mediterranian",
    video: "https://www.youtube.com/watch?v=A9T2WK3dMeI",
    image: "",
    duration: 50,
  },
  {
    author: null,
    title: "Greek courgette and feta frittata",
    inspiration:
      "In this recipe, quintessential Greek ingredients – olive oil, courgettes, tomatoes and feta – make this frittata sing with delicious light, summer flavours. Enjoy warm, cold for a picnic or in a packed lunch.",
    ingredients: [
      "olive oil",
      "medium courgettes",
      "garlic cloves",
      "ripe tomatoes",
      "medium free-range eggs",
      "fresh dill",
      "vegetarian feta",
    ],
    cuisine: "Mediterranian",
    video: "https://www.youtube.com/watch?v=0CH1rhKThk4",
    image: "",
    duration: 25,
  },
  {
    author: null,
    title: "Creamy vegan sausage and spinach pasta",
    inspiration:
      "Comforting and creamy, this plant-based pasta dish marries vegan sausages with fennel seeds, red onion and garlic for a satisfying savoury flavour, it will impress anyone",
    ingredients: [
      "olive oil",
      "red onions",
      "vegan sausages",
      "baby leaf spinach",
      "dried pasta rigatoni",
      "soya cream",
      "flatleaf parsley",
    ],
    cuisine: "Mediterranian",
    video: "",
    image: "",
    duration: 20,
  },
  {
    author: null,
    title: "Creamy vegan sausage and spinach pasta",
    inspiration:
      "Comforting and creamy, this plant-based pasta dish marries vegan sausages with fennel seeds, red onion and garlic for a satisfying savoury flavour, it will impress anyone",
    ingredients: [
      "olive oil",
      "red onions",
      "vegan sausages",
      "baby leaf spinach",
      "dried pasta rigatoni",
      "soya cream",
      "flatleaf parsley",
    ],
    cuisine: "Mediterranian",
    video: "",
    image: "",
    duration: 20,
  },
  {
    author: null,
    title: "Creamy vegan sausage and spinach pasta",
    inspiration:
      "Comforting and creamy, this plant-based pasta dish marries vegan sausages with fennel seeds, red onion and garlic for a satisfying savoury flavour, it will impress anyone",
    ingredients: [
      "olive oil",
      "red onions",
      "vegan sausages",
      "baby leaf spinach",
      "dried pasta rigatoni",
      "soya cream",
      "flatleaf parsley",
    ],
    cuisine: "Vegan",
    video: "",
    image: "",
    duration: 20,
  },
  {
    author: null,
    title: "Creamy vegan sausage and spinach pasta",
    inspiration:
      "Comforting and creamy, this plant-based pasta dish marries vegan sausages with fennel seeds, red onion and garlic for a satisfying savoury flavour, it will impress anyone",
    ingredients: [
      "olive oil",
      "red onions",
      "vegan sausages",
      "baby leaf spinach",
      "dried pasta rigatoni",
      "soya cream",
      "flatleaf parsley",
    ],
    cuisine: "Vegan",
    video: "",
    image: "",
    duration: 20,
  },
  {
    author: null,
    title: "Creamy vegan sausage and spinach pasta",
    inspiration:
      "Comforting and creamy, this plant-based pasta dish marries vegan sausages with fennel seeds, red onion and garlic for a satisfying savoury flavour, it will impress anyone",
    ingredients: [
      "olive oil",
      "red onions",
      "vegan sausages",
      "baby leaf spinach",
      "dried pasta rigatoni",
      "soya cream",
      "flatleaf parsley",
    ],
    cuisine: "Vegan",
    video: "",
    image: "",
    duration: 20,
  },
  {
    author: null,
    title: "Creamy vegan sausage and spinach pasta",
    inspiration:
      "Comforting and creamy, this plant-based pasta dish marries vegan sausages with fennel seeds, red onion and garlic for a satisfying savoury flavour, it will impress anyone",
    ingredients: [
      "olive oil",
      "red onions",
      "vegan sausages",
      "baby leaf spinach",
      "dried pasta rigatoni",
      "soya cream",
      "flatleaf parsley",
    ],
    cuisine: "Vegan",
    video: "",
    image: "",
    duration: 20,
  },
  {
    author: null,
    title: "Creamy vegan sausage and spinach pasta",
    inspiration:
      "Comforting and creamy, this plant-based pasta dish marries vegan sausages with fennel seeds, red onion and garlic for a satisfying savoury flavour, it will impress anyone",
    ingredients: [
      "olive oil",
      "red onions",
      "vegan sausages",
      "baby leaf spinach",
      "dried pasta rigatoni",
      "soya cream",
      "flatleaf parsley",
    ],
    cuisine: "Asian",
    video: "",
    image: "",
    duration: 20,
  },
  {
    author: null,
    title: "Creamy vegan sausage and spinach pasta",
    inspiration:
      "Comforting and creamy, this plant-based pasta dish marries vegan sausages with fennel seeds, red onion and garlic for a satisfying savoury flavour, it will impress anyone",
    ingredients: [
      "olive oil",
      "red onions",
      "vegan sausages",
      "baby leaf spinach",
      "dried pasta rigatoni",
      "soya cream",
      "flatleaf parsley",
    ],
    cuisine: "Asian",
    video: "",
    image: "",
    duration: 20,
  },
  {
    author: null,
    title: "Creamy vegan sausage and spinach pasta",
    inspiration:
      "Comforting and creamy, this plant-based pasta dish marries vegan sausages with fennel seeds, red onion and garlic for a satisfying savoury flavour, it will impress anyone",
    ingredients: [
      "olive oil",
      "red onions",
      "vegan sausages",
      "baby leaf spinach",
      "dried pasta rigatoni",
      "soya cream",
      "flatleaf parsley",
    ],
    cuisine: "Asian",
    video: "",
    image: "",
    duration: 20,
  },
  {
    author: null,
    title: "Creamy vegan sausage and spinach pasta",
    inspiration:
      "Comforting and creamy, this plant-based pasta dish marries vegan sausages with fennel seeds, red onion and garlic for a satisfying savoury flavour, it will impress anyone",
    ingredients: [
      "olive oil",
      "red onions",
      "vegan sausages",
      "baby leaf spinach",
      "dried pasta rigatoni",
      "soya cream",
      "flatleaf parsley",
    ],
    cuisine: "Asian",
    video: "",
    image: "",
    duration: 20,
  },
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
