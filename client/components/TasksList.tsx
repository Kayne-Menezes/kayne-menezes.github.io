import React, { useState, useEffect } from 'react'
import { fetchTasks, addTask, deleteTask } from '../apis/tasksAPI'

interface Task {
  id: number
  name: string
  status: boolean
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskName, setNewTaskName] = useState<string>('')

  useEffect(() => {
    fetchTasks()
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error loading tasks:', error))
  }, [])

  const handleAddTask = async () => {
    if (newTaskName.trim() === '') {
      alert('Task name cannot be left blank')
      return
    }

    try {
      const newTask = await addTask(newTaskName)
      setTasks([...tasks, newTask])
      setNewTaskName('')
    } catch (error) {
      console.error('Error adding task:', error)
    }
  }

  const handleDeleteTask = async (id: number) => {
    try {
      await deleteTask(id)
      setTasks(tasks.filter((task) => task.id !== id))
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  return (
    <div>
      <h1>Task List</h1>
      <ul className="ListedItems">
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} - {task.status ? 'Completed' : 'Pending'}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Enter new task name"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  )
}
