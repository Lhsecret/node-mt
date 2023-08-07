const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historyShopSchema = new Schema({
   user:{type:String},
   shopPic:{type:String},
   shopName:{type:String},
   goods:{type:Array},
})  
          
module.exports = mongoose.model('historyShop',historyShopSchema)       