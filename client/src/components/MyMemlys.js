import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'


const MyMemlys = (props) => {
    const divStyle = {
      backgroundImage: 'url(' +props.item.url+ ')',
      backgroundPosition:'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }
  return(
    <div className = "oneMemly" style={divStyle}>
        <div className="oneMemlyWrapper">
        </div>
    </div>
    )
}

export default MyMemlys