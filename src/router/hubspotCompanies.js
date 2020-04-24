const express = require('express')
const router = express.Router()
const hubspot = require('../lib/hubspot')

router.get('/', async(req, res) => {
    let opts = {
        properties: ['name', 'website', 'country', 'clics_de_hebotech', 'fav'],
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

router.put('/:id', async(req, res) => {
    try {
        const { id } = req.params
        const body = req.body
        const companyUpdate = await hubspot.companies.update(id, body)
        res.json({
            success: true,
            message: `Company ${id} update`,
            data: companyUpdate
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'Something went wrong',
            error: error.message
        })
    }
})

module.exports = router