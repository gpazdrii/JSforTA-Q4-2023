const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
  function buildResponse (content) {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write(content)
    response.end()
  }

  function showErrorScreen () {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.end('404 Not Found')
  }

  if (request.url === '/') {
    fs.readFile('index.html', (err, content) => {
      if (err) showErrorScreen()
      else buildResponse(content)
    })
  }

  if (request.url === '/app.js') {
    fs.readFile('app.js', (err, content) => {
      if (err) showErrorScreen()
      else buildResponse(content)
    })
  }

  if (request.url === '/download') {
    const list = ['David Flanagan', 'Kylie Moor', 'John Lee', 'Jeremy Doe']
    buildResponse(JSON.stringify(list))
  }
}).listen(3000)

console.log('Server running at http://127.0.0.1:3000/')
