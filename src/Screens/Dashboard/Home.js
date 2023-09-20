import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Nav from "../../Components/Header/Nav";
import Container from "../../Components/Layout/Conatiner";
import Content from "../../Components/Layout/Content";
import Header from "../../Components/Layout/Header";
import Input from "../../Components/CustomInput/Input"
import Typography from "../../Components/typography"
import { Icon } from 'react-native-elements';
import LottieAnimation from 'lottie-react-native';
import { Avatar, Divider } from 'react-native-elements';
import MapView, { Callout, Marker, PROVIDER_GOOGLE, Circle, Polyline } from 'react-native-maps';

import Button from "../../Components/CustomButton/Button";
import LinearGradient from "react-native-linear-gradient";

const Home = (props) => {
    const [menloop, setmenloop] = useState(0)
    // const [loop, setloop] = useState(0)

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
    return (
        <Container>
            <Header>
                <Nav
                    leftComponent={<View style={{ flexDirection: 'row', width: '400%', alignItems: 'center', marginTop: '15%' }}>
                        <TouchableOpacity onPress={() => { }}>
                            <LottieAnimation
                                source={require('../../Asets/Loader/menu.json')}
                                loop={false}
                                speed={1}
                                ref={menref}
                                onAnimationFinish={mentrigger}
                                autoPlay={false}
                                style={{ width: 100, height: 40, marginBottom: -10, marginTop: -2 }}
                            />
                        </TouchableOpacity>
                    </View>}
                />
            </Header>
            <Divider style={{ backgroundColor: "black", height: 0.2, marginLeft: -3 }} />
            <Content>
                {/* <LinearGradient colors={['#FFB300', "white"]} style={{ marginLeft: -10, marginRight: -10 }}> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5, paddingHorizontal: 10, paddingTop: 10, marginLeft: 0, marginRight: -20 }}>
                    <View>
                        <Typography type='regular' size={29}>Welcome</Typography>
                        {/* <Typography type='cursive' size={26}>Himanshu Sharma</Typography> */}
                    </View>
                    <View style={{ marginRight: 20 }}>
                        <Avatar
                            rounded
                            borderRadius={150 / 2}
                            borderWidth={1}
                            borderColor={"white"}
                            size={80}
                            source={require('../../Asets/box.png')}
                        />
                    </View>
                </View>
                {/* </LinearGradient> */}
                <View style={{ marginTop: 10, backgroundColor: '#f9f9f9', marginLeft: -10, marginRight: -10, padding: 5 }}>
                    <View style={{ borderRadius: 10, borderWidth: 0.5, overflow: 'hidden' }}>
                        <MapView
                            style={[{ alignItems: 'center', height: 270, borderRadius: 10 }]}
                            initialRegion={{
                                latitude: (28.561414),
                                longitude: (77.334147),
                                latitudeDelta: 0.0622,
                                longitudeDelta: 0.0121,
                            }}>
                            {/* <Marker coordinate={{
                                latitude: (28.560698),
                                longitude: (77.336164),
                                title: "UP16-AC-2022",
                                description: "Sector 16"
                            }}>
                                <Image source={require('../../Asets/Truck.png')} style={{ height: 45, width: 45, transform: [{ rotate: '-90deg' }] }} />
                            </Marker>
                            <Marker coordinate={{
                                latitude: (28.566624),
                                longitude: (77.332204),
                                title: "UP16-AC-2022",
                                description: "Sector 16"
                            }}>
                                <Image source={require('../../Asets/Truck.png')} style={{ height: 45, width: 45, transform: [{ rotate: '-90deg' }] }} />
                            </Marker>
                            <Marker coordinate={{
                                latitude: (28.561109),
                                longitude: (77.340246),
                                title: "UP16-AC-2022",
                                description: "Sector 16"
                            }}>
                                <Image source={require('../../Asets/Truck.png')} style={{ height: 45, width: 45, transform: [{ rotate: '-90deg' }] }} />
                            </Marker>
                            <Marker coordinate={{
                                latitude: (28.554096),
                                longitude: (77.329268),
                                title: "UP16-AC-2022",
                                description: "Sector 16"
                            }}>
                                <Image source={require('../../Asets/Truck.png')} style={{ height: 45, width: 45, transform: [{ rotate: '-90deg' }] }} />
                            </Marker> */}
                        </MapView>
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'space-between', paddingRight: 20 }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("GetDirection")}>
                            <View style={{ width: 100 }}>
                                <LottieAnimation
                                    source={require('../../Asets/Loader/direction.json')}
                                    loop={false}
                                    speed={1}
                                    // ref={menref}
                                    // onAnimationFinish={mentrigger}
                                    autoPlay={true}
                                    style={{ width: 100, height: 85, marginBottom: -10, marginTop: -2 }}
                                />
                                <Typography style={{ alignSelf: 'center', textAlign: 'center' }}>Get Delivery Details</Typography>
                            </View>
                        </TouchableOpacity>
                        <View style={{ width: 100 }}>
                            <View>
                                <LottieAnimation
                                    source={require('../../Asets/Loader/Contact.json')}
                                    loop={false}
                                    speed={1}
                                    // ref={menref}
                                    // onAnimationFinish={mentrigger}
                                    autoPlay={true}
                                    style={{ width: 100, height: 95, marginBottom: -20, marginTop: -4 }}
                                />
                            </View>
                            <Typography style={{ alignSelf: 'center', textAlign: 'center' }}>Get Vehicle Details</Typography>
                        </View>
                        <View style={{ width: 100 }}>
                            <View>
                                <LottieAnimation
                                    source={require('../../Asets/Loader/driverd.json')}
                                    loop={false}
                                    speed={1}
                                    // ref={menref}
                                    // onAnimationFinish={mentrigger}
                                    autoPlay={true}
                                    style={{ width: 100, height: 95, marginBottom: -10, marginTop: -2 }}
                                />
                            </View>
                            <Typography style={{ alignSelf: 'center', textAlign: 'center' }}>Get Driver Details</Typography>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'space-between', paddingRight: 20 }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Booking")}>
                            <View style={{ width: 100 }}>
                                <LottieAnimation
                                    source={require('../../Asets/Loader/booking.json')}
                                    loop={false}
                                    speed={1}
                                    // ref={menref}
                                    // onAnimationFinish={mentrigger}
                                    autoPlay={true}
                                    style={{ width: 100, height: 100, marginBottom: 0, marginLeft: -10, marginTop: -2 }}
                                />
                                <Typography style={{ alignSelf: 'center', textAlign: 'center' }}>Booking Details</Typography>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.navigation.navigate("Transporter")}>
                            <View style={{ width: 100 }}>
                                <LottieAnimation
                                    source={require('../../Asets/Loader/transporter.json')}
                                    loop={false}
                                    speed={1}
                                    // ref={menref}
                                    // onAnimationFinish={mentrigger}
                                    autoPlay={true}
                                    style={{ width: 100, height: 100, marginBottom: 0,  marginTop: -2 }}
                                />
                                <Typography style={{ alignSelf: 'center', textAlign: 'center' }}>Transporter Dashboard</Typography>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Content>
        </Container>
    )
}

export default (Home);