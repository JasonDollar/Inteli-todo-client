import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { MainList, CreateTodo } from './pages'
import { TodoProvider } from './contexts/TodoContext'

function App() {
  return (
    <Router>
      <TodoProvider>
        <div className="center">

          <Switch>
            <Route path="/" exact>
              <MainList />
            </Route>
            <Route path="/create" exact>
              <CreateTodo />
            </Route>
          </Switch>
        </div>
      </TodoProvider>
    </Router>

  )
}

export default App
 