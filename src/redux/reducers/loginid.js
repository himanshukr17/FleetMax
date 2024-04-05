// import Fuse from Fuse.js


const initialState = {
    logindata:[],
};
 

export default function (state = initialState, action ){

switch (action.type) {
  case 'LOGINDATA':
    console.log("redux reducerloginnnnnnn",action.payload)
    return {...state, logindata: action.payload};

  default:
    return state;
}
}

 