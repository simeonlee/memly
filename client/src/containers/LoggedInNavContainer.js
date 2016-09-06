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

  retrieveProfileInfo() {
    var context = this;
    //console.log('i am hitting the getProfile function');
    axios.get('/user/retrieve/profileinfo/')
      .then(function(res) {
        //console.log('I hit the the getProfile function and got a response--------->', res.data);
        context.props.updateUserState(res.data);
      });
  }

  render() {
    return(
      <div className = 'NavContainer'>
        <LoggedInNav LogMeOut={this.LogMeOut.bind(this)} toggleLogIn = {this.props.toggleLogIn} retrieveProfileInfo = {this.retrieveProfileInfo.bind(this)}/>
      </div>
      )
  }

}

export default LoggedInNavContainer