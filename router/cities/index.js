const express = require('express')

const router = express.Router()
const citiesDB = require('../../schemas/cities')


router.get('/cities',async(req,res)=>{
    const {type} = req.query
    

})