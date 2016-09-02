//This file will contain the route setup to be exported to be used by App.js
import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import HomeContainer from './containers/HomeContainer'
import TestContainer from './containers/TestContainer'

var routes = (
    <Router history={hashHistory}>
      <Route path='/' component={HomeContainer}>
        <Route path='test' component={TestContainer}/>
      </Route>
    </Router>
  )

export default routes

