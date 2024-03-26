// import Fuse from Fuse.js


const initialState = {
    bookingdetails:[],
};
 

export default function (state = initialState, action ){

switch (action.type) {
  case 'BOOKINGDETAILS':
    // console.log("redux reducerr",action.payload)
    return {...state, bookingdetails: action.payload};

  default:
    return state;
}
}

 