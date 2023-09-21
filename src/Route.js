import React, { useEffect } from "react";
import { Text, View } from "react-native";
import LottieSplashScreen from "react-native-lottie-splash-screen";
import Login from "./Screens/Onboarding/Login";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
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
import AddTruck from "./Screens/AddDetail/AddTruck";
import AddDriver from "./Screens/AddDetail/AddDriver";



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const Route = (props) => {
    useEffect(() => {
        LottieSplashScreen.hide()
        console.log("working")
        //    props.GetDeliveryDetails('20230303to20230310')
    }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Booking" component={Booking} options={{ headerShown: false }} />
                <Stack.Screen name="GetDirection" component={GetDirection} options={{ headerShown: false }} />
                <Stack.Screen name="BookingStatus" component={BookingStatus} options={{ headerShown: false }} />
                <Stack.Screen name="CreateBooking" component={CreateBooking} options={{ headerShown: false }} />
                <Stack.Screen name="BookingStatusDetil" component={BookingStatusDetil} options={{ headerShown: false }} />
                <Stack.Screen name="GetDirectionDetails" component={GetDirectionDetails} options={{ headerShown: false }} />
                <Stack.Screen name="GetDirectionMoreDetails" component={GetDirectionMoreDetails} options={{ headerShown: false }} />
                <Stack.Screen name="Transporter" component={Transporter} options={{ headerShown: false }} />
                <Stack.Screen name="OrderDetail" component={OrderDetail} options={{ headerShown: false }} />
                <Stack.Screen name="PendingOrder" component={PendingOrder} options={{ headerShown: false }} />
                <Stack.Screen name="AddTruck" component={AddTruck} options={{ headerShown: false }} />
                <Stack.Screen name="AddDriver" component={AddDriver} options={{ headerShown: false }} />




            </Stack.Navigator>
        </NavigationContainer>
    )


}

export default connect(null, { GetDeliveryDetails })(Route);