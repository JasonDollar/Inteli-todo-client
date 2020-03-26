import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { ToDoList } from '../components'



const MainList: React.FC = () => {
  const { todos } = useContext(TodoContext)
  return (
    <div>
      <ToDoList todos={todos} />
    </div>
  )
}

export { MainList }
