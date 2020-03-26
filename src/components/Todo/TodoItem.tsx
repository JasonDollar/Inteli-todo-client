import React from 'react'
import { Todo } from '../../interfaces'

interface Props {
  todoItem: Todo
}


const TodoItem: React.FC<Props> = ({ todoItem: { id, title, completed } }) => (
  <div>
    <p>{title}</p>
  </div>
)

export { TodoItem }
