const express = require('express')
const router = express.Router()

// router.use('/v1',require('/cities'))

router.use('/v1',require('./Fdcategory'))
router.use('/v1meishi',require('./shop'))
router.use('/login',require('./login'))
router.use('/mine',require('./mine'))
router.use('/order',require('./order'))
// router.use('/v1Show',requir('./isshow'))
module.exports = router