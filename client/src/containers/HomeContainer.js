import React, { PropTypes } from 'react'
import Home from '../components/Home'
import LoggedInNavContainer from './LoggedInNavContainer'
import LoggedOutNavContainer from './LoggedOutNavContainer'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'

class HomeContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,

    }
  }


  toggleLogIn() {
    var changeLogInState = !this.state.isLoggedIn;

    this.setState({
      isLoggedIn: changeLogInState
    });

  }


  render() {
    var childToggleLogIn = this.toggleLogIn.bind(this);
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       toggleLogIn: childToggleLogIn
     })
    );

    return(
      <div>
      {this.state.isLoggedIn ? <LoggedInNavContainer toggleLogIn={this.toggleLogIn.bind(this)}/> : <LoggedOutNavContainer toggleLogIn={this.toggleLogIn.bind(this)}/>}
        <div id = "wrapper">
        <Home/>
        {childrenWithProps}
        </div>
      </div>
      )
  }

}

export default HomeContainer