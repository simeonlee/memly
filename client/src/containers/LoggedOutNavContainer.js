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


  logInWithFacebook() {
    console.log('is this function for facebook login getting hit???');
    axios.get('/auth/facebook')
      .then(function(res) {
        console.log('I made it to logout button', res);
      });
  }



  render() {
    return(
      <div>
        <LoggedOutNav toggleLogIn = {this.props.toggleLogIn} logInWithFacebook = {this.logInWithFacebook.bind(this)}/>
      </div>
      )
  }

}

export default LoggedOutNavContainer