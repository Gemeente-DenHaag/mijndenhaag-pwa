const http = require('http')

const fs = require('fs')
const hostname = '127.0.0.1'
const port = 3301

/**
 * Creating a server instance
 */
const server = http.createServer((req, res) => {
    res.statusCode = 200 //Requests are successfull by default

    if (req.url.includes(".png") || req.url.includes(".jpeg") || req.url.includes(".jpg") || req.url.includes(".ico")) {
        res.setHeader('Content-Type', 'image/*') //We are returning an image
        handleRequest(`./mocks${req.url}`, res, true)
    } else if (req.url.length <= 1) {
        res.setHeader('Content-Type', 'application/json') //We are returning json
        handleRequest("./mocks/page.json", res, false)
    } else {
        res.setHeader('Content-Type', 'application/json') //We are returning json
        handleRequest(`./mocks/${req.url}/page.json`, res, false)
    }
})

/**
 * Start listening
 */
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})

/**
 * Handle the request with the given path and response
 * @param {*} path: The path of the requested file
 * @param {*} res: The response object 
 * @param {*} image: True if response is an image.
 */
function handleRequest(path, res, image) {
    fs.readFile(path, (err, data) => {
        if (err) { //Handling of failed requests
            console.error(err)

            if (err.code == "ENOENT") {
                res.statusCode = 404 //If the file cannot be found we return a 404 error
            } else {
                res.statusCode = 500 //Other errors result in an error 500
            }
            res.end()
            return
        }
        if (image)
        {
            res.end(data, 'binary') //Return our request with data
        }
        else
        {
            res.end(data) //Return our request with data
        }
    })
}