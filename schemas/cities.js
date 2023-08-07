const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citiesSchema = new Schema({
    id:{type:Number},
    name:{type:String},
    abbr:{type:String},
    sort:{type:Number},
    latitude:{type:Number},
    longitude:{type:Number},
    is_map:{type:Boolean},
    pinyin:{type:String},
    category:{type:String}
})


module.exports = mongoose.model('cities',citiesSchema)