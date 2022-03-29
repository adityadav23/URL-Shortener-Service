const express = require('express')
const app = express()

const urlRouter = require('./routes/url.routes')
const redirectRouter = require('./routes/redirect.routes')

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Url Shortner</h1> <a href =/api/v1/redirect> Redirect route </a>')
}
    )

app.use('/api/v1/',urlRouter)
app.use('/api/v1/redirect', redirectRouter)


module.exports = app