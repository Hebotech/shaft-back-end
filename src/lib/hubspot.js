const Hubspot = require('hubspot')

const { HUBSPOT_API_KEY } = process.env

module.exports = new Hubspot({
    apiKey: HUBSPOT_API_KEY,
})