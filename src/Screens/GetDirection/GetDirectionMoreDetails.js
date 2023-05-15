import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native";
import Nav from "../../Components/Header/Nav";
import Container from "../../Components/Layout/Conatiner";
import Content from "../../Components/Layout/Content";
import Header from "../../Components/Layout/Header";
import Input from "../../Components/CustomInput/Input"
import Typography from "../../Components/typography"
import { Icon } from 'react-native-elements';
import Search from "../../Components/CustomInput/CustomSearch"
import LottieAnimation from 'lottie-react-native';
import { Avatar, Divider } from 'react-native-elements';
import MapView, { Callout, Marker, PROVIDER_GOOGLE, Circle, Polyline } from 'react-native-maps';
import truckdata from '../../data'
import Button from "../../Components/CustomButton/HollowButton";
import LinearGradient from "react-native-linear-gradient";
import MapViewDirections from 'react-native-maps-directions';
const GetDirectionMoreDetails = (props) => {

    let data = props.route.params
    console.log(data)

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
    const origin = { latitude: 37.3318456, longitude: -122.0296002 };
    const destination = { latitude: 37.771707, longitude: -122.4053769 };

    const d = new Date()
    console.log(new Date(d.setFullYear(2024)).toDateString())
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
                            <Typography type='bold' style={{ marginTop: 5, marginLeft: 7 }} size={19}>{data.VEHICLE_NO}</Typography>
                        </View>
                    </View>}
                />
            </Header>
            <Divider style={{ backgroundColor: "black", height: 0.2, marginLeft: -3 }} />
            <Content>
                <View style={{ padding: 10 }}>
                    <Typography type='extraBold' size={16}>Vehicle Detail:</Typography>
                </View>
                <View style={{ borderBottomWidth: 0.3, borderColor: 'grey', paddingBottom: 5 }}>
                    <View style={{ marginLeft: 6, marginRight: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography>Vehicle Number :</Typography>
                        <Typography >{data.VEHICLE_NO}</Typography>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.3, borderColor: 'grey', paddingBottom: 5, marginTop: 10 }}>
                    <View style={{ marginLeft: 6, marginRight: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography>Vehicle RC :</Typography>
                        <Typography >HR234689237642367</Typography>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.3, borderColor: 'grey', paddingBottom: 5, marginTop: 10 }}>
                    <View style={{ marginLeft: 6, marginRight: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography>Vehicle Type :</Typography>
                        <Typography >semi-trailer truck</Typography>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.3, borderColor: 'grey', paddingBottom: 5, marginTop: 10 }}>
                    <View style={{ marginLeft: 6, marginRight: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography>Vehicle owner :</Typography>
                        <Typography >Mukesh Kumar</Typography>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.3, borderColor: 'grey', paddingBottom: 5, marginTop: 10 }}>
                    <View style={{ marginLeft: 6, marginRight: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography>Chassis number :</Typography>
                        <Typography >237648236458237652387</Typography>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.3, borderColor: 'grey', paddingBottom: 5, marginTop: 10 }}>
                    <View style={{ marginLeft: 6, marginRight: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography>Insurance No. :</Typography>
                        <Typography >ACSDCHBJSAD87628734D</Typography>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.3, borderColor: 'grey', paddingBottom: 5, marginTop: 10 }}>
                    <View style={{ marginLeft: 6, marginRight: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography>Insurance valid upto :</Typography>
                        <Typography >{new Date(d.setFullYear(2024)).toDateString()}</Typography>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0, borderColor: 'grey', paddingBottom: 5, marginTop: 10 }}>
                    <View style={{ marginLeft: 6, marginRight: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography>Pollution valid upto :</Typography>
                        <Typography >{new Date(d.setMonth(10)).toDateString()}</Typography>
                    </View>
                </View>
                <Divider style={{ backgroundColor: "black", height: 1, marginLeft: -10, marginRight: -10, marginTop: 20 }} />
                <Divider style={{ backgroundColor: "black", height: 1, marginLeft: -10, marginRight: -10, marginTop: 5 }} />
                <View style={{ padding: 10 }}>
                    <Typography type='extraBold' size={16}>Driver Detail:</Typography>
                </View>
                <View style={{ borderBottomWidth: 0.3, borderColor: 'grey', paddingBottom: 5 }}>
                    <View style={{ marginLeft: 6, marginRight: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography>Driver Name :</Typography>
                        <Typography >{data.DRIVER_NAME}</Typography>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.3, borderColor: 'grey', paddingBottom: 5, marginTop: 10 }}>
                    <View style={{ marginLeft: 6, marginRight: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography>DL No. :</Typography>
                        <Typography >HR234689237642367</Typography>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.3, borderColor: 'grey', paddingBottom: 5, marginTop: 10 }}>
                    <View style={{ marginLeft: 6, marginRight: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography>DL valid upto :</Typography>
                        <Typography >{new Date(d.setFullYear(2028)).toDateString()}</Typography>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.3, borderColor: 'grey', paddingBottom: 5, marginTop: 10 }}>
                    <View style={{ marginLeft: 6, marginRight: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography>Mobile No. :</Typography>
                        <Typography >8846374646</Typography>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.3, borderColor: 'grey', paddingBottom: 5, marginTop: 10 }}>
                    <View style={{ marginLeft: 6, marginRight: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography>Blood Group :</Typography>
                        <Typography >B +ve</Typography>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.3, borderColor: 'grey', paddingBottom: 5, marginTop: 10 }}>
                    <View style={{ marginLeft: 6, marginRight: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography>Address :</Typography>
                        <Typography >house no 167,gali no 11</Typography>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.3, borderColor: 'grey', paddingBottom: 5, marginTop: 10 }}>
                    <View style={{ marginLeft: 6, marginRight: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography>City :</Typography>
                        <Typography >Faridabad</Typography>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.3, borderColor: 'grey', paddingBottom: 5, marginTop: 10 }}>
                    <View style={{ marginLeft: 6, marginRight: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography>State :</Typography>
                        <Typography >Haryana</Typography>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0, borderColor: 'grey', paddingBottom: 5, marginTop: 10 }}>
                    <View style={{ marginLeft: 6, marginRight: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography>Pincode :</Typography>
                        <Typography >121004</Typography>
                    </View>
                </View>
            </Content>
        </Container>
    )
}

export default (GetDirectionMoreDetails);