//File contains the route setup to be exported to be used by App.js
import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import HomeContainer from './containers/HomeContainer'
import MyMemlysContainer from './containers/MyMemlysContainer'
import LikedMemlysContainer from './containers/LikedMemlysContainer'
import ProfileContainer from './containers/ProfileContainer'
import GoogleMapContainer from './containers/GoogleMapContainer';


var routes = (
    <Router history={hashHistory}>
      <Route path='/' component={HomeContainer}>
        <IndexRoute component={GoogleMapContainer}/>
        <Route path='/user/profile' component = {ProfileContainer}>
          <Route path='/user/profile/mymemlys' component = {MyMemlysContainer} />
          <Route path='/user/profile/likedmemlys' component = {LikedMemlysContainer} />
        </Route>
      </Route>
    </Router>
  )

export default routes

