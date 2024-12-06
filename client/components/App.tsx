import React from 'react'
import TaskList from './TasksList'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <TaskList />
      </section>
    </>
  )
}

export default App
