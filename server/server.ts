import express from 'express'
import * as Path from 'node:path'
import tasksRouter from './routes/tasks' // Adjust the import path according to your structure

const app = express()
app.use(express.json())

app.use('/api/tasks', tasksRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(Path.resolve('public')))
  app.use('/assets', express.static(Path.resolve('./dist/assets')))

  app.get('*', (req, res) => {
    res.sendFile(Path.resolve('index.html'))
  })
}

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

export default app
