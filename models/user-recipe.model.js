const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userRecipeSchema = new Schema({
  recipe: { type: Schema.Types.ObjectId, ref: 'Recipe'}
});

const UserRecipe = mongoose.model('UserRecipe', userRecipeSchema);

module.exports = UserRecipe;
