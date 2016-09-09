// ------ ACTIONS FOR MEMLYS REDUCER --------- //

export function updateMemlys (memlys) {
  return {
    type: 'UPDATE_MEMLYS',
    memlys,
  }
}

export function addMemly (memly) {
  return {
    type: 'ADD_MEMLY',
    memly,
  }
}

export function addToMemlyIdStorage (memlyId) {
  return {
    type: 'ADD_TO_MEMLY_ID_STORAGE',
    memlyId,
  }
}


// ---- INITIAL STATE FOR MEMLYS REDUCER ----- //

const memlysInitialState = {
  memlys: [
        {
          location: {
            lat: 37.7836966,
            lng: -122.4089664
          },
          key: 'Hack Reactor',
          defaultAnimation: 2,
          showInfo: false,
          media: {
            url: "../../styles/hackreactor.jpg"
          }
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
          media: {
            url: "../../styles/shutterstock_276995975.jpg"
          }
        },
        {
          location: {
            lat: 51.507351,
            lng: -0.12958
          },
          key: 'timestamp2',
          defaultAnimation: 2,
          showInfo: false,
          media: {
            url: "../../styles/M9071-PARENT-2.jpg"
          }
        },
        {
          location: {
            lat: 51.509351,
            lng: -0.12958
          },
          key: 'timestamp3',
          defaultAnimation: 2,
          showInfo: false,
          media: {
            url: "../../styles/15759420184_f34af1b4a8.jpg"
          }
        },
        {
          location: {
            lat: 51.506351,
            lng: -0.12958
          },
          key: 'timestamp4',
          defaultAnimation: 2,
          showInfo: false,
          media: {
            url: "../../styles/londonstreet.jpeg"
          }
        }
      ],

      memlyIdStorage: {
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
      }
  }

  //ideal memlys structure...

    // { memlyID: {memly info},
    //   memly2ID: {memly info} }... and so on
    // this way we could use Object.assign({}, oldLocationMemlys, newLocationMemlys)
    // to overwrite duplicates. we could use this to keep storage in check as well

// ------------------ MEMLY REDUCER ----------------------- //



export default function memlysReducer(state = memlysInitialState, action) {
  switch(action.type) {
    
    case 'ADD_MEMLY' : {
      return {
        ...state,
        memlyIdStorage : {
          ...state.memlyIdStorage,
          [action.memly['_id']]: true,
        },
        memlys: [action.memly, ...state.memlys,]
      }
  }

  // case 'ADD_MEMLY' : {
  //   return {
  //     ...state,
  //     memlys: [action.memly, ...state.memlys],
  //   }
  // }

    default : return state
  }
}