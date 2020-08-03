const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", default: null },
    title: { type: String, required: true },
    inspiration: { type: String, required: true },
    ingredients: { type: String, required: true },
    cuisine: {
      type: String,
      enum: ["Asian", "Mediterranian", "Vegan", "Other"]
    },
    video: { type: String},
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
