const http = require('http')
const fs = require('fs')

const urls = {
  homePage: '/',
  replaceButton: '/app.js',
  download: '/download'
}

const resourses = new Map()
resourses.set(urls.homePage, 'index.html')
resourses.set(urls.replaceButton, 'app.js')
const list = ['David Flanagan', 'Kylie Moor', 'John Lee', 'Jeremy Doe']
resourses.set(urls.download, JSON.stringify(list))

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

  if (request.url === urls.homePage) {
    fs.readFile(resourses.get(request.url), (err, content) => {
      if (err) showErrorScreen()
      else buildResponse(content)
    })
  }

  if (request.url === urls.replaceButton) {
    fs.readFile(resourses.get(request.url), (err, content) => {
      if (err) showErrorScreen()
      else buildResponse(content)
    })
  }

  if (request.url === urls.download) {
    buildResponse(resourses.get(request.url))
  }
}).listen(3000)

console.log('Server running at http://127.0.0.1:3000/')
