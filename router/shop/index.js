const express = require('express')
const router = express.Router()
const shopDB = require('../../schemas/shop')
const foodDB = require('../../schemas/food')
// const shop = require('../../schemas/shop')
    let num = -1
    let findAll
    let data
router.get('/shop',async(req,res)=>{

    if(num === -1){
        findAll = await shopDB.find()
        data = findAll.slice(0,5)
        // let data2 = await shopDB.find().populate('foodList')
        
        // console.log(data2)
        res.send({
            data,
            // data2,
            code:0  
        })
                
    }  
        num++        
        setTimeout(async()=>{
        if(num >= 1){
            findAll = await shopDB.find()  
            // let data2  
            if(findAll.length - num*5+5 < 0){
                data = findAll.slice(num*5)
                //  data2 = await shopDB.find().populate('foodList')
            }else{
                data = findAll.slice(5*num,5*num + 5)
                //  data2 = await shopDB.find().populate('foodList')
            }     
            // data = findAll.slice(5*num,5*num + 5)
            // num++  
            res.send({
                data,       
                // data2,  
                code:0     
            })             
            if(num*5 >= findAll.length){
                num = -1
            }   
        } 
       },1000)
// console.log(findAll.length)  
    //  let findAll = await shopDB.find()
    //     let data = findAll.slice(0,7)
    //     res.send({
    //                 data,  
                    
    //                 code:0
    //             })
})

router.get('/isshow',async(req,res)=>{
    const {scraf} = req.query
    // console.log(scraf)
    // let data = await foodDB.find()
    let data2 = await shopDB.find().populate('foodList')
    // let data1 = data2.slice(data2.length - 2)
  
    let data = []
    //   console.log(data2[0].foodList.foodList)
    for(let item of data2){
        const a = item.name.indexOf(scraf)  
        const middle = item.foodList.foodList
        let index = 0
        for(const i of middle){
            if(i.foodname.search(scraf) != -1){
                index++
            }
        //    console.log(i.foodname)
        }
        // const b = item.foodList.foodList.filter(i=>{
        //     return i.foodname.indexOf(scraf)
        // })
        // console.log(b.length)    
        if(a > 0){
            data.push(item)  
        }
        if(index != 0){
            data.push(item)
        }
    }
   
    // console.log(data)
//    console.log(arr)  
    res.send({  
        data,
        code:0
    })
})




module.exports = router