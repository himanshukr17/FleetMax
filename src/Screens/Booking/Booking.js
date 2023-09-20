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
const Booking = (props) => {


    const [menloop, setmenloop] = useState(1)
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


    const [searchKey, setSearch] = useState(false)

    const widthAndHeight = 130
    const series = [100, 98, 185] // [rejected,pending,accepted]
    const sliceColor = ['#d23a3a', '#e2eb28', '#3d961d']
    let n = [1, 2, 3]
    return (
        <>
            <Overlay isVisible={searchKey}>
                <ActivityIndicator size={48} color={"#725dcf"} />
            </Overlay>
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
                                <Typography type='bold' style={{ marginTop: 5, marginLeft: 7 }} size={19}>Booking Details</Typography>
                            </View>
                        </View>}
                    />
                </Header>
                <Divider style={{ backgroundColor: "black", height: 0.2, marginLeft: -3 }} />
                <Content style={{ paddingTop: 10 }}>
                    <View style={{ backgroundColor: "white", padding: 10, borderRadius: 5, borderWidth: 0.2 }}>
                        <Typography size={16} bold>Favourable Routes</Typography>
                        {n.map(items => {
                            return (
                                <TouchableOpacity 
                                key={items}
                                onPress={() => props.navigation.navigate("CreateBooking")}>
                                    <View style={styles.route}>
                                        <Typography size={14} type={"bold"} style={{ marginBottom: 8 }}>Bangalore to Delhi</Typography>
                                        <Icon
                                            type="ionicon"
                                            size={20}
                                            name="arrow-forward-outline"
                                        />
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                        <TouchableOpacity onPress={() => props.navigation.navigate("CreateBooking")}>
                            <View style={[styles.route, { borderBottomWidth: 0 }]}>
                                <Typography size={14} type={"bold"} style={{ marginBottom: 8 }}>Create new Route</Typography>
                                <Icon
                                    type="ionicon"
                                    size={20}
                                    name="arrow-forward-outline"
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                        <TouchableWithoutFeedback onPress={()=>props.navigation.navigate("BookingStatus")}>
                        <View style={styles.chart}>
                            <View style={{ flexDirection: 'column', flex: 1, paddingRight: 10 }}>
                                <View style={{ marginBottom: 5 }}>
                                    <Typography size={15} bold>Booking Status</Typography>
                                </View>
                                <View style={styles.bookingstatus}>
                                    <Typography size={15} type="bold" colour="#3d961d">Accepted</Typography>
                                    <Typography size={15} colour="#3d961d">185</Typography>

                                </View>
                                <View style={styles.bookingstatus}>
                                    <Typography size={15} type="bold" colour="#a4ab1d">Pending</Typography>
                                    <Typography size={15} colour="#a4ab1d">98</Typography>
                                </View>
                                <View style={[styles.bookingstatus, { borderBottomWidth: 0 }]}>
                                    <Typography size={15} type="bold" colour="#d23a3a">Rejected</Typography>
                                    <Typography size={15} colour="#d23a3a">100</Typography>
                                </View>
                            </View>
                            <View style={{ borderLeftWidth: 0.5, paddingLeft: 10 }}>
                                <PieChart
                                    widthAndHeight={widthAndHeight}
                                    series={series}
                                    sliceColor={sliceColor}
                                    coverRadius={0.75}
                                    style={{ borderWidth: 1 }}
                                />
                            </View>
                        </View>
                        </TouchableWithoutFeedback>
                </Content>
            </Container>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    route: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        paddingHorizontal: 7,
        marginTop: 10
    },
    chart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 0.2
    },
    bookingstatus: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomWidth: 0.5
    }
});

export default (Booking);