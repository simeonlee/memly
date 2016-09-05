import React, { PropTypes } from 'react'
import SimpleMap from '../components/Map'
import update from 'react-addons-update' //this will allow us to change/mutate state without mutating the original state. (won't be necessary once we use Redux)
import { InfoWindow } from 'react-google-maps'
//in order for the map container to render and show on the screen, we MUST give it a height/width relative to parent container
const style = { 
    height: `500px`,
    width: `100%`
  }

class MapContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      defaultCenter: {
        lat: 37.745005,
        lng: -122.430505
      },
      
      markers: [{
        position: {
          lat: 0,
          lng: 0,
        },
        key: 'currentPosition',
        defaultAnimation: 2,
        showInfo: false
      },
      {
        position: {
          lat: 37.7836966,
          lng: -122.4089664
        },
        key: 'Hack Reactor',
        defaultAnimation: 2,
        showInfo: false,
        photo: "../../styles/hackreactor.jpg"
      },
      {
        position: {
          lat: 51.507351,
          lng: -0.125758
        },
        username: "Michael Wong",
        userAvatar: "../../styles/userAvatar.jpg",
        key: 'timestamp1',
        defaultAnimation: 2,
        showInfo: false,
        photo: "../../styles/shutterstock_276995975.jpg"
      },
      {
        position: {
          lat: 51.507351,
          lng: -0.12958
        },
        key: 'timestamp2',
        defaultAnimation: 2,
        showInfo: false,
        photo: "../../styles/M9071-PARENT-2.jpg"
      },
      {
        position: {
          lat: 51.509351,
          lng: -0.12958
        },
        key: 'timestamp3',
        defaultAnimation: 2,
        showInfo: false,
        photo: "../../styles/15759420184_f34af1b4a8.jpg"
      },
      {
        position: {
          lat: 51.506351,
          lng: -0.12958
        },
        key: 'timestamp4',
        defaultAnimation: 2,
        showInfo: false,
        photo: "../../styles/londonstreet.jpeg"
      }]
    }
    this.renderInfoWindow = this.renderInfoWindow.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
  
  //initially set the current location state of application before render
  //ideally the user's map will show user location upon running application 
    navigator.geolocation.getCurrentPosition(function(position) {
          let { markers } = this.state; 
          markers = update(markers, {0: {position:{$set: {lat:position.coords.latitude, lng:position.coords.longitude}}}});
          this.setState({ markers }) // equivalent of this.setState({markers: markers})
        }.bind(this));
  }
  
  //set interval function to live track user location
  geolocate(){
    window.geolocator = window.setInterval(() => { navigator.geolocation.getCurrentPosition(function(position) {
      //console.log(position.coords.latitude, position.coords.longitude);
      let { markers } = this.state; 
      markers = update(markers, {0: {position:{$set: {lat:position.coords.latitude, lng:position.coords.longitude}}}});
      this.setState({ markers }) // equivalent of this.setState({markers: markers})
    }.bind(this))}, 100000)
  }

  //constantly update current user location with geolocate method
  componentDidMount() {
    this.geolocate();
  }
  //Not yet working correctly. Need to clear interval when component unmounts
  componentWillUnmount() {

    window.clearInterval(geolocator);
  }

  handleMapClick(e) {
    //not exactly sure how e.latLng works... its magic. Documentation unhelpful 

    let { markers } = this.state;
    markers = update(markers, {
      $push: [
        {
          position: e.latLng,
          defaultAnimation: 2,
          key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
          showInfo: false
        },
      ],
    });
    this.setState({ markers });
  }

  handleMarkerRightClick(index, e) {
    console.log('handleMarkerRightClick')
    let { markers } = this.state;
    markers = update(markers, {
      $splice: [
        [index, 1]
      ]
    });
    this.setState({ markers });
  }

  handleMarkerClick(marker) {
      console.log('handleMarkerClick', marker)
      marker.showInfo = true;
      this.setState(this.state);
    }
  
  handleMarkerClose(marker) {
    marker.showInfo = false;
    this.setState(this.state);
  }
  // pass this down to pesentational component to allow each marker to have InfoWindows
  renderInfoWindow(ref, marker) {
    return (
      //You can nest components inside of InfoWindow!
      <InfoWindow 
        key={`${ref}_info_window`}
        onCloseclick={this.handleMarkerClose.bind(this, marker)} >
        <div className='.gm-style-iw'>
          <div style={{fontSize: "12px"}}>
            <p>{marker.username || null}</p>
            {marker.userAvatar ? (<img height={"82px"} width={"82px"} src={marker.userAvatar}/>) : null}
          </div>
          <img height={"200px"} width={"300px"} src={marker.photo}/> 
        </div>  
      </InfoWindow>
    ); 
  }

  render() {
<<<<<<< ef9d182e47a5e579eceab12be5e3ff605a0dde23
    //console.log(this.state.markers[0].position)
=======
>>>>>>> styling updates for infoWindow
    return(
      <div style={style}>
        <SimpleMap
          onMarkerClick={this.handleMarkerClick.bind(this)}
          // onMarkerCLose={this.handleMarkerClick.bind(this)}
          renderInfoWindow={this.renderInfoWindow.bind(this)} 
          defaultCenter={this.state.defaultCenter}
          markers={this.state.markers}
          onMapClick={this.handleMapClick}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      </div>
      )
  }

}

export default MapContainer