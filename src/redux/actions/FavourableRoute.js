import api from "../../Utils/api"
import axios from "axios";


export const FavourableRoutes = ()=>(dispatch, getState)=>{
    // console.log("getstateeeee",getState().logindata.logindata.Items[0].USER_ID)

    const USERID = getState().logindata.logindata.Items[0].USER_ID

    // console.log("mainstateeeeeeeeeeee------>",USERID)

    return new Promise ((resolve, reject)=>{


        axios.get(`${api.protocol}${api.url}${api.favourableroute}${USERID}`,

        {
            method: 'get',
            maxBodyLength: Infinity,
            headers: { 
            'Authorization': 'Basic c2ItNzA5ZDc4MWEtMGMwYy00Njc5LTllNjEtMGYxYTg4ZWJiOTRiIWIxMjIwfGl0LXJ0LW5lYy1kZXYtMi1rNWl6emU3OCFiMTQ4OmQwMmFkNGQ4LTJjZTgtNDdlZC05YmNjLTRlYWZjNWVlMzRiMSRsV0lSV09BbmVlRjRqZkhPNnNyZUdOX1ZoaGEyQ1g2alZXS1hqLTA1ay0wPQ=='
           }
        },
      )
// let config = {
//             method: 'get',
//             maxBodyLength: Infinity,
//             url: 'https://nec-dev-2-k5izze78.it-cpi021-rt.cfapps.in30.hana.ondemand.com/http/Fleetmax/getFavourableRoutes?Supplier_id=vinay',
//             headers: { 
//               'Authorization': 'Basic c2ItNzA5ZDc4MWEtMGMwYy00Njc5LTllNjEtMGYxYTg4ZWJiOTRiIWIxMjIwfGl0LXJ0LW5lYy1kZXYtMi1rNWl6emU3OCFiMTQ4OmQwMmFkNGQ4LTJjZTgtNDdlZC05YmNjLTRlYWZjNWVlMzRiMSRsV0lSV09BbmVlRjRqZkhPNnNyZUdOX1ZoaGEyQ1g2alZXS1hqLTA1ay0wPQ=='
//             }
//           };
//           axios.request(config)
        .then(response=>{
            if(response.status==200){

                resolve(200)

                dispatch({type:  "FAVOURITE", payload: response.data.Items})
                // response.data.Items.forEach(items =>{
                //     dispatch({type:  "FAVOURITE", payload:items})
                // });

            }else{
                resolve(404);
                dispatch({type: 'FAVOURITE', payload: []});
            }
            // console.log("apiiiiiiiitttttttttttttttt",response.data.Items[0]);
            // console.log("apiiiiiiiitttttttttttttttt",response.data.Response.Items[0]);


        })
        .catch(err=>{
            console.log("res",err);
            reject(err)
        });

 });

};

