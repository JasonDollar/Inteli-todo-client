import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TodoContext } from '../contexts/TodoContext'

const CreateTodo = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { addTodo } = useContext(TodoContext)
  // console.log(context)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newTodo = {
      id: uuidv4(),
      title,
      description,
      completed: false,
    }
    console.log(newTodo)
    addTodo(newTodo)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="title">Description (optional)</label>
          <input id="title" type="text" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export { CreateTodo }
