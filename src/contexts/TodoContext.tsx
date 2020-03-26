import React, { useState, createContext, useReducer } from 'react'
import { Todo } from '../interfaces'

interface TodoContext {
  todos: Todo[]
  addTodo: (todo: Todo) => void
}

interface State {
  todos: Todo[]
}

interface Action {
  type: 'ADD',
  payload?: any
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    default:
      return state
  }
}

export const TodoContext = createContext<TodoContext>({} as TodoContext)

const TODOS_TEST = [
  {
    id: 'b5fda799-c1ac-4a88-9c29-97232e7b9564',
    title: 'First todo',
    completed: false,
  },
]

export const TodoProvider = ({ children }: any) => {
  // const [todos, setTodos] = useState<Todo[]>([])
  const [state, dispatch] = useReducer(reducer, { todos: TODOS_TEST })

  const addTodo = (todo: Todo): void => {
    dispatch({
      type: 'ADD',
      payload: todo,
    })
  }

  return (
    <TodoContext.Provider value={{ todos: state.todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  )
}