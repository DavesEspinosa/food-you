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
    image: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2020/05/WEB-READY-CreamyVeggieSausageSpinachPastaVegan_Option2-768x960.jpg",
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
    image: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2020/05/WEB-READY-CreamyVeggieSausageSpinachPastaVegan_Option2-768x960.jpg",
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
    image: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2020/05/WEB-READY-CreamyVeggieSausageSpinachPastaVegan_Option2-768x960.jpg",
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
    image: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2020/05/WEB-READY-CreamyVeggieSausageSpinachPastaVegan_Option2-768x960.jpg",
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
    image: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2020/05/WEB-READY-CreamyVeggieSausageSpinachPastaVegan_Option2-768x960.jpg",
    duration: 50,
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
