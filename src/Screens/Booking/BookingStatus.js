import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, TouchableWithoutFeedback, ActivityIndicator } from "react-native";
import Nav from "../../Components/Header/Nav";
import Container from "../../Components/Layout/Conatiner";
import Content from "../../Components/Layout/Content";
import Snackbar from 'react-native-snackbar';
import Header from "../../Components/Layout/Header";
import Input from "../../Components/CustomInput/Input"
import Typography from "../../Components/typography"
import { Icon } from 'react-native-elements';
import Search from "../../Components/CustomInput/CustomSearch"
import LottieAnimation from 'lottie-react-native';
import Modal from "react-native-modal";
import Calendar from "react-native-calendar-range-picker";
import { Avatar, Divider, Overlay } from 'react-native-elements';
import MapView, { Callout, Marker, PROVIDER_GOOGLE, Circle, Polyline } from 'react-native-maps';
import truckdata from '../../data'
import Button from "../../Components/CustomButton/Button";
import LinearGradient from "react-native-linear-gradient";
import PieChart from 'react-native-pie-chart'
import axios from "axios";
const BookingStatus = (props) => {

    const [menloop, setmenloop] = useState(1)
    const data = props.route.params

    const mentrigger = () => {
        let i = menloop
        if (menloop < 1) {
            setmenloop(i + 1)
        }
    }
    const menref = React.useRef();
    useEffect(() => {
        if (menref.current) {
            menref.current?.play();
        }
    }, [menloop]);
    let n = [1, 2, 3, 4, 5]
    return (
        <Container>
            <Header>
                <Nav
                    leftComponent={<View style={{ alignItems: 'center', flexDirection: 'row', width: '400%', alignItems: 'center', marginTop: '10%' }}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <LottieAnimation
                                source={require('../../Asets/Loader/back.json')}
                                loop={false}
                                speed={1}
                                ref={menref}
                                onAnimationFinish={mentrigger}
                                autoPlay={false}
                                style={{ width: 100, height: 27, marginBottom: -10, marginTop: -2 }}
                            />
                        </TouchableOpacity>
                        <View>
                            <Typography type='bold' style={{ marginTop: 5, marginLeft: 7 }} size={19}>Booking Status</Typography>
                        </View>
                    </View>}
                />
            </Header>
            <Divider style={{ backgroundColor: "black", height: 0.2, marginLeft: -3 }} />
            <Content>
                {data && data.map(items => {

                     const [datePart, timePart] = items.ORDER_DATE.split(' '); // Split date and time parts
                     const [day, month, year] = datePart.split('-'); // Split day, month, year
                     const [hour, minute, second] = timePart.split(':');
                     newdate = new Date(year, month - 1, day, hour, minute, second);

                     const date = newdate.toLocaleDateString();
                     const time = newdate.toLocaleTimeString();

                     
                    return (

                        // {"APPROVED_BY": "sam", "CREATED_BY": "22", "FLAG": "", "FREUGHT_AMOUNT": "1212.0", "FROM_LOCATION": "delhi",
                        //  "NUMBER_OF_DRIVER": "5", "ORDER_DATE": "18-03-2024 15:43:35 PM", "ORDER_NO": "2", "STATUS": "Accept",
                        //   "TO_LOCATION": "Sonipat", "TRIP_TYPE": "km", "VEHICLE_SIZE": "30 * 50", "VEHICLE_TYPE": "two", "WEIGHT_OF_LOAD": "5.0"}
                        
                        <TouchableWithoutFeedback
                        key={items}
                        onPress={()=>props.navigation.navigate("BookingStatusDetil", [items])}>
                            <View style={styles.container}>
                                <View style={[styles.box, { marginRight: 10 }]}>
                                    <View style={styles.tiles}>
                                        <Typography size={14} bold >From : </Typography>
                                        <Typography size={14}>{items.FROM_LOCATION}</Typography>
                                    </View>
                                    <View style={styles.tiles}>
                                        <Typography size={14} bold>To : </Typography>
                                        <Typography size={14}>{items.TO_LOCATION}</Typography>
                                    </View>
                                    <View style={styles.tiles}>
                                        <Typography size={14} bold>Date : </Typography>
                                        <Typography size={14}>{date}</Typography>
                                    </View>
                                    <View style={styles.tiles}>
                                        <Typography size={14} bold>Time : </Typography>
                                        <Typography size={14}>{time}</Typography>
                                    </View>
                                    <View style={styles.tiles}>
                                        <Typography size={14} bold>Status : </Typography>
                                        <Typography size={14}>{items.STATUS}</Typography>
                                    </View>
                                </View>
                                <View style={[styles.box, { marginLeft: 10 }]}>
                                    <View style={styles.tiles}>
                                        <Typography size={14} bold>Order no : </Typography>
                                        <Typography size={14}>{items.ORDER_NO}</Typography>
                                    </View>
                                    <View style={styles.tiles}>
                                        <Typography size={14} bold>Transporter : </Typography>
                                        <Typography size={14}>VRL</Typography>
                                    </View>
                                    <View style={styles.tiles}>
                                        <Typography size={14} bold>Vehicle No : </Typography>
                                        <Typography size={14}>KA26-1234</Typography>
                                    </View>
                                    <View style={styles.tiles}>
                                        <Typography size={14} bold>Vehicle Type : </Typography>
                                        <Typography size={14}>{items.VEHICLE_TYPE}</Typography>
                                    </View>
                                    <View style={styles.tiles}>
                                        <Typography size={14} bold>Vehicle Size : </Typography>
                                        <Typography size={14}>{items.VEHICLE_SIZE}</Typography>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })}
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    feilds: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    input: {
        width: "60%",
        height: "5%"
    },
    tiles: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box: {
        flex: 1
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginTop: 10,
        padding: 5,
        borderWidth: 0.5,
        borderRadius: 5,
        paddingHorizontal: 10
    }
})

export default (BookingStatus);