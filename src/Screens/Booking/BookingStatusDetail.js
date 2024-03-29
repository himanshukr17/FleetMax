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
const BookingStatusDetil = (props) => {

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
                            <Typography type='bold' style={{ marginTop: 5, marginLeft: 7 }} size={19}>Details</Typography>
                        </View>
                    </View>}
                />
            </Header>
            <Divider style={{ backgroundColor: "black", height: 0.2, marginLeft: -3 }} />
            <Content>
                <View style={{ marginTop: "7%", marginLeft: "3%" }}>
                <View style={styles.feilds}>
                        <Typography size={17}>Order Number</Typography>
                        <Input style={styles.input}
                            value="MJK2342"
                            disabled
                        />
                    </View>
                    <View style={styles.feilds}>
                        <Typography size={17}>From Location</Typography>
                        <Input style={styles.input}
                            value="Banglore"
                            disabled
                        />
                    </View>

                    <View style={styles.feilds}>
                        <Typography size={17}>To Location</Typography>

                        <Input style={styles.input}
                            disabled
                            value="Delhi"
                        />
                    </View>

                    <View style={styles.feilds}>
                        <Typography size={17}>Date & Time</Typography>

                        <Input style={styles.input}
                            disabled
                            value="12th Sep 2023"
                        />
                    </View>

                    <View style={styles.feilds}>
                        <Typography size={17}>Vehicle Type</Typography>

                        <Input style={styles.input}
                            value="Container"
                            disabled
                        />
                    </View>

                    <View style={styles.feilds}>
                        <Typography size={17}>Vehicle Size</Typography>

                        <Input style={styles.input}
                            value="22ft"
                            disabled
                        />
                    </View>

                    <View style={styles.feilds}>
                        <Typography size={17}>Number of Drivers</Typography>

                        <Input style={styles.input}
                            value="3"
                            disabled
                        />
                    </View>

                    <View style={styles.feilds}>
                        <Typography size={17}>Freight Amount</Typography>

                        <Input style={styles.input}
                            value="4000"
                            disabled
                        />
                    </View>

                    <View style={styles.feilds}>
                        <Typography size={17}>Weight of Load</Typography>

                        <Input style={styles.input}
                            value="120 KGs"
                            disabled
                        />
                    </View>

                    <View style={styles.feilds}>
                        <Typography size={17}>Trip Type</Typography>

                        <Input style={styles.input}
                            value="Round"
                            disabled
                        />
                    </View>
                    <View style={styles.feilds}>
                        <Typography size={17}>Approve by</Typography>

                        <Input style={styles.input}
                            value="VHG"
                            disabled
                        />
                    </View>
                </View>
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
    }
})

export default (BookingStatusDetil);