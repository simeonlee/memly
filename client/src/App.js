import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import { createStore } from 'redux'
import userReducer from './redux/userActionsReducer'

console.log(userReducer)

const store = createStore(userReducer);
console.log(store.getState())

console.log(store.dispatch({type:'USER_AUTH', userID:'234'}));

render(
  routes, document.getElementById('app')
);