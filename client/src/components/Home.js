import React from 'react'
import MapContainer from '../containers/MapContainer'

const Home = (props) => {
  return(
    <div id ="Home">
      <h1> Memly </h1>
      <MapContainer />
    </div>
    )
}

export default Home

//props.children will render any sub routes specified by react-router!