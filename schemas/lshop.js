
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;
    
    const lshopSchema = new Schema({
        pic:{type:String},
        score:{type:String},
        price:{type:String},
        sales:{type:String},
        time:{type:String},
        distance:{type:String},
        message:{type:String},
        name:{type:String},
        label:{type:Array},
        list:{type:Array},
        foodList:{type:Schema.Types.ObjectId,ref:"food"}
    })
    
    module.exports = mongoose.model('lshop',lshopSchema)