import React, { useContext } from 'react'
import { Todo } from '../../interfaces'
import { TodoContext } from '../../contexts/TodoContext'

interface Props {
  todoItem: Todo
}


const TodoItem: React.FC<Props> = ({ todoItem: { id, title, completed } }) => {
  const { toggleTodoCompleted } = useContext(TodoContext)

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input type="checkbox" checked={completed} onChange={() => toggleTodoCompleted(id)} />
      <p>{title}</p>
    </div>
  )
}

export { TodoItem }
