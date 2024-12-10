import express from 'express'
import server from './server'
import tasksRouter from './routes/tasks'

const PORT = process.env.PORT || 3000

server.use('/api/tasks', tasksRouter)

server.listen(PORT, () => {
  console.log(`The Server is running at ${PORT}`)
})
