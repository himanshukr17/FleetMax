// import Fuse from Fuse.js


const initialState = {
    driverdetails:[],
};
 

export default function (state = initialState, action ){

switch (action.type) {
  case 'DRIVERDETAILS':
    // console.log("redux reducer",action.payload)
    return {...state, driverdetails: action.payload};

  default:
    return state;
}
}

 