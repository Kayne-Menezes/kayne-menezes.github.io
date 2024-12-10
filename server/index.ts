import { Router } from 'express'
import tasksRouter from './routes/tasks'

const router = Router()

router.use('/tasks', tasksRouter)

export default router
