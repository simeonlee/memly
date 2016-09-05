import React from 'react'
import {GoogleMapLoader, GoogleMap, Marker, InfoWindow} from "react-google-maps";
import style from '../../styles/mapStyle'

const SimpleMap = (props) => (
  <section style={{ height: `100%` }}>
    <GoogleMapLoader
      containerElement={
        <div
          {...props.containerElementProps}
          style={{
            height: `100%`,
          }}
        />
      }
      googleMapElement={
        <GoogleMap
          containerProps={{style: {height: `100%`}}}
          query={{ libraries: "geometry,drawing,places,visualization" }}
          ref={(map) => console.log(map)}
          defaultZoom={17}
          // defaultCenter={props.defaultCenter}
          center={props.markers[0].position}
          onClick={props.onMapClick}
          defaultOptions={{
            styles: style,
          }}
        >
          {props.markers.map((marker, index) => {
               const ref = `marker_${index}`;
               if(marker.key === 'currentPosition'){
                  return(
                    <Marker 
                     key={index}
                     // ref={ref}
                     position={marker.position}
                     onClick={() => props.onMarkerClick(marker)}
                     onRightclick={() => props.onMarkerRightClick(index)}
                     icon={"../../styles/rsz_greendot.png"}
                     />
                    )
                 } else {
                  return ( <Marker 
                   key={index}
                   // ref={ref}
                   position={marker.position}
                   onClick={() => props.onMarkerClick(marker)}
                   onRightclick={() => props.onMarkerRightClick(index)}
                   icon={"../../styles/dot.gif"}
                   onMouseOver={()=>{console.log('hovering')}}
                   >
                   
                   {/* 
                     Show info window only if the 'showInfo' key of the marker is true. 
                     That is, when the Marker pin has been clicked and 'handleMarkerClick' has been
                     Successfully fired.
                   */}
                   {marker.showInfo ? props.renderInfoWindow(ref, marker) : null}
                   
                 </Marker>
                 );}
               })}
        </GoogleMap>
      }
    />
  </section>
);

export default SimpleMap

//props.children will render any sub routes specified by react-router!