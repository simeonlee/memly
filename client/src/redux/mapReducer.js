const mapInitialState = {
  currentUserLocation : {
    lat: 37.7836966,
    lng: -122.4089664,
  }
}

export function updateUserLocation (currentUserLocation) {
  console.log('updating User location with action')
  return {
    type: 'UPDATE_USER_LOCATION',
    currentUserLocation,
  }
}

export default function mapReducer(state = mapInitialState, action) {
  switch(action.type) {

    case 'UPDATE_USER_LOCATION' : {
      console.log('updating userlocation in state tree')
      return {
        ...state,
        currentUserLocation: action.currentUserLocation
      }
    }
    default : return state
  }
}

