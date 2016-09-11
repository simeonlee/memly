import React from 'react'
import { memlyStyle, memlyStyleHover } from '../../styles/memlyStyles'

// Represent user location
export const UserLocation = (props) => {
  return(
    <div>
      <div className="pin bounce" />
      <div className="pulse" />
    </div>
  )
}

// Old user marker star:
// <img className="user-marker" src='../../images/user/user-star@2x.png'/>

// Represent other memlys
export const GoogleMapMemly = (props) => {
  const style = props.$hover ? memlyStyleHover : memlyStyle;
  const showImg = props.$hover ? (
     <div className="memly-infowindow" /* Infowindow floats above marker */>
      <img className="memly-media" src={props.media.url} />
     </div>
     ) : (<div display={'none'}></div>)
  
  return (
    <div>
        {showImg}
      <div className="memly-marker" style={style} />
    </div>
  )
}

// Old stuffs:
// height={'60px'}
// width={'85px'}
// {props.text}