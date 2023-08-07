const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FdcategorySchema = new Schema({
    imgUrl:{type:String},
    text:{type:String}  
})  
          
module.exports = mongoose.model('Fdcategory',FdcategorySchema)       