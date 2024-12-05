import React, { useState, useEffect } from 'react'
import Tasks from './TodoList'

function App() {
  return (
    <>
      <header className="header">
        <h1>To-Do List</h1>
      </header>
      <section className="main">
        <div>
          <Tasks />
        </div>
      </section>
    </>
  )
}

export default App
