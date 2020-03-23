const express = require('express')
const router = express.Router()

const Hubspot = require('hubspot')
const hubspot = new Hubspot({
    apiKey: 'a7b768b4-98a7-4c0e-a62c-b0396fd6c8fb',
})

router.get('/', async(req, res) => {
    let opts = {
        properties: ['name', 'website', 'country'],
    }
    try {
        const allCompanies = await hubspot.companies.get(opts)
        res.json({
            success: true,
            message: 'All companies',
            data: allCompanies

        })
    } catch (error) {
        res.json({
            success: false,
            message: 'No se obtuvieron las compañías',
            error: error
        })
    }
})

module.exports = router