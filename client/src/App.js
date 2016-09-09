import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
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
  // Provider will make the Redux-Store (state tree) accessible to ALL components. 
  //(React specific helper module for simplifying redux!)
  <Provider store={store}>
    {routes}
  </Provider>
  , document.getElementById('app')
);