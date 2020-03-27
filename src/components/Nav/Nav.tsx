import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.div`
  width: 100%;
  background: #119922;

`

const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 1rem;
  }

  a {
    text-decoration: none;
    color: #222;
    font-size: 2rem;
  }

  a.activeLink {
    color: #e5e5e5;
  }
`

const Nav = () => (
  <NavContainer>
    <div className="center">
      <NavigationList>
        <li>
          <NavLink to="/" activeClassName="activeLink" exact>
            Home
          </NavLink>

        </li>
        <li>
          <NavLink to="/create" activeClassName="activeLink">
            Create
          </NavLink>

        </li>
      </NavigationList>
    </div>
  </NavContainer>
)

export { Nav }
