import axios from "axios";
import api from '../../Utils/api'

export const GetDeliveryDetails = (data) => async (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios.post(`${api.protocol}${api.url}${api.delivery}`,
       data
        ,{
            headers: {
                'Authorization':'Basic c2ItYjEyZTg4MjEtOWRlMy00NzA3LWE3YjctYjVlNDQwZDMwMzcxIWIxNDIwMDJ8aXQtcnQtOTRiOWRiMDB0cmlhbCFiMjY2NTU6YzYzOWM4ZGMtYWU0MC00OGQ0LThmZDQtMzNkM2IxYjRmZDM4JHZaYkNCYTlMZUxWM3lzN2liRUlrTkVyWU9mdE9xS0Rmc05KdzVUQzM4Z1U9',
                'Content-Type': 'text/plain',
                'Cookie': 'SAP_SESSIONID_HDA_220=0_8PSy_cEOosyNwF7TNIK-WB19PRGRHtqa4AUFalBrA%3d; sap-usercontext=sap-client=220'
            }
          }).then((response) => {
          if (response.status == 200) {
            console.log(response.data.d.results)
            resolve(200)
            dispatch({ type: "DELIVERY_DETAILS", payload: response.data.d.results })
          }
          else {
            resolve(404)
            console.log("error");
            dispatch({ type: "DELIVERY_DETAILS", payload: [] })

          }
        }).catch(err => {
          console.log(err);
          reject(err)
          dispatch({ type: "DELIVERY_DETAILS", payload: [] })
  
        })
  
  
    })
  
  };


  export const GetFastagDetails = (data) => async (dispatch, getState) => {
    // console.log("action--->",time)
    return new Promise((resolve, reject) => {
      axios.post(`${api.protocol}${api.url}${api.fleetmax}`,
       data
        ,{
            headers: {
                'Authorization':'Basic c2ItYjEyZTg4MjEtOWRlMy00NzA3LWE3YjctYjVlNDQwZDMwMzcxIWIxNDIwMDJ8aXQtcnQtOTRiOWRiMDB0cmlhbCFiMjY2NTU6YzYzOWM4ZGMtYWU0MC00OGQ0LThmZDQtMzNkM2IxYjRmZDM4JHZaYkNCYTlMZUxWM3lzN2liRUlrTkVyWU9mdE9xS0Rmc05KdzVUQzM4Z1U9',
                'Content-Type': 'application/json',
                'Cookie': 'SAP_SESSIONID_HDA_220=0_8PSy_cEOosyNwF7TNIK-WB19PRGRHtqa4AUFalBrA%3d; sap-usercontext=sap-client=220'
            }
          }).then((response) => {
            console.log("fastagg--->",response.status)

          if (response.status == 200&&response.data?.response[0].response?.vehicle?.vehltxnList?.txn) {
            // console.log(response.status)
            resolve(200)
            
            dispatch({ type: "FASTAG_DETAILS", payload: response.data.response[0].response.vehicle.vehltxnList.txn.sort(function(a,b){return new Date(b.readerReadTime) - new Date(a.readerReadTime)})})
          }
          else {
            resolve(404)
            console.log("error");
            dispatch({ type: "FASTAG_DETAILS", payload: [] })

          }
        }).catch(err => {
          console.log("err");
        //   reject(err)
          dispatch({ type: "FASTAG_DETAILS", payload: [] })
  
        })
  
  
    })
  
  };