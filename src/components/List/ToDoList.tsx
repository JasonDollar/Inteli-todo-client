import React from 'react'

interface Props {
  todos: any[]
}

const ToDoList: React.FC<Props> = ({ todos }) => (
  <div>
    {todos.map(item => (
      <p key={item.id}>{item.title}</p>
    ))}
  </div>
)

export { ToDoList }
