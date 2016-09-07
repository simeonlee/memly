import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'

const LoggedOutNav = (props) => {
  return(
    <div id="navBar2">
      <ul>
      <li><Link to ="/">Home</Link></li>
      </ul>
      <a id ="FacebookLoginLink" href="/auth/facebook">Facebook</a>
    </div>
    )
}

export default LoggedOutNav