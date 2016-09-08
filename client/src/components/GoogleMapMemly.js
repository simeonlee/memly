import React from 'react'
import { memlyStyle, memlyStyleHover } from '../../styles/memlyStyles'

// Represent user location
export const UserLocation = (props) => {
  return(
    <div>
      <img className="map-user-marker" src='../../images/user/user-star@2x.png'/>
    </div>
  )
}

// Represent other memlys
export const GoogleMapMemly = (props) => {
  const style = props.$hover ? memlyStyleHover : memlyStyle;

  return (
    <div style={style}>
      {props.text}
      <img
        height={'60px'}
        width={'85px'}
        src={props.media.url}
        className="map-memly-media"
      />
    </div>
  )
}