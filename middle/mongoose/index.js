// 链接数据库
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/mt', {
  useNewUrlParser: true, //防止莫名警告信息的 两条配置 
  useUnifiedTopology: true
})
  .then(() => {
    console.log("链接数据库成功");
  })
  .catch(() => {
    console.log("链接数据库失败");
  })