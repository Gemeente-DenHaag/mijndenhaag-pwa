const http = require('http')

const fs = require('fs')
const hostname = '127.0.0.1'
const port = 3301

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    fs.readFile('./mock.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        res.end(data)
    })
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})