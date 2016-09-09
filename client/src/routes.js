//File contains the route setup to be exported to be used by App.js
import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import HomeContainer from './containers/HomeContainer'
import MyMemlysContainer from './containers/MyMemlysContainer'
import LikedMemlysContainer from './containers/LikedMemlysContainer'
import ProfileContainer from './containers/ProfileContainer'
import EditProfileContainer from './containers/EditProfileContainer';
import ImageUploadContainer from './containers/ImageUploadContainer'
import GoogleMapContainer from './containers/GoogleMapContainer';
import axios from 'axios'


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={HomeContainer}>
      <IndexRoute component={GoogleMapContainer}/>
      <Route path='/logout' component={GoogleMapContainer}/>
      <Route path='/user/profile' component={ProfileContainer} onEnter={checkAuth}>
        <IndexRoute component={MyMemlysContainer} />
        <Route path='/likedmemlys' component={LikedMemlysContainer} />
        <Route path='/edit' component={EditProfileContainer} />
      </Route>
      <Route path='/photo' component={ImageUploadContainer} />
    </Route>
  </Router>
)


// you can use an onEnter hook before entering routes to check if user is authorized. (i.e. can check the state logged in or not)
// this is a good way to do client side route protection. Without this, although they may not be able to see any of their data, anyone can still enter /user/profile route
function checkAuth(nextState, replace){
  //the fact that we have been rerouted by server to here means that we are authorized to be here
  //but what if someone manually enters.. 'https:localhost:3000/user/profile'?
  //**** UNCOMMENT LINE BELOW TO SEE HOW onENTER HOOK WORKS ****//
  
  // replace('/');
}

export default routes

