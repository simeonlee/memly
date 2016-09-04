import React, { PropTypes } from 'react'
import LoggedOutNav from '../components/LoggedOutNav'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
class LoggedOutNavContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <LoggedOutNav/>
      </div>
      )
  }

}

export default LoggedOutNavContainer