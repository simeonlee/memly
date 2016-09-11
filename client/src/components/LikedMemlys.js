import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'


const LikedMemlys = (props) => {
  const divStyle = {
    backgroundImage: 'url(' +props.item.url+ ')',
    backgroundSize: 'cover',
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
  }
  return(
    <div className = "oneMemly" style={divStyle}>
    <div className="oneMemlyWrapper">
    </div>
    </div>
    )
}

export default LikedMemlys