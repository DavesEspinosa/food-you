const mongoose = require('mongoose');
const Recipe = require('../models/recipe');

const dbName = 'food-you';
mongoose.connect(`mongodb://localhost/${dbName}`, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const recipes = [
  {
    author: null,
    title: "Patatas bravas",
    inspiration: "Unas patatas que te hacen alcanzar el nirvanna picante",
    ingredients: [
      "Patatas",
      "delicias picantes",
      "amor"
    ],
    cuisine: "Asian",
    video: "https://www.youtube.com/watch?v=Qph_wEWWTFY&vl=es",
    image: "https://live.mrf.io/statics/i/ps/www.cocinacaserayfacil.net/wp-content/uploads/2018/02/patatas-bravas-receta.jpg?width=1200&enable=upscale",
    duration: 30,
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
      "Handful fresh dill",
      "vegetarian feta"],
    cuisine: "Vegan",
    video: "https://www.youtube.com/watch?v=0CH1rhKThk4",
    image: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2020/02/159-Greek-zucchhini-frittata-768x960.jpg", 
    duration: 25}
]

Recipe.create(recipes, (err) => {
  if(err) { throw(err) }
  console.log(`Created ${recipes.length} recipes`);
  mongoose.connection.close()
})

// async () => {
//   try {
//     await Recipe.create(recipes);
//     console.log(`Created ${recipes.length} recipes`);
//     console.log(recipes);
//     mongoose.connection.close();
//   } catch (error) {
//     console.log(error)
//   }
// }
