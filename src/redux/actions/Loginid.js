import axios from 'axios';
import api from '../../Utils/api';

export const Loginid = (userid, pas) => async (dispatch, getState) => {
  // console.log('loginiddddddd---------->', userid, pas);
  // console.log('hittttttttttttt', userid, pas);

  return new Promise((resolve, reject) => {
   
    // axios.post(`${api.protocol}${api.url}${api.Login}?UserId=${data.userid}&Password=${data.password}`,
    axios.post(`${api.protocol}${api.url}${api.Login}`,

        {
          UserId: userid,
          Password: pas,
        },
        {
          maxBodyLength: Infinity,
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Basic c2ItNzA5ZDc4MWEtMGMwYy00Njc5LTllNjEtMGYxYTg4ZWJiOTRiIWIxMjIwfGl0LXJ0LW5lYy1kZXYtMi1rNWl6emU3OCFiMTQ4OmQwMmFkNGQ4LTJjZTgtNDdlZC05YmNjLTRlYWZjNWVlMzRiMSRsV0lSV09BbmVlRjRqZkhPNnNyZUdOX1ZoaGEyQ1g2alZXS1hqLTA1ay0wPQ==',
          },
        },
      )
      .then(response => {
        // dispatch({ type: "SET_MODAL", payload: { show: false } })

      //   console.log('heloooooooo login---------->', response);
        if (response.status == 200) {
          resolve('success');
          dispatch({type: 'LOGINDATA', payload: response.data});
        } else {
          resolve(404);
          dispatch({type: 'LOGINDATA', payload: []});
        }
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};


export const logout = () => (dispatch, getState) => {

  dispatch({ type: "LOGINDATA", payload:null });
  
}