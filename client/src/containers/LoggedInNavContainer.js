import React, { PropTypes } from 'react'
import LoggedInNav from '../components/Home'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
class LoggedInNavContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <div id="navBar">
          <ul>
          <li><Link to ="/logout">Logout</Link></li>
          <li><Link to ="/user/profile">Profile</Link></li>
          <li><Link to ="/">Home</Link></li>
          </ul>
        </div>
        <div id = "wrapper">
        <Home/>
        {this.props.children}
        </div>
      </div>
      )
  }

}

export default LoggedInNavContainer