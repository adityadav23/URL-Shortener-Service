const express = require('express')
const res = require('express/lib/response')
const app = express()

const urlRouter = require('./routes/url.routes')

app.use(express.json())

app.use('/api/v1/',urlRouter)

app.get('/',(req,res)=>{
    res.send(`hello`)
})


module.exports = app