import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'

const LoggedInNav = (props) => {
  return(
    <div id="navBar">
      <ul>

      <li onClick = {function(){ props.LogMeOut(); props.toggleLogIn();}}><Link to ="/logout">Logout</Link></li>

      <li id = "Upload"><Link to ="/photo">Upload Photo</Link></li>
      <li><Link to ="/">Home</Link></li>
      </ul>
      <a id ="getProfileLink" href="user/profile/" onClick = {() =>props.retrieveProfileInfo()}>Profile</a>
    </div>
    )
}

export default LoggedInNav


//<li onClick = {function(){ props.getProfile();}}><Link to ="user/profile/">Profile</Link></li>