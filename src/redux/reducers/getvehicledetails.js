// import Fuse from Fuse.js


const initialState = {
    vehicledetails:[],
};
 

export default function (state = initialState, action ){

switch (action.type) {
  case 'VEHICLEDETAILS':
    // console.log("redux reducerrvvv",action.payload)
    return {...state, vehicledetails: action.payload};

  default:
    return state;
}
}

 