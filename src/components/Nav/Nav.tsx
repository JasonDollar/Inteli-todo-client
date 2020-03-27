import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <div>
    <NavLink to="/">
      Home
    </NavLink>
    <NavLink to="/create">
      Create
    </NavLink>
  </div>
)

export { Nav }
