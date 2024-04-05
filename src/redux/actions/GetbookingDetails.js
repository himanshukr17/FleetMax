import api from "../../Utils/api"
import axios from "axios";


export const GetbookingDetails = ()=>(dispatch, getState)=>{

   const USERID = getState().logindata.logindata.Items[0].USER_ID
   console.log("transporter----------->",USERID)
   

    return new Promise ((resolve, reject)=>{
   
      axios.get(`${api.protocol}${api.url}${api.allbookingDetails}${USERID}`,
  
  // let config = {
    {
    method: 'get',
    maxBodyLength: Infinity,
    headers: { 
      'Authorization': 'Basic c2ItNzA5ZDc4MWEtMGMwYy00Njc5LTllNjEtMGYxYTg4ZWJiOTRiIWIxMjIwfGl0LXJ0LW5lYy1kZXYtMi1rNWl6emU3OCFiMTQ4OmQwMmFkNGQ4LTJjZTgtNDdlZC05YmNjLTRlYWZjNWVlMzRiMSRsV0lSV09BbmVlRjRqZkhPNnNyZUdOX1ZoaGEyQ1g2alZXS1hqLTA1ay0wPQ=='
    }
  },
      )
  // };
          // axios.request(config)
        .then(response=>{
    //  console.log("responsedataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",response)
            if(response.status==200){

                resolve(200)

                dispatch({type:  "BOOKINGDETAILS", payload: response.data.Items})

            }else{
                resolve(404);
                dispatch({type: 'BOOKINGDETAILS', payload: []});
            }
            // console.log("apiiiiiiiitttttttttttttttt",response.data.Items);
            // console.log("apiiiiiiiitttttttttttttttt",response.data.Response.Items[0]);


        })
        .catch(res=>{
            console.log("res",res);
        });

 });

};

