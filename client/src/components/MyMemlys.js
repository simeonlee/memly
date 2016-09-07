import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'


const MyMemlys = (props) => {
  return(
    <div>
    <div className = "oneMemly">
    <img className = 'memlyPhoto' src= {props.item.url}/>
    <div className = "memlyInfo">
    <span>taken from: {props.item.location}</span>
    </div>
    </div>
    </div>
    )
}

export default MyMemlys