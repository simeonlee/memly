import React from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
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
          defaultZoom={13}
          defaultCenter={props.defaultCenter}
          center={props.markers[0].position}
          onClick={props.onMapClick}
          defaultOptions={{
            styles: style,
          }}
        >
          {props.markers.map((marker, index) => (
            <Marker 
              {...marker}
              onRightclick={() => props.onMarkerRightClick(index)}
              icon={"../../styles/dot.gif"}
              zoom={1}
            />
          ))}
        </GoogleMap>
      }
    />
  </section>
);

export default SimpleMap

//props.children will render any sub routes specified by react-router!