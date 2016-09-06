import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'

const LoggedInNav = (props) => {
  return(
    <div id="navBar">
      <ul>
<<<<<<< e8577862021a0ce1902655d79939a46b0a03e3f7

<<<<<<< f28010e1d507f5273f88c53cef9aefe1835f709c

=======


>>>>>>> commit before rebase
=======
      <li onClick = {function(){ props.LogMeOut(); props.toggleLogIn();}}><Link to ="/logout">Logout</Link></li>

      <li id = "Upload"><Link to ="/photo">Upload Photo</Link></li>
>>>>>>> Adds passport/facebook authentication, session functionality, custom profile view based upon user signed in
      <li><Link to ="/">Home</Link></li>
      </ul>
      <a id ="getProfileLink" href="user/profile/" onClick = {() =>props.retrieveProfileInfo()}>Profile</a>
    </div>
    )
}

export default LoggedInNav


//<li onClick = {function(){ props.getProfile();}}><Link to ="user/profile/">Profile</Link></li>