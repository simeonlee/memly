import React from 'react'

export const GoogleMapMemly = (props) => {
  return(
    <div>
      {props.text}
      <img height={'60px'} width={'85px'} src={props.photo}/>
    </div>
    )
}

export const UserLocation = (props) => {
  return(
    <div>
      <img src='../../styles/rsz_greendot.png'/>
    </div>
    )
}

