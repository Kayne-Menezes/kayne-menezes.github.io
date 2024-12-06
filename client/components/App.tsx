<<<<<<< HEAD
import React from 'react'
import TaskList from './TasksList'
=======
import React, { useState, useEffect } from 'react'
import Tasks from './TodoList'
>>>>>>> 90b7c625ad6b65378b2cde7bc926cf083acdb12b

function App() {
  return (
    <>
      <header className="header">
        <h1>To-Do List</h1>
      </header>
      <section className="main">
<<<<<<< HEAD
        <TaskList />
=======
        <div>
          <Tasks />
        </div>
>>>>>>> 90b7c625ad6b65378b2cde7bc926cf083acdb12b
      </section>
    </>
  )
}

export default App
