const express = require('express')
const res = require('express/lib/response')
const app = express()

const urlRouter = require('./routes/url.routes')
const redirectRouter = require('./routes/redirect.routes')

app.use(express.json())

app.get('/',(req,res)=>{
    res.send(`hello`)
})
app.use('/api/v1/',urlRouter)
app.use('/api/v1/redirect', redirectRouter)


module.exports = app