import React from 'react'
import TaskList from './TasksList'

function App() {
  return (
    <>
      <header className="header">
        <h1>To-Do List</h1>
      </header>
      <section className="main">
        <TaskList />
      </section>
    </>
  )
}

export default App
