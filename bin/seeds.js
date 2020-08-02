const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Recipe = require('../models/recipe.model');
const User = require('../models/user.model');

const dbName = 'food-you';
mongoose.connect(`mongodb://localhost/${dbName}`, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const recipes = [
  {
    author: null,
    title: "Whole roast turbot with clams, fennel and potatoes",
    inspiration: "Serving a whole turbot may seem extravagant, but it’s simple to prepare and makes a memorable centrepiece. Cooking a whole fish makes an impressive dinner party main.",
    ingredients: [
      "small fennel bulbs",
      "waxy potatoes (such as charlotte)",
      "onion",
      "chilli flakes", 
      "fennel seeds",
      "olive oil",
      "live clams",
      "dry white wine",
      "turbot"],
    cuisine: "Mediterranian",
    video: "https://www.youtube.com/watch?v=A9T2WK3dMeI",
    image: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2019/06/turbot-768x960.jpg", 
    duration: 50
  },
  {
    author: null,
    title: "Greek courgette and feta frittata",
    inspiration: "In this recipe, quintessential Greek ingredients – olive oil, courgettes, tomatoes and feta – make this frittata sing with delicious light, summer flavours. Enjoy warm, cold for a picnic or in a packed lunch.",
    ingredients: [
      "olive oil",
      "medium courgettes",
      "garlic cloves",
      "ripe tomatoes", 
      "medium free-range eggs",
      "fresh dill",
      "vegetarian feta"],
    cuisine: "Mediterranian",
    video: "https://www.youtube.com/watch?v=0CH1rhKThk4",
    image: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2020/02/159-Greek-zucchhini-frittata-768x960.jpg", 
    duration: 25
  },
  {
    author: null,
    title: "Creamy vegan sausage and spinach pasta",
    inspiration: "Comforting and creamy, this plant-based pasta dish marries vegan sausages with fennel seeds, red onion and garlic for a satisfying savoury flavour, it will impress anyone",
    ingredients: [
      "olive oil",
      "red onions",
      "vegan sausages",
      "baby leaf spinach", 
      "dried pasta rigatoni",
      "soya cream",
      "flatleaf parsley"],
    cuisine: "Vegan",
    video: "",
    image: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2020/05/WEB-READY-CreamyVeggieSausageSpinachPastaVegan_Option2-768x960.jpg", 
    duration: 20
  }

]

const users = [
  {
    name: "admin",
    firstname:  "admin",
    username:  "admin", 
    email:  "admin@admin.com", 
    firstname:  "admin", 
    postcode: 1234,
    address: "admin",
    city: "admin",
    phone: "admin",
    cartList: []
  }
];

Recipe.create(recipes, (err) => {
  if(err) { throw(err) }
  console.log(`Created ${recipes.length} recipes`);
  mongoose.connection.close()
});

User.create(users, (err) => {
  if(err) { throw(err) }
  console.log(`Created ${users.length} users`);
  mongoose.connection.close()
});
