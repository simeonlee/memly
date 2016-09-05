import React, { PropTypes } from 'react'
import LoggedOutNav from '../components/LoggedOutNav'
import axios from 'axios';
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
        <LoggedOutNav toggleLogIn = {this.props.toggleLogIn}/>
      </div>
      )
  }

}

export default LoggedOutNavContainer