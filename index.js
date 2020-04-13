require('dotenv').config()
const { PORT } = process.env

const server = require('./src/server')
const listenServer = function() {
    return new Promise((resolve, reject) => {
        server.listen(PORT, () => {
            resolve()
        })
    })
}

async function main() {
    await listenServer()
    console.log(`SHAFT SERVER LISTENING on port ${PORT}`)
}

main()
    .then(() => {
        console.log('api ready')
    })
    .catch(error => {
        console.error('ERROR', error)
    })