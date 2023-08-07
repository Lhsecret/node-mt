const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

require('./middle/mongoose')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(express.static('./dist'))

require('./addData')  
app.use('/', require('./router'))
app.listen(5252, () => console.log(`http://localhost:5252`))   