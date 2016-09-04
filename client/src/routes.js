//This file will contain the route setup to be exported to be used by App.js
import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import HomeContainer from './containers/HomeContainer'
import MyMemlysContainer from './containers/MyMemlysContainer'
import LikedMemlysContainer from './containers/LikedMemlysContainer'
import ProfileContainer from './containers/ProfileContainer'

import TestContainer from './containers/TestContainer'

var routes = (
    <Router history={hashHistory}>
      <Route path='/' component={HomeContainer}>
        <Route path='/user/profile' component = {ProfileContainer}>
          <Route path='/user/profile/mymemlys' component = {MyMemlysContainer} />
          <Route path='/user/profile/likedmemlys' component = {LikedMemlysContainer} />
        </Route>
        <Route path='test' component={TestContainer}/>
      </Route>
    </Router>
  )

export default routes

