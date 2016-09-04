import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'


const LikedMemlys = (props) => {
  return(
    <div className = "oneMemly">
    <img className = 'memlyPhoto' src= {props.item.url}/>
    <div className = "memlyInfo">
    <span>taken from: {props.item.location}</span>
    </div>
    </div>
    )
}

export default LikedMemlys