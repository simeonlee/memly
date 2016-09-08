import React, { PropTypes, Component } from 'react'
import shallowCompare from 'react-addons-shallow-compare'
import controllable from 'react-controllables' //need to look into use for this... allows you to control prop types somehow...
import GoogleMap from 'google-map-react'
import {K_SIZE} from '../../styles/memlyStyles'
import mapStyle from '../../styles/mapStyle'
import GoogleMapPresentational from '../components/GoogleMapPresentational'
import update from 'react-addons-update'

// const style = {
//   width: '100%',
//   height: '500px'
// }

class GoogleMapContainer extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any,
    memlies: PropTypes.array
  };

  static defaultProps = {
    zoom: 15
  };

  constructor(props) {
    super(props);
    this.state = {
      //use geolocation and settimeout to update location of center position of Map
      center: [37.7836966, -122.4089664], 
      //memlies will be grabbed from db based on user location. (HTTP request in componentWillMount method)
      memlies: [{
        position: {
          lat: 0,
          lng: 0,
        },
        key: 'currentPosition',
        defaultAnimation: 2,
        showInfo: false,
        photo: null
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

    this.geolocate();
  }
  
  // If user is in the same location, this lifecycle method will 'shallow equality check'
  // the center state.
  // If User is still in same place, the method will return false and prevent unnecessary re-render
  shouldComponentUpdate(nextProps, nextState) {
    console.log("should component update", this.state.center[0] != nextState.center[0] || this.state.center[1] != nextState.center[1]);
    return this.state.center[0] != nextState.center[0] || this.state.center[1] != nextState.center[1]
  }

  geolocate(){
    if (navigator.geolocation) {
      // Assign interval to "window.geolocator" so we can clear the interval later if needed
      window.geolocator = window.setInterval(() => {
        navigator.geolocation.getCurrentPosition((position) => {

          // Log coordinates for development
          console.log(position.coords.latitude, position.coords.longitude);

          // To read about "update", see below link:
          // https://facebook.github.io/react/docs/update.html
          let { center } = this.state;
          center = update(center, {$set: [position.coords.latitude, position.coords.longitude] } );

          // Below is equivalent to "this.setState({center: center})"
          this.setState({ center });

        }, function() {
          // Error handler for "navigator.geolocation.getCurrentPosition()"
          alert('Geolocation failed');
        });
      }, 1000);
    } else {
      alert('Your browser doesn\'t support geolocation');
    }
  }

  //constantly update current user location with geolocate method
  // componentDidMount() {
  //   this.geolocate();
  // }
  //Not yet working correctly. Need to clear interval when component unmounts

  componentWillUnmount() {
    window.clearInterval(window.geolocator);
  }

  render() {
    return (
      <div >
       <GoogleMapPresentational
        onChildMouseEnter={(e)=>{console.log(e)}} // event argument will return index of child 
        onClick={(e)=>{console.log(e)}} // event will show lat long on map
        options={{styles: mapStyle}}
        bootstrapURLKeys={{key: 'AIzaSyA0VOMMs7FVCwz_klHsvs_KFt-CV-YbVNc'}}
        center={this.state.center}
        zoom={this.props.zoom}
        // instead of css hover (which sometimes is bad for map markers) (bad means inability to hover on markers placed under other markers)
        // you can use internal GoogleMap component hover algorithm
        // hover algorithm explained at x_distance_hover example
        hoverDistance={K_SIZE}
        memlies={this.state.memlies}
      />
    </div>
    );
  }
}

export default GoogleMapContainer