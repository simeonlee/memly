import React from 'react'
import { memlyStyle, memlyStyleHover } from '../../styles/memlyStyles'

// Represent user location
export const UserLocation = (props) => {
  return(
    <div>
      <img src='../../styles/rsz_greendot.png'/>
    </div>
  )
}

// Represent other memlys
export const GoogleMapMemly = (props) => {
  const style = props.$hover ? memlyStyleHover : memlyStyle;

  return(
    <div style={style} className="map-memly-marker">
      {props.text}
      <img
        height={'60px'}
        width={'85px'}
        src={props.photo}
        className="map-memly-media"
      />
    </div>
  )
}