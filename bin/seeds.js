require("dotenv").config();

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Recipe = require("../models/recipe.model");
const User = require("../models/user.model");

const dbName = "food-you";
mongoose.connect(process.env.MONGODB_URI, {
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
    image: "/images/janine-meuche-Qm7LDtXB02A-unsplash.jpg",
    duration: 50,
  },
  {
    author: null,
    title: "Vietnamese chicken salad with crunchy peanuts",
    inspiration:
      "Shredded chicken, papaya and crunchy vegetables are coated in a sweet and sour dressing, then smattered with toasted peanuts – salads will never look boring again.",
    ingredients:
      "skinless boneless chicken thighs; Thai basil; cucumber; firm papaya; carrots; olive oil; red chillies; banana shallots; fresh mint",
    cuisine: "Asian",
    video: "https://www.youtube.com/watch?v=A9T2WK3dMeI",
    image: "/images/8-low-ural-l3Mr7vSdmd4-unsplash.jpg",
    duration: 25,
  },
  {
    author: null,
    title: "Vietnamese spicy beef and mango salad",
    inspiration:
      "Transport yourself to Vietnam with every bite of this spicy beef salad. The sweetness from the mango and the crunch from the carrots help combat the heat from the marinade.",
    ingredients:
      "soy sauce; chilli flakes; hot/mild chilli powder; chinese five-spice powder; fennel seeds; garlic cloves; brown sugar; white cabbage; fresh coriander",
    cuisine: "Asian",
    video: "https://www.youtube.com/watch?v=A9T2WK3dMeI",
    image: "/images/outcast-india-aVCyDXjU5rs-unsplash.jpg",
    duration: 40,
  },
  {
    author: null,
    title: "Lower-sugar fruity cheesecake pie",
    inspiration:
      "Our lower-sugar cheesecake, made with a malted milk biscuit base and topped with a mascarpone cheesecake mix and fresh berries.",
    ingredients:
      "blanched almonds; milk biscuits; oranges; gelatine sheets; vanilla extract; whipping cream; frozen raspberries; caster sugar; pomegranate seeds",
    cuisine: "Mediterranian",
    video: "https://www.youtube.com/watch?v=A9T2WK3dMeI",
    image: "/images/imattsmart-wgvbmn4d0Wk-unsplash.jpg",
    duration: 25,
  },
  {
    author: null,
    title: "Vegan ‘scrambled eggs’ with mushrooms and greens",
    inspiration:
      "Instead of tofu, our vegan ‘scrambled eggs’ recipe uses a mix of lentils, cashew butter, oat milk and lemon juice. You’ve got to try it!",
    ingredients:
      "red split lentils; oat milk; cashew butter; lemon juice; rice flour; garlic cloves; coriander seeds; large leaf spinach; portobellini mushrooms",
    cuisine: "Vegan",
    video: "https://www.youtube.com/watch?v=A9T2WK3dMeI",
    image: "/images/louis-hansel-shotsoflouis-iBfVwYwA3ek-unsplash.jpg",
    duration: 15,
  },
  {
    author: null,
    title: "Pumpkin black dhal",
    inspiration:
      "Serving vegan guests at a dinner party? This is the recipe you need. The contrast between the rich black dhal and orange roasted pumpkin is truly stunning. Drizzle in the herb and cashew sauce for a fabulous final flourish.",
    ingredients:
      "brown lentils; red onions; garam masala; chilli powder; ginger; olive oil; tomato purée; vegan vegetable stock pot; vegan spread",
    cuisine: "Vegan",
    video: "https://www.youtube.com/watch?v=A9T2WK3dMeI",
    image: "/images/louis-hansel-shotsoflouis-M26qaJz-4FE-unsplash.jpg",
    duration: 80,
  },
  {
    author: null,
    title: "Vegan miso mushroom, squash and chestnut wellington",
    inspiration:
      "This vegan wellington makes a standout centrepiece whatever the occasion. A mixture of miso mushrooms, sweet butternut and chestnuts are roasted until sweet, stirred through prunes, madeira and breadcrumbs and then baked in vegan puff pastry.",
    ingredients:
      "butternut squash; portobellini mushrooms; walnut halves; bag vacuum-packed whole chestnuts;  fresh flatleaf parsley; olive oil; miso paste; soft pitted prunes; panko breadcrumbs",
    cuisine: "Vegan",
    video: "https://www.youtube.com/watch?v=A9T2WK3dMeI",
    image: "/images/thiebaud-faix-KXTAn5FzDac-unsplash.jpg",
    duration: 130,
  },
  {
    author: null,
    title: "Lemon, potato and olive baked lamb with pangrattato",
    inspiration:
      "Expand your midweek repertoire with this easy Mediterranean-inspired recipe – just combine the ingredients and let your oven do the work.",
    ingredients:
      "kalamata olives; unwaxed lemon; charlotte potatoes; chilli flakes; lamb cutlets; olive oil; Herb Pangrattato; fresh parsley; garlic cloves",
    cuisine: "Mediterranian",
    video: "https://www.youtube.com/watch?v=A9T2WK3dMeI",
    image: "/images/louis-hansel-shotsoflouis-zR2r6Ub7zsc-unsplash.jpg",
    duration: 45,
  },
  {
    author: null,
    title: "Harissa salmon with green lentils and roast cherry tomatoes",
    inspiration:
      "A harissa salmon recipe, served with green lentils and roasted cherry tomatoes, that’s great for easy entertaining or a midweek treat.",
    ingredients:
      "salmon fillets; harissa paste; cherry tomatoes; red onion; bay leaf; garlic cloves; puy lentils; lemon juice; fresh parsley",
    cuisine: "Asian",
    video: "https://www.youtube.com/watch?v=A9T2WK3dMeI",
    image: "/images/pichara-bann-g-I7PRofUoE-unsplash.jpg",
    duration: 35,
  },
];

Recipe.create(recipes, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${recipes.length} recipes`);
  mongoose.connection.close();
});
