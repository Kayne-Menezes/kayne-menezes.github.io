import * as Path from 'node:path'
import express from 'express'

const server = express()

server.use(express.json())

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('dist')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('dist/index.html'))
  })
}

export default server
