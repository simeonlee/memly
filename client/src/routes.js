//File contains the route setup to be exported to be used by App.js
import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import HomeContainer from './containers/HomeContainer'
import MyMemlysContainer from './containers/MyMemlysContainer'
import LikedMemlysContainer from './containers/LikedMemlysContainer'
import ProfileContainer from './containers/ProfileContainer'
import MapContainer from './containers/MapContainer'


var routes = (
    <Router history={hashHistory}>
      <Route path='/' component={HomeContainer}>
        <IndexRoute component={MapContainer}/>
        <Route path='user/profile' component = {ProfileContainer}>
          <IndexRoute component = {MyMemlysContainer} />
          <Route path='/likedmemlys' component = {LikedMemlysContainer} />
        </Route>
      </Route>
    </Router>
  )

export default routes

