import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'

const LoggedOutNav = (props) => {
  return(
    <div className="nav">
    	<div className="logo">Memly</div>
      <ul>
	      <li><Link to="/">Home</Link></li>
	      <li><a href="/auth/facebook">Login</a></li>
      </ul>
    </div>
    )
}

export default LoggedOutNav