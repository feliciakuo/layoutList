const express = require('express')
const bodyParser = require('body-parser')

const server = express()
const routes = require('./api')

server.set('port', (process.env.PORT || 3000))

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS')
  next()
})

server.use(bodyParser.urlencoded({
  extended: true,
  parameterLimit: 10000,
  limit: 1024 * 1024 * 10
}))

server.use('/', routes)
server.listen(server.get('port'), () => console.log(`Mock server is running at http://localhost:${server.get('port')}`))
