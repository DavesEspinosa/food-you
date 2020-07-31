const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", default: null },
    title: { type: String, required: true },
    inspiration: { type: String, required: true },
    ingredients: { type: [String], required: true },
    cuisine: {
      type: String,
      enum: ["Asian", "Mediterranian", "Vegan"],
      required: true,
    },
    video: { type: String, required: true },
    image: {
      type: String,
      required: true,
    },
    duration: { type: Number, min: 0, max: 1000 },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;

// lines 33 and 35 could be done in one line:
// module.exports = mongoose.model('Recipe', recipeSchema);
