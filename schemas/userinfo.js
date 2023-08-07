// 创建 userinfo表规则
const mongoose = require('mongoose')

// 辅助我们把明文转为密文 
const bcryptjs = require('bcryptjs')

const Schema = mongoose.Schema

const userSchema = new Schema({
  // 姓名
  username: {
    type: String,
    require: true,
    // 唯一的 
    unique: true
  },
  // 密码
  password: {
    type: String,
    require: true,
    
    set(value) {             

      
      return bcryptjs.hashSync(value, 10)
    }
  },
 
  photo: {
    type: String,
    default: '/images/1.gif' // 默认图片
  },

  addressMessage:{
    type: Array,
  },
  // phone:{
  //   type:Number
  // },
  // contacts:{
  //   type:String
  // },
  // foodList:{
  //   type:Array
  // }
})


module.exports = mongoose.model('userinfo', userSchema)