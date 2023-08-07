const express = require('express')
const router = express.Router()
const FdcategoryDB = require('../../schemas/Foodcategory')
const LunboDB = require('../../schemas/Lunbo')
const shopDB = require('../../schemas/shop')

router.get('/Fdcategory',async(req,res)=>{
   let data = await FdcategoryDB.find()
   res.send({
    data,
    code:0
   })    
})

router.get('/Lunbo',async(req,res)=>{
   let data = await LunboDB.find()
   res.send({
    data,
    code:0
   })
})






// router.get('/shop',async(req,res)=>{
//     let data = await shopDB.find()
//     res.send({
//         data,
//         code:0
//     })
// })






module.exports = router
