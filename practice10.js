const myModule = require('./personalModule.js')
const http = require('http')
const os = require('node:os')
const path = require('path')

// Task 1
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write('<H2>System information</H2>')
  response.write('<p>Current username: ' + os.userInfo().username)
  response.write('<p>OS type: ' + os.version())
  response.write('<p>System worktime: ' + os.uptime())
  response.write('<p>Current work directory: ' + __dirname)
  response.write('<p>Server file name: ' + path.basename(__filename))
  response.end('<p>Testing NodeJS server\n')
}).listen(5000)

console.log('Server running at http://127.0.0.1:5000/')

// Task 2
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write('<p>Day of the request: ' + new Date())
  response.write('<p>' + myModule.userGreeting(os.userInfo().username))
  response.end('<p>Testing NodeJS server\n')
}).listen(8000)

console.log('Server running at http://127.0.0.1:8000/')
