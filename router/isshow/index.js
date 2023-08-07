const express = require('express')
const router = express.Router()

const shopDB = require("../schemas/shop")


    let num = -1
    let findAll
    let data
router.get('/search',async(req,res)=>{

    if(num === -1){
        findAll = await shopDB.find()
        data = findAll.slice(0,5)
        
        res.send({
            data,
            
            code:0  
        })
      
    }


})
