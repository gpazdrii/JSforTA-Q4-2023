const http = require('http')
const fs = require('fs')

const urls = {
  homePage: '/',
  updateButton: '/app.js',
  getDate: '/date'
}

const resourses = new Map()
resourses.set(urls.homePage, 'index.html')
resourses.set(urls.updateButton, 'app.js')
const date = new Date()
resourses.set(urls.getDate, date.toString())

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

  if (request.url === urls.updateButton) {
    fs.readFile(resourses.get(request.url), (err, content) => {
      if (err) showErrorScreen()
      else buildResponse(content)
    })
  }

  if (request.url === urls.getDate) {
    buildResponse(resourses.get(request.url))
  }
}).listen(3000)

console.log('Server running at http://127.0.0.1:3000/')
