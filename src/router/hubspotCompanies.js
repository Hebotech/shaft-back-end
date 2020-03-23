const express = require('express')
const router = express.Router()
const hubspot = require('../lib/hubspot')

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