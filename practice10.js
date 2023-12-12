const myModule = require('./personalModule.js')
const http = require('http')
const os = require('node:os')
const path = require('path')

// Task 1
const currentUser = os.userInfo().username
const osType = os.version()
const osUptime = os.uptime()
const currentDir = __dirname
const currentFile = __filename
const serverFileName = path.basename(currentFile)

http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write(`<H2>System information</H2>
                  <p>Current username: ${currentUser}
                  <p>OS type: ${osType}
                  <p>System worktime: ${osUptime}
                  <p>Current work directory: ${currentDir}
                  <p>Server file name: ${serverFileName}`)
  response.end('<p>')
}).listen(5000)

console.log('Server running at http://127.0.0.1:5000/')

// Task 2
const currentDate = new Date()
const userGreeting = myModule.userGreeting(currentUser)

http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write(`<p>Day of the request: ${currentDate}
                  <p> ${userGreeting}`)
  response.end('<p>')
}).listen(8000)

console.log('Server running at http://127.0.0.1:8000/')
