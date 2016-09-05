import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'

const LoggedInNav = (props) => {
  return(
    <div id="navBar">
      <ul>
      <li><Link to ="/logout">Logout</Link></li>
      <li><Link to ="/user/profile">Profile</Link></li>
<<<<<<< f28010e1d507f5273f88c53cef9aefe1835f709c

=======
      <li><Link to ="/photo">Upload a Photo</Link></li>
      <li onClick = {function(){ props.LogMeOut(); props.toggleLogIn();}}><Link to ="/logout">Logout</Link></li>
      <li><Link to ="user/profile/">Profile</Link></li>
>>>>>>> commit before rebase
      <li><Link to ="/">Home</Link></li>
      </ul>
    </div>
    )
}

export default LoggedInNav