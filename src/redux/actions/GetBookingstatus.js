import api from "../../Utils/api"
import axios from "axios";


export const GetBookingstatus = ()=>(dispatch, getState)=>{

    const USERID = getState().logindata.logindata.Items[0].USER_ID
    console.log("login idd----------->>>>>>>>>>>>>",USERID)

   

    return new Promise ((resolve, reject)=>{

        axios.get( `${api.protocol}${api.url}${api.bookingstatus}${USERID}` ,{
            method: 'get',
            maxBodyLength: Infinity,
            headers: { 
              'Authorization': 'Basic c2ItNzA5ZDc4MWEtMGMwYy00Njc5LTllNjEtMGYxYTg4ZWJiOTRiIWIxMjIwfGl0LXJ0LW5lYy1kZXYtMi1rNWl6emU3OCFiMTQ4OmQwMmFkNGQ4LTJjZTgtNDdlZC05YmNjLTRlYWZjNWVlMzRiMSRsV0lSV09BbmVlRjRqZkhPNnNyZUdOX1ZoaGEyQ1g2alZXS1hqLTA1ay0wPQ=='
            }
          }          
        )   
        .then(response=>{
    //  console.log("responsedata---------->>>>>>>>",response.data)
            if(response.status==200){

                resolve(200)

                dispatch({type:  "BOOKINGSTATUS", payload: response.data.Items})

            }else{
                resolve(404);
                dispatch({type: 'BOOKINGSTATUS', payload: []});
            }
            // console.log("apitdata------->>>>>>>>>",response.data.Items);
            // console.log("apiiiiiiiitttttttttttttttt",response.data.Response.Items[0]);


        })
        .catch(res=>{
            console.log("res",res);
        });

 });

};

