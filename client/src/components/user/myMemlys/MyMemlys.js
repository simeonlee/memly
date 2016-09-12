import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'


const MyMemlys = (props) => {
  //inline CSS style. fills the entire oneMemly div with photo
    const divStyle = {
      backgroundImage: 'url(' +props.item.url+ ')',
      backgroundPosition:'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }
  return(
    <div className = "oneMemly" style={divStyle}>
        <div className="oneMemlyWrapper">
        <span className = "memlyInfo">This is a Test</span>
        </div>
    </div>
    )
}

export default MyMemlys