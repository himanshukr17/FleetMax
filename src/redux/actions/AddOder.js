import axios from "axios";
import api from '../../Utils/api'

export const AddOrder = (data) => async (dispatch, getState) => {
      // console.log("ADDORDER------------->", `${api.protocol}${api.url}${api.addOrder}`, { ...data });
      return new Promise((resolve, reject) => {

            axios.post(`${api.protocol}${api.url}${api.addOrder}`,
                  data
                  , {
                        headers: {
                              'Authorization': 'Basic c2ItNzA5ZDc4MWEtMGMwYy00Njc5LTllNjEtMGYxYTg4ZWJiOTRiIWIxMjIwfGl0LXJ0LW5lYy1kZXYtMi1rNWl6emU3OCFiMTQ4OmQwMmFkNGQ4LTJjZTgtNDdlZC05YmNjLTRlYWZjNWVlMzRiMSRsV0lSV09BbmVlRjRqZkhPNnNyZUdOX1ZoaGEyQ1g2alZXS1hqLTA1ay0wPQ==',
                              'Content-Type': 'application/json',
                              'Cookie': 'SAP_SESSIONID_HDA_220=0_8PSy_cEOosyNwF7TNIK-WB19PRGRHtqa4AUFalBrA%3d; sap-usercontext=sap-client=220'
                        }
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
