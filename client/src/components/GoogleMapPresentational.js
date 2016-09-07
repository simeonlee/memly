import React, { PropTypes, Component } from 'react'
import GoogleMap from 'google-map-react'
import GoogleMapMemlyContainer from '../containers/GoogleMapMemlyContainer';
// import shallowCompare from 'react-addons-shallow-compare'
// import controllable from 'react-controllables'


const style={
  width: '100%',
  height: '500px'
}


const GoogleMapPresentational = (props) => {
  const memlies = props.memlies.map((memly, index) => {
    const { showInfo, defaultAnimation, photo } = memly;
    return (
      <GoogleMapMemlyContainer photo={photo} defaultAnimation={defaultAnimation} showInfo={showInfo} {...memly.position} text={index.toString()} key={index}/>
      )
  })
  return(
      <div style={style}>
       <GoogleMap
        {...props}
        //Using the es6 ...props syntax above, the following props will be passed from the GoogleMapPresentational component into the GoogleMap component
            // onChildMouseEnter={(e)=>{console.log(e)}} // event argument will return index of child 
            // onClick={(e)=>{console.log(e)}} // event will show lat long on map
            // options={{styles: mapStyle}}
            // bootstrapURLKeys={{key: 'AIzaSyA0VOMMs7FVCwz_klHsvs_KFt-CV-YbVNc'}}
            // center={props.center}
            // zoom={props.zoom}
            // // instead of css hover (which sometimes is bad for map markers) (bad means inability to hover on markers placed under other markers)
            // // you can use internal GoogleMap component hover algorithm
            // // hover algorithm explained at x_distance_hover example
            // hoverDistance={K_SIZE}
        >
        {memlies}
        <GoogleMapMemlyContainer currentLocation={true} lat={props.center[0]} lng={props.center[1]} text={'M'} />
      </GoogleMap>
    </div>
    );
}

export default GoogleMapPresentational