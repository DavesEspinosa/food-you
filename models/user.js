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
  favs: [ { type : Schema.Types.ObjectId, ref: 'Recipe' } ]
});

userSchema.set("timestamps", true);

const User = mongoose.model("User", userSchema);

module.exports = User;
