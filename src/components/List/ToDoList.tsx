import React from 'react'
import { Todo } from '../../interfaces'
import { TodoItem } from '../Todo/TodoItem'

interface Props {
  todos: Todo[]
}

const ToDoList: React.FC<Props> = ({ todos }) => (
  <div>
    {todos.map(item => (
      <TodoItem key={item.id} todoItem={item} />
    ))}
  </div>
)

export { ToDoList }
