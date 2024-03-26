import api from "../../Utils/api"
import axios from "axios";


export const Getvehicledetails = ()=>(dispatch, getState)=>{

   

    return new Promise ((resolve, reject)=>{


        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://nec-dev-2-k5izze78.it-cpi021-rt.cfapps.in30.hana.ondemand.com/http/Fleetmax/allVehicleDetails?Transporter_Id=AB',
            headers: { 
              'Authorization': 'Basic c2ItNzA5ZDc4MWEtMGMwYy00Njc5LTllNjEtMGYxYTg4ZWJiOTRiIWIxMjIwfGl0LXJ0LW5lYy1kZXYtMi1rNWl6emU3OCFiMTQ4OmQwMmFkNGQ4LTJjZTgtNDdlZC05YmNjLTRlYWZjNWVlMzRiMSRsV0lSV09BbmVlRjRqZkhPNnNyZUdOX1ZoaGEyQ1g2alZXS1hqLTA1ay0wPQ=='
            }
          };
          axios.request(config)
        .then(response=>{
    //  console.log("responsedataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",response)
            if(response.status==200){

                resolve(200)

                dispatch({type:  "VEHICLEDETAILS", payload: response.data.Items[0]})

            }else{
                resolve(404);
                dispatch({type: 'VEHICLEDETAILS', payload: []});
            }
            // console.log("apiiiiiiiittttttttttttttttVEHICLE",response.data.Items[0]);
            // console.log("apiiiiiiiitttttttttttttttt",response.data.Response.Items[0]);


        })
        .catch(res=>{
            console.log("res",res);
        });

 });

};

