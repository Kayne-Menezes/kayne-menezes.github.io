import superagent from 'superagent'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/tasks'

export async function fetchTasks() {
  try {
    const response = await superagent.get(BASE_URL)
    return response.body
  } catch (error) {
    console.error('Error fetching tasks:', error)
    throw error
  }
}

export async function addTask(name: string) {
  try {
    const response = await superagent
      .post(BASE_URL)
      .send({ name, status: false })
    return response.body
  } catch (error) {
    console.error('Error adding task:', error)
    throw error
  }
}

export async function deleteTask(id: number) {
  try {
    await superagent.del(`${BASE_URL}/${id}`)
  } catch (error) {
    console.error('Error deleting task:', error)
    throw error
  }
}
