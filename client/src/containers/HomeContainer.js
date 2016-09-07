import React, { PropTypes } from 'react'
import Home from '../components/Home'
import LoggedInNavContainer from './LoggedInNavContainer'
import LoggedOutNavContainer from './LoggedOutNavContainer'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'

export default class HomeContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      //user state will change based upon which user is signed via Facebook/passport. name: 'Rob' is just dummy data to consolelog
      user: {name: 'Rob'}
    }
  }

  componentDidMount() {
    //console.log('it hit componentDidMount =====>', this.state.user, this.props);
  }


  componentDidUpdate() {
    //console.log('it hit componentDidUpdate =====>', this.state.user, this.props);
  }


  //updateUserState changes the state of 'user'. it gets called when 'onClick' one of the navbar items in LoggInNavContainer
  updateUserState(userObject) {
    this.setState({
      user: userObject
    });
    //console.log('checking if user state is updated', this.state.user);
  }


  toggleLogIn() {
    var changeLogInState = !this.state.isLoggedIn;
    this.setState({
      isLoggedIn: changeLogInState
    });
  }

  changeNavToAlreadyLoggedIn() {
    this.setState({
      isLoggedIn: true
    });
  }

  render() {
    var context = this;
    var childToggleLogIn = this.toggleLogIn.bind(this);
    var childChangeNavToAlreadyLoggedIn = this.changeNavToAlreadyLoggedIn.bind(this);
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        toggleLogIn: childToggleLogIn,
        changeNavToAlreadyLoggedIn: childChangeNavToAlreadyLoggedIn
      })
    );

    return(
      <div>
        {this.state.isLoggedIn ? <LoggedInNavContainer toggleLogIn={this.toggleLogIn.bind(this)} updateUserState={this.updateUserState.bind(this)}/> : <LoggedOutNavContainer toggleLogIn={this.toggleLogIn.bind(this)}/>}
        <Home/>
        {childrenWithProps}
      </div>
    )
  }
}