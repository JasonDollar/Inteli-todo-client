import React, { useState } from 'react'

import { ToDoList } from '../components'

const TODOS_TEST = [
  {
    id: 1,
    title: 'First todo',
    completed: false,
  },
]

const MainList: React.FC = () => {
  const [todos] = useState(TODOS_TEST)
  return (
    <div>
      <ToDoList todos={todos} />
    </div>
  )
}

export { MainList }
