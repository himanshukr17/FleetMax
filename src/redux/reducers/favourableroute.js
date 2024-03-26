// import Fuse from Fuse.js


const initialState = {
    favouriteroute:[],
};
 

export default function (state = initialState, action ){

switch (action.type) {
  case 'FAVOURITE':
    console.log("redux reducerrfavvvvvvvvv",action.payload)
    return {...state, favouriteroute: action.payload};

  default:
    return state;
}
}

 