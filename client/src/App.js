import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import { createStore, combineReducers } from 'redux'
import userReducer from './redux/userReducer'
import memlysReducer from './redux/memlysReducer'

//combine reducers
const reducers = combineReducers({
  userReducer,
  memlysReducer
})
//create a store that houses state-tree of app. Can only be modified by dispatching actions on the reducers 
//provided in createStore. (see.... ./redux/userReducers for example of Actions)
const store = createStore(reducers);
console.log(store.getState());


render(
  routes, document.getElementById('app')
);