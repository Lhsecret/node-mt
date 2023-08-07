const express = require('express')
const router = express.Router()
const userinfoDB = require('../../schemas/userinfo')

router.post('/newaddress',async(req,res)=>{
    const data = req.cookies
    const username =  data.key
    // const find = await userinfoDB.findOne({username})
    const {contacts,phone,address} = req.body
    const middle = {
        contacts,
        phone,
        address
    }
    // console.log(find)
    // console.log(middle)
    await userinfoDB.updateMany({username},{$push:{addressMessage:middle}})
    // find.addressMessage.push({
    //     msg:'成功'
    // })
    res.send({
        code:0,
        msg:'保存成功',
        
    })
})


router.get('/address',async(req,res)=>{
    const data3 = req.cookies
    const username =  data3.key
    // console.log(username)
    const find = await userinfoDB.find({username},'addressMessage')
    // console.log(find)
    const data2 = [...find]
    const data = data2[0].addressMessage
    // console.log(data)
    res.send({
        code:0,
        data
    })
})

router.get('/delete',async(req,res)=>{
        const data = req.cookies
        const username =  data.key
        const {address} = req.query
        // const a = await userinfoDB.find({username})
        // console.log(req.query)
        // console.log(address)
        await userinfoDB.updateMany({username},{$pull:{addressMessage:{address}}})
        res.send({
            code:0,
            msg:'删除成功'
        })
    
})



module.exports = router

