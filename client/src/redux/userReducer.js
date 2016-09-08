//reducer functions to modify state tree

// ------ ACTIONS FOR USER REDUCER --------- //
function userAuth (userID) {
  return {
    type: 'USER_AUTH',
    userID
  }
}

function userUnauth () {
  return {
    type: 'USER_UNAUTH'
  }
}

function fetchUserSuccess (user) {
  return {
    type: 'FETCHING_USER_SUCCESS',
    user
  }
}

function updateUserLocation (userLocation) {
  return {
    type: 'UPDATE_USER_LOCATION',
    userLocation
  }
}

// ----- SET USER REDUCER INITIAL STATE ------ //
const userInitialState = {
  userID: '',
  info: { name: '' },
  isFetching: false,
  isLoggedIn: false,
  error: '',
  userLocation: {
    lat: '',
    lng: '',
  }
}

// ------------ USER REDUCER -----------------//
export default function userReducer (state = userInitialState, action) {
  switch(action.type){
   
   case 'USER_AUTH' :  
    return {
      ...state, 
      isLoggedIn: true, 
      userID: action.userID,
    }

    case 'USER_UNAUTH' : 
      return {
        ...state,
        isLoggedIn: false,
        userID: '',
      }

    case 'FETCHING_USER_INFO' : {
      return {
        ...state,
        isFetching: true,
      }
    }

    case 'FETCHING_USER_INFO_ERROR' : {
      return {
        ...state,
        isFetching: false, 
        error: action.error 
      }
    }

    case 'FETCHING_USER_SUCCESS' : {
      if (action.user === null) {
        return {
          ...state,
          isFetching: false, 
          error: '',
        }
      } else {
        if(action.userID = state.userID){
          return {
            ...state, 
            isFetching: false, 
            info: action.user
          }
        }
      }
    }

    case 'UPDATE_USER_LOCATION' : {
      // action should have userLocation property in the form of {lat: '', lng: ''}
      return {
        ...state,
        userLocation: action.UserLocation
      }
    }

    default : 
      return state

   }
  }



