import React, { PropTypes, Component } from 'react'
import shallowCompare from 'react-addons-shallow-compare'
import controllable from 'react-controllables' //need to look into use for this... allows you to control prop types somehow...
import GoogleMap from 'google-map-react'
import {K_SIZE} from '../../../../styles/memlyStyles'
import mapStyle from '../../../../styles/mapStyle'
import GoogleMapPresentational from './presentation'
import update from 'react-addons-update'
import axios from 'axios'
import { connect } from 'react-redux'
import * as memlysActions from '../../../redux/memlysReducer'
import * as mapActions from '../../../redux/mapReducer'

class GoogleMapContainer extends Component {
  static propTypes = {
    // center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any,
    memlys: PropTypes.array,
    memlyIdStorage: PropTypes.object,
    currentUserLocation: PropTypes.object,
  };

  static defaultProps = {
    zoom: 15
  };

  constructor(props) {
    super(props);
    // this.state = {
      //use geolocation and settimeout to update location of currentUserLocation position of Map
      // currentUserLocation: {
      //   lat: 37.7836966,
      //   lng: -122.4089664
      // },
      //memlys will be grabbed from db based on user location. (HTTP request in componentWillMount method)
    //   memlys: [
    //     {
    //       location: {
    //         lat: 37.7836966,
    //         lng: -122.4089664
    //       },
    //       key: 'Hack Reactor',
    //       defaultAnimation: 2,
    //       showInfo: false,
    //       media: {
    //         url: "../../styles/hackreactor.jpg"
    //       }
    //     },
    //     {
    //       location: {
    //         lat: 51.507351,
    //         lng: -0.125758
    //       },
    //       username: "Michael Wong",
    //       userAvatar: "../../styles/userAvatar.jpg",
    //       key: 'timestamp1',
    //       defaultAnimation: 2,
    //       showInfo: false,
    //       media: {
    //         url: "../../styles/shutterstock_276995975.jpg"
    //       }
    //     },
    //     {
    //       location: {
    //         lat: 51.507351,
    //         lng: -0.12958
    //       },
    //       key: 'timestamp2',
    //       defaultAnimation: 2,
    //       showInfo: false,
    //       media: {
    //         url: "../../styles/M9071-PARENT-2.jpg"
    //       }
    //     },
    //     {
    //       location: {
    //         lat: 51.509351,
    //         lng: -0.12958
    //       },
    //       key: 'timestamp3',
    //       defaultAnimation: 2,
    //       showInfo: false,
    //       media: {
    //         url: "../../styles/15759420184_f34af1b4a8.jpg"
    //       }
    //     },
    //     {
    //       location: {
    //         lat: 51.506351,
    //         lng: -0.12958
    //       },
    //       key: 'timestamp4',
    //       defaultAnimation: 2,
    //       showInfo: false,
    //       media: {
    //         url: "../../styles/londonstreet.jpeg"
    //       }
    //     }
    //   ],
    //   // Keep ids of already accepted memlys in below storage to avoid duplicate entries
    //   memlyIdStorage: {}
    // }

    this.geolocate();
    this.updateMemlys();
  }
  
  // If user is in the same location, this lifecycle method will 'shallow equality check'
  // the currentUserLocation state.
  // If User is still in same place, the method will return false and prevent unnecessary re-render
  
  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log("should component update", this.state.currentUserLocation.lat != nextState.currentUserLocation.lat || this.state.currentUserLocation.lng != nextState.currentUserLocation.lng);
  //   // return this.state.currentUserLocation.lat != nextState.currentUserLocation.lat || this.state.currentUserLocation.lng != nextState.currentUserLocation.lng;
  // }

  geolocate(){
    if (navigator.geolocation) {
      // Assign interval to "window.geolocator" so we can clear the interval later if needed
      window.geolocator = window.setInterval(() => {
        navigator.geolocation.getCurrentPosition((position) => {

          // Log coordinates for development
          console.log(position.coords.latitude, position.coords.longitude);

          // // To read about "update", see below link:
          // // https://facebook.github.io/react/docs/update.html
          // let { currentUserLocation } = this.state;
          // currentUserLocation = update(currentUserLocation, {
          //   lat: { $set: position.coords.latitude },
          //   lng: { $set: position.coords.longitude }
          // });

          // // Below is equivalent to "this.setState({currentUserLocation: currentUserLocation})"
          // this.setState({ currentUserLocation });
          this.props.dispatch(mapActions.updateUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }))

        }, function() {
          // Error handler for "navigator.geolocation.getCurrentPosition()"
          // Clear further geolocation's upon failure so we don't get repeat errors
          if (window.geolocator) {
            window.clearInterval(window.geolocator);
          };
          console.error('Geolocation failed');
        });
      }, 1000);
    } else {
      console.error('Your browser doesn\'t support geolocation');
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

  updateMemlys() {
    window.setInterval(() => {
      console.log('Polling for nearby markers...');
      axios.get('/api/nearby', {
          params: {
            lat: this.props.currentUserLocation.lat,
            lng: this.props.currentUserLocation.lng
          }
        })
        .then((response) => {
          // 'response.data' is an array of memlys to be displayed
          console.log(response.data, 'data from updateMemly\'s function');

          // let { memlys, memlyIdStorage } = this.state;

          // If our memlys storage does not yet contain the new memly,
          // add the new memly to our storage
          response.data.forEach((memly) => {
            if (!this.props.memlyIdStorage[memly._id]) {
              console.log('!memlyIdStorage')
              // memlyIdStorage[memly._id] = true;
              this.props.dispatch(memlysActions.addMemly(memly));
              // memlys.push(memly);
            }
          });

          // this.setState({ memlys, memlyIdStorage });
          // console.log(this.state.memlys);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 5000);

  }

  render() {
    return (
      <div >
       <GoogleMapPresentational
        onChildMouseEnter={(e)=>{console.log(e)}} // event argument will return index of child 
        onClick={(e)=>{console.log(e)}} // event will show lat long on map
        options={{styles: mapStyle}}
        bootstrapURLKeys={{key: 'AIzaSyA0VOMMs7FVCwz_klHsvs_KFt-CV-YbVNc'}}
        currentUserLocation={this.props.currentUserLocation}
        zoom={this.props.zoom}
        // instead of css hover (which sometimes is bad for map markers) (bad means inability to hover on markers placed under other markers)
        // you can use internal GoogleMap component hover algorithm
        // hover algorithm explained at x_distance_hover example
        hoverDistance={K_SIZE}
        memlys={this.props.memlys}
      />
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUserLocation: state.mapReducer.currentUserLocation,
    memlys: state.memlysReducer.memlys,
    memlyIdStorage: state.memlysReducer.memlyIdStorage,
  }
}

export default connect(mapStateToProps)(GoogleMapContainer)