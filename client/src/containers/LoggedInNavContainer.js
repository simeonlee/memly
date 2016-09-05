import React, { PropTypes } from 'react'
import LoggedInNav from '../components/LoggedInNav'
import axios from 'axios'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
class LoggedInNavContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  LogMeOut() {
    axios.get('/logout')
      .then(function(res) {
        console.log('I made it to logout button', res);
      });
  }

  render() {
    return(
      <div className = 'NavContainer'>
        <LoggedInNav LogMeOut={this.LogMeOut.bind(this)} toggleLogIn = {this.props.toggleLogIn}/>
      </div>
      )
  }

}

export default LoggedInNavContainer