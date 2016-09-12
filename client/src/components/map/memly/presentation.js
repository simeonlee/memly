import React from 'react'
import Infowindow from '../infowindow/container'
import { memlyStyle, memlyStyleHover } from '../../../../styles/memlyStyles'

// Represent user location
export const UserLocation = (props) => {
  return(
    <div>
      <div className="marker pin bounce" />
      <div className="pulse" />
    </div>
  )
}

// Old user marker star:
// <img className="user-marker" src='../../images/user/user-star@2x.png'/>

// Represent other memlys
export const MapMemly = (props) => {
  // Marker hover action happening via css
  // const style = props.$hover ? memlyStyleHover : memlyStyle;
  
  return (
    <div>
      <Infowindow
        {...props}
      />
      <div className="hover">
        <div className="marker memly-marker" />
        <div className="memly-pulse" />
      </div>
    </div>
  )
}

// Old stuffs:
// height={'60px'}
// width={'85px'}
// {props.text}