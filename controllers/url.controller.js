const validUrl = require('valid-url')
const shortid = require('shortid')
const Url = require('../models/url.model')

async function shortenUrl(req,res){
        
    // The API base Url endpoint
    const baseUrl = 'http://localhost:5000'
    const { longUrl } = req.body 
    
    // check base url if valid using the validUrl.isUri method
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base URL')
    }

    // if valid, we create the url code
    const urlCode = shortid.generate()

    // check long url if valid using the validUrl.isUri method
    if (validUrl.isUri(longUrl)) {
        try {
            //find if longUrl already in database
            let url = await Url.findOne({  longUrl })

            // url exist and return the respose
            if (url) {
              return  res.json(url)
            } else {
                // join the generated short code the the base url
                const shortUrl = baseUrl + '/' + urlCode

                // invoking the Url model and saving to the DB
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })
                await url.save()
                res.json(url)
            }
        }
        // exception handler
        catch (err) {
            console.log(err)
           return res.status(500).json('Server Error')
        }
    } else {
        return res.status(401).json('Invalid longUrl')
    }
}

module.exports = {
    shortenUrl,
}