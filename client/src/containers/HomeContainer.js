import React, { PropTypes } from 'react'
import Home from '../components/Home'
import LoggedInNavContainer from './LoggedInNavContainer'
import LoggedOutNavContainer from './LoggedOutNavContainer'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
class HomeContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: true,

    }
  }

  render() {
    return(
      <div>
      {this.state.isLoggedIn ? <LoggedInNavContainer/> : <LoggedOutNavContainer/>}
        <div id = "wrapper">
        <Home/>
        {this.props.children}
        </div>
      </div>
      )
  }

}

export default HomeContainer