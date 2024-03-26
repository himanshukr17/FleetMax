import { combineReducers } from 'redux';
import deliverydetails from "./deliverydetails";
import favourableroute from "./favourableroute";
import getbookingdetails from './getbookingdetails';
import getbookingstatus from './getbookingstatus';
import getvehicledetails from './getvehicledetails';
import getdriverdetails from './getdriverdetails';
export default combineReducers({
    deliverydetails:deliverydetails,
    favouriteroute:favourableroute,
    bookingdetails:getbookingdetails,
    Bookingstatus:getbookingstatus,
    vehicledetails:getvehicledetails,
    driverdetails:getdriverdetails
});