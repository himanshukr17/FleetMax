// import Fuse from Fuse.js


const initialState = {
    bookingstatus:[],
};
 

export default function (state = initialState, action ){

switch (action.type) {
  case 'BOOKINGSTATUS':
    // console.log("redux reducerr",action.payload)
    return {...state, bookingstatus: action.payload};

  default:
    return state;
}
}

 