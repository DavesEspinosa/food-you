const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type:String, required:true},
  firstname:  {type:String, required:true},
  username:  {type:String, required:true}, 
  email:  {type:String, required:true}, 
  firstname:  {type:String, required:true}, 
  postcode: {type:Number, required:true},
  address: {type:String, required:true},
  city: {type:String, required:true},
  phone: {type:String, required:true},
  profilePicture: { type: String }, // agregar url public image profile picture para el default
  cartList: [ { type : Schema.Types.ObjectId, ref: 'Recipe' } ],
  ownRecipe: [ { type : Schema.Types.ObjectId, ref: 'UserRecipe' } ],
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
