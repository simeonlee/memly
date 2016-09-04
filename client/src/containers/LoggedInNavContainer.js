import React, { PropTypes } from 'react'
import LoggedInNav from '../components/LoggedInNav'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
class LoggedInNavContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className = 'NavContainer'>
        <LoggedInNav/>
      </div>
      )
  }

}

export default LoggedInNavContainer