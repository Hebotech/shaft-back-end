const express = require('express')
const companiesRouter = require('./router/hubspotCompanies')
const cors = require('cors')
const app = express()

app.use(cors())
    // app.use(express.json())
app.use('/companies', companiesRouter)

require('./prod')(app);

app.get('/', (req, res) => {
    res.json({
        "message": 'Api Shaft working'
    })
})

module.exports = app