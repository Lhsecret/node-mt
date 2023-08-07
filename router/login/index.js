const getRandomString = require('../../utils/secretKey')

const secretDB = require("../../schemas/secretKey")
const express = require('express')
const router = express.Router()
const userinfoDB = require('../../schemas/userinfo')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

router.post('/',async(req,res)=>{
    let {username,password} = req.body
    // console.log(req.body)

  
    const RandomString = getRandomString(5)
     // 校验username的正则 0-7的字符 
  let regUser = /^[\u4E00-\u9FA5A-Za-z][\u4E00-\u9FA5A-Za-z0-9]{0,7}$/
    // 密码至少包含 数字和英文 长度6-20 
  let regpass = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/

  if (regUser.test(username) && regpass.test(password)) {

    let result = await userinfoDB.findOne({username})
    // console.log(result)
    if(result){
        const isPasswordSame = bcryptjs.compareSync(password,/*zq123456*/ result.password)

        if(isPasswordSame){
         
            const token = jwt.sign(
                {name:username},
                RandomString,  
                {algorithm:'HS256',expiresIn:'1d'}
            )
            const user = await secretDB.findOne({key:username})
            if(user){
              await secretDB.findByIdAndUpdate({_id:user._id},{secret:RandomString})
            }else{
                await secretDB.create({
                key:username,
                secret:RandomString
              })
            }
            
            res.cookie("value",`${token}`,{ httpOnly:true,maxAge:1000*60*60*24*2})
            res.cookie("key",`${username}`,{ httpOnly:true,maxAge:1000*60*60*24*2})
            
              // console.log(RandomString)
              res.send({
                code:0,
                data:{
                  photo:result.photo   
                }
              })
        }
    }


  }


})

router.get('/checkLogin',async(req,res)=>{
  const data = req.cookies


  const key =  data.key
  const value = data.value
  if(!key || !value){
    res.send({
      code:1
    })
  }else{
    const find = await secretDB.findOne({key})
    const {secret} = find
    // console.log(secret,value)
    jwt.verify(value,secret,(err,result)=>{
      if(err){
        res.send({
          code:1,
          test:1
        })
      }else{
        res.send({
          code:0,
          msg:'0'
        })  
      }
    })
  }

  // console.log(key,find)
 
  // console.log(value,secret)




  
  
  // res.send({
  //   code:0
  // })  

})

router.post('/loginout',(req,res)=>{
  //  const data =  req.cookies
  // const key =  data.key
  // const value = data.value
  // console.log(key,value)
  res.clearCookie('key')
  res.clearCookie('value')
  // await secretDB.
  res.send({
    code:2,
    msg:'退出成功'
  })
})

router.post('/Renewal',async(req,res)=>{
  const data = req.cookies
  const username =  data.key
  // const find = await secretDB.findOne({key})
  const RandomString = getRandomString(5)
  const token = jwt.sign(
    {name:username},
    RandomString,  
    {algorithm:'HS256',expiresIn:'1d'}
)
  const user = await secretDB.findOne({key:username})
  await secretDB.findByIdAndUpdate({_id:user._id},{secret:RandomString})
  res.cookie("value",`${token}`,{ httpOnly:true,maxAge:1000*60*60*24*2})
  res.cookie("key",`${username}`,{ httpOnly:true,maxAge:1000*60*60*24*2})
  res.send({
    code:0,
    msg:'续签成功'
  })
})


module.exports = router
