import axios from "axios";
import api from '../../Utils/api'

export const Statusupdate = (data) => async (dispatch, getState) => {
      console.log("api------------->", `${api.protocol}${api.url}${api.statusupdate}`);

     
      return new Promise((resolve, reject) => {
      //   console.log("redux data----------->",
      //   {

      //       "User_Order_Mapping": [
        
      //           {
        
      //               "USER_ID": data.USER_ID,
        
      //               "ORDER_NO": data.ORDER_NO,
        
      //               "STATUS": data.STATUS
        
      //           },


        
      //       ]
        
      //   }
      //   , {
      //         headers: { 
      //             'Content-Type': 'text/plain', 
      //             'Authorization': 'Basic c2ItNzA5ZDc4MWEtMGMwYy00Njc5LTllNjEtMGYxYTg4ZWJiOTRiIWIxMjIwfGl0LXJ0LW5lYy1kZXYtMi1rNWl6emU3OCFiMTQ4OmQwMmFkNGQ4LTJjZTgtNDdlZC05YmNjLTRlYWZjNWVlMzRiMSRsV0lSV09BbmVlRjRqZkhPNnNyZUdOX1ZoaGEyQ1g2alZXS1hqLTA1ay0wPQ=='
      //           },
      //   })
            axios.post(`${api.protocol}${api.url}${api.statusupdate}`,
            
            {

                  "User_Order_Mapping": [
              
                      {
              
                          "USER_ID": data.USER_ID,
              
                          "ORDER_NO": data.ORDER_NO,
              
                          "STATUS": data.STATUS
              
                      },
      
      
              
                  ]
              
              }
                  , {
                        headers: { 
                            'Content-Type': 'text/plain', 
                            'Authorization': 'Basic c2ItNzA5ZDc4MWEtMGMwYy00Njc5LTllNjEtMGYxYTg4ZWJiOTRiIWIxMjIwfGl0LXJ0LW5lYy1kZXYtMi1rNWl6emU3OCFiMTQ4OmQwMmFkNGQ4LTJjZTgtNDdlZC05YmNjLTRlYWZjNWVlMzRiMSRsV0lSV09BbmVlRjRqZkhPNnNyZUdOX1ZoaGEyQ1g2alZXS1hqLTA1ay0wPQ=='
                          },
                  }
            ).then((response) => {

                  // dispatch({ type: "SET_MODAL", payload: { show: false } })
                  // console.log(response.data);
                  if (response.status == 200) {
                        resolve("success")
                  }

            }).catch(err => {
                  console.log(err);
                  reject(err)
            })
      })
};