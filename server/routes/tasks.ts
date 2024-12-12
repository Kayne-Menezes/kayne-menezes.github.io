import express from 'express'
import db from '../db/connection.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const tasks = await db('tasks').select('*')
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' })
  }
})

router.post('/', async (req, res) => {
  const { name, status = false } = req.body
  try {
    const [newTask] = await db('tasks').insert({ name, status }).returning('*')
    res.status(201).json(newTask)
  } catch (error) {
    res.status(500).json({ error: 'Failed to add task' })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deletedCount = await db('tasks').where({ id }).del()
    if (deletedCount) {
      res.status(200).json({ message: 'Task deleted successfully' })
    } else {
      res.status(404).json({ error: 'Task not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' })
  }
})

export default router
