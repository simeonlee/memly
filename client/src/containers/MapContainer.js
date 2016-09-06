import React, { PropTypes } from 'react'
import SimpleMap from '../components/Map'
import update from 'react-addons-update' //this will allow us to change/mutate state without mutating the original state. (won't be necessary once we use Redux)

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
        defaultAnimation: 2
      },
      {
        position: {
          lat: 37.7836966,
          lng: -122.4089664
        },
        key: 'Hack Reactor',
        defaultAnimation: 2
      }]
    }
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
    }.bind(this))}, 3000)
  }

  //constantly update current user location with geolocate method
  componentDidMount() {
    this.geolocate();

    setTimeout(() => {
      let { markers } = this.state; 
      markers = update(markers, {
        $push: [
          {
            position: {
              lat: 25.99,
              lng: 122.9
            },
            defaultAnimation: 2,
            key: Date.now()
          }
        ]
      })
      this.setState({ markers })
    }, 2000);
  }
  //Not yet working correctly. Need to clear interval when component unmounts
  componentWillUnmount() {
    //console.log(geolocator);
    window.clearInterval(geolocator);
  }

  handleMapClick(e) {
    //not exactly sure how e.latLng works... its magic. Documentation unhelpful 
    //console.log(e.latLng)
    let { markers } = this.state;
    markers = update(markers, {
      $push: [
        {
          position: e.latLng,
          defaultAnimation: 2,
          key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
        },
      ],
    });
    this.setState({ markers });
  }

  handleMarkerRightClick(index, e) {
    let { markers } = this.state;
    markers = update(markers, {
      $splice: [
        [index, 1]
      ]
    });
    this.setState({ markers });
  }

  render() {
    //console.log(this.state.markers[0].position)
    return(
      <div style={style}>
        <SimpleMap 
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