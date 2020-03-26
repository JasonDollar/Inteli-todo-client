import React, { createContext, useReducer } from 'react'
import { Todo } from '../interfaces'
import { saveInLocalStorage } from '../lib/saveInLocalStorage'

interface TodoContext {
  todos: Todo[]
  addTodo: (todo: Todo) => void
  toggleTodoCompleted: (todo: any) => void
}

interface State {
  todos: Todo[]
}

interface Action {
  type: 'ADD' | 'TOGGLE_COMPLETED',
  payload?: any
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD':
      // 
      return { todos: [...state.todos, action.payload] }
    case 'TOGGLE_COMPLETED':
      return {
        todos: state.todos.map(item => {
          if (item.id === action.payload) {
            return { ...item, completed: !item.completed }
          }
          return item
        }),
      }
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
  let todosLocalStorage = JSON.parse(localStorage.getItem('todos') as string)
  if (!todosLocalStorage) {
    todosLocalStorage = { todos: TODOS_TEST }
  }
  const [state, dispatch] = useReducer(reducer, todosLocalStorage)
  // saves state on local storage for every change
  saveInLocalStorage('todos', state)

  const addTodo = (todo: Todo): void => {
    dispatch({
      type: 'ADD',
      payload: todo,
    })
  }

  const toggleTodoCompleted = (id: any) => {
    dispatch({
      type: 'TOGGLE_COMPLETED',
      payload: id,
    })
  }

  return (
    <TodoContext.Provider value={{ todos: state.todos, addTodo, toggleTodoCompleted }}>
      {children}
    </TodoContext.Provider>
  )
}