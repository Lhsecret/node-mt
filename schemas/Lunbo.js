const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LunboSchema = new Schema({
    pic:{type:String},
    id:{type:String}
})

module.exports = mongoose.model('Lunbo',LunboSchema)