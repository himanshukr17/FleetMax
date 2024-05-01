import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LottieSplashScreen from "react-native-lottie-splash-screen";
import Login from "./Screens/Onboarding/Login";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./Screens/Dashboard/Home";
import GetDirection from "./Screens/GetDirection/GetDirection";
import GetDirectionDetails from "./Screens/GetDirection/GetDirectionDetails";
import GetDirectionMoreDetails from "./Screens/GetDirection/GetDirectionMoreDetails";
import { GetDeliveryDetails } from "./redux/actions/GetDeliveryDetails";
import { connect } from "react-redux";
import Booking from "./Screens/Booking/Booking";
import CreateBooking from "./Screens/Booking/CreateBooking";
import BookingStatus from "./Screens/Booking/BookingStatus";
import BookingStatusDetil from "./Screens/Booking/BookingStatusDetail";
import Transporter from "./Screens/TranspDash/Transporter";
import OrderDetail from "./Screens/TranspDash/OrderDetail";
import PendingOrder from "./Screens/TranspDash/PendingOrder";
import AcceptedOrder from "./Screens/TranspDash/AcceptedOrder";
import RejectedOrder from "./Screens/TranspDash/RejectedOrder";
import AddTruck from "./Screens/AddDetail/AddTruck";
import AddDriver from "./Screens/AddDetail/AddDriver";
import SideDrawer from "./Components/Drawer"
import Gate from "./Screens/GateProcess/Gate";
import InspectIn from "./Screens/GateProcess/InspectIn";
import InspectOut from "./Screens/GateProcess/InspectOut";
import GetOrder from "./Screens/TruckDriver/GetOrder";
import MapTruck from "./Screens/TruckDriver/MapTruck";
import CompOrder from "./Screens/TruckDriver/CompOrder";
import POD from "./Screens/TruckDriver/POD";
import { FavourableRoutes } from "./redux/actions/FavourableRoute";
import { GetbookingDetails } from "./redux/actions/GetbookingDetails";
import { GetBookingstatus } from "./redux/actions/GetBookingstatus";
import { Getvehicledetails } from "./redux/actions/Getvehicledetails";
import { Getdriverdetails } from "./redux/actions/GetDriverDetails";
// import { Loginid } from "./redux/actions/Loginid";
// import { Statusupdate } from "./redux/actions/Statusupdate";


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const Route = (props) => {
    console.log("isAuth-------->>>>>>", props.logindata?.Items )
    useEffect(() => {
        LottieSplashScreen.hide()
        // console.log("working",props.logindata)
           props.GetDeliveryDetails('20230303to20230310')
        if(props.logindata?.Items!=undefined ){
        props.FavourableRoutes();
        props.GetbookingDetails();
        props.GetBookingstatus();
        props.Getvehicledetails();
        props.Getdriverdetails();    
    }   
    }, [])
   
    return (
        <NavigationContainer>

            { props.logindata?.Items!=undefined ? <Drawer.Navigator drawerContent={(props) => (<SideDrawer {...props} />)} headerMode={false} backBehavior='history'>
                <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Drawer.Screen name="Booking" component={Booking} options={{ headerShown: false }} />
                <Drawer.Screen name="GetDirection" component={GetDirection} options={{ headerShown: false }} />
                <Drawer.Screen name="BookingStatus" component={BookingStatus} options={{ headerShown: false }} />
                <Drawer.Screen name="CreateBooking" component={CreateBooking} options={{ headerShown: false }} />
                <Drawer.Screen name="BookingStatusDetil" component={BookingStatusDetil} options={{ headerShown: false }} />
                <Drawer.Screen name="GetDirectionDetails" component={GetDirectionDetails} options={{ headerShown: false }} />
                <Drawer.Screen name="GetDirectionMoreDetails" component={GetDirectionMoreDetails} options={{ headerShown: false }} />
                <Drawer.Screen name="Transporter" component={Transporter} options={{ headerShown: false }} />
                <Drawer.Screen name="OrderDetail" component={OrderDetail} options={{ headerShown: false }} />
                <Drawer.Screen name="PendingOrder" component={PendingOrder} options={{ headerShown: false }} />
                <Drawer.Screen name="AcceptedOrder" component={AcceptedOrder} options={{ headerShown: false}} />
                <Drawer.Screen name="RejectedOrder" component={RejectedOrder} options={{ headerShown: false}} />
                <Drawer.Screen name="AddTruck" component={AddTruck} options={{ headerShown: false }} />
                <Drawer.Screen name="AddDriver" component={AddDriver} options={{ headerShown: false }} />
                <Drawer.Screen name="Gate" component={Gate} options={{ headerShown: false }} />
                <Drawer.Screen name="InspectIn" component={InspectIn} options={{ headerShown: false }} />
                <Drawer.Screen name="InspectOut" component={InspectOut} options={{ headerShown: false }} />
                <Drawer.Screen name="GetOrder" component={GetOrder} options={{ headerShown: false }} />
                <Drawer.Screen name="MapTruck" component={MapTruck} options={{ headerShown: false }} />
                <Drawer.Screen name="CompOrder" component={CompOrder} options={{ headerShown: false }} />
                <Drawer.Screen name="POD" component={POD} options={{ headerShown: false }} />
            </Drawer.Navigator>
            :
            // <Drawer.Navigator>
            // <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} />
            // </Drawer.Navigator>}
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
                </Stack.Navigator>}
          
        </NavigationContainer>
    )


}

const mapStateToProps =state=>{
    return{
        // favourateroute: state.favourateroute.favouriteroute,
        logindata:state.logindata.logindata
    }
}

export default connect( mapStateToProps,{ GetDeliveryDetails, FavourableRoutes, GetbookingDetails, GetBookingstatus, Getvehicledetails, Getdriverdetails })(Route);