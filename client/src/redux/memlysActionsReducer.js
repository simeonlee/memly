function uploadMemlys (memlys) {
  return {
    type: 'UPLOAD_MEMLYS',
    memlys
  }
}

function addMemly (memly) {
  type: 'ADD_MEMLY',
  memly
}

const memlyInitialState = {
  memlys: [{
        location: {
          lat: 0,
          lng: 0,
        },
        key: 'currentPosition',
        defaultAnimation: 2,
        showInfo: false,
        photo: null
      },
      {
        location: {
          lat: 37.7836966,
          lng: -122.4089664
        },
        key: 'Hack Reactor',
        defaultAnimation: 2,
        showInfo: false,
        photo: "../../styles/hackreactor.jpg"
      },
      {
        location: {
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
        location: {
          lat: 51.507351,
          lng: -0.12958
        },
        key: 'timestamp2',
        defaultAnimation: 2,
        showInfo: false,
        photo: "../../styles/M9071-PARENT-2.jpg"
      },
      {
        location: {
          lat: 51.509351,
          lng: -0.12958
        },
        key: 'timestamp3',
        defaultAnimation: 2,
        showInfo: false,
        photo: "../../styles/15759420184_f34af1b4a8.jpg"
      },
      {
        location: {
          lat: 51.506351,
          lng: -0.12958
        },
        key: 'timestamp4',
        defaultAnimation: 2,
        showInfo: false,
        photo: "../../styles/londonstreet.jpeg"
      }]
}

function memlysReducer(state = memlyInitialState, action) {
  switch(action.type) {

    case 'UPLOAD_MEMLYS' {
      if(action.memlys.length > 0){
        return {
          ...state,
          memlys: action.memlys,
        }
      }
    }

    case 'ADD_MEMLY' {
      return {
        //the idea is that they can only add to the current grid they current 
        //reside in so we should be able to update the state with the photo instantly
        ...state, 
        memlys: [action.memly, ...state.memlys]
      }
    }