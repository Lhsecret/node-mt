const express = require('express')
const router = express.Router()
const historyShopDB = require('../../schemas/historyShop')

router.post('/Cart',(req,res)=>{
    const {
        user,
        goodsPrice,
        goodsNum,
        goodsShop,
        goods
    } = req.body
    historyShopDB.create({
        user,
        goods,
        goodsNum,
        goodsPrice,
        goodsShop
    })
    res.send({
        code:0,
        msg:'购物车设置成功'
    })
})














module.exports = router
