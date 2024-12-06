import React, { useState } from 'react'
import '../styles/index.css'

export default function Tasks() {
  const [task, setTask] = useState('')

  return (
    <>
      <section>
        <div>
          <h1>Objectives for Today!</h1>
        </div>
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      </section>
    </>
  )
}
