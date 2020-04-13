require('dotenv').config()

const server = require('./src/server')
const listenServer = function() {
    return new Promise((resolve, reject) => {
        server.listen(8080, () => {
            resolve()
        })
    })
}

async function main() {
    await listenServer()
    console.log('SHAFT SERVER LISTENING on port 8080')
}

main()
    .then(() => {
        console.log('api ready')
    })
    .catch(error => {
        console.error('ERROR', error)
    })