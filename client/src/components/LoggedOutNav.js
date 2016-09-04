import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'

const LoggedOutNav = (props) => {
  return(
    <div id="navBar2">
      <ul>
      <li><Link to ="/Login">Login</Link></li>
      <li><Link to ="/">Home</Link></li>
      </ul>
    </div>
    )
}

export default LoggedOutNav