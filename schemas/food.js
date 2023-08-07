const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    // pic:{type:String},
    // score:{type:String},
    // price:{type:String},
    // sales:{type:String},
    // time:{type:String},
    // distance:{type:String},
    // message:{type:String},
    // name:{type:String},

    foodList:[
        {
            foodname:{type:String,required:true},
            price:{type:String,required:true},
            sales:{type:String,required:true},
            comment:{type:String},
            other:{type:String},
            foodimg:{type:String}
        }
    ]
    
})

module.exports = mongoose.model('food',foodSchema)