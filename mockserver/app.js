const http = require('http')

const mockData = require('./mock.json')

const hostname = '127.0.0.1'
const port = 3301

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(mockData))
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})