// app.js
require('dotenv').config()

const { createServer } = require('http')

const PORT = process.env.PORT || 1234

const server = createServer((request, response) => {
  return response.end('Look, this is the response!')
})

server.listen(PORT, () => {
  console.log(`We are running the server on port ${PORT}`)
})

