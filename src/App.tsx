import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { MainList } from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainList />
        </Route>
      </Switch>
    </Router>

  )
}

export default App
 