import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'

const LoggedInNav = (props) => {
  return(
    <div id="navBar">
      <ul>
      <li><Link to ="/logout">Logout</Link></li>
      <li><Link to ="/user/profile">Profile</Link></li>
      <li><Link to ="/photo">Upload</Link></li>
      <li><Link to ="/">Home</Link></li>
      </ul>
    </div>
    )
}

export default LoggedInNav