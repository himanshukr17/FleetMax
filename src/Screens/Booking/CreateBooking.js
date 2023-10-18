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
import Footer from "../../Components/Layout/Footer"
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
import DropDownPicker from '../../Components/Dropdown/Dropdown'



const CreateBooking = (props) => {

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

    const [data, setdata] = useState({
        "VEHTYPE": "",
        "VEHSIZE": "",
        "NUMDRI": "",
        "TRIP": "",

    })


    const setValue = (val) => {
        setdata({ ...data, ...val })
    }


    const [type, setType] = useState(null)


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
                            <Typography type='bold' style={{ marginTop: 5, marginLeft: 7 }} size={19}>Create Booking</Typography>
                        </View>
                    </View>}
                />
            </Header>
            <Divider style={{ backgroundColor: "black", height: 0.2, marginLeft: -3 }} />
            <Content>
                <View style={{ marginTop: "7%", marginLeft: "3%" }}>

                    <View style={styles.feilds}>
                        <Typography size={17}>From Location</Typography>
                        <Input style={styles.input}

                        />
                    </View>

                    <View style={styles.feilds}>
                        <Typography size={17}>To Location</Typography>

                        <Input style={styles.input}

                        />
                    </View>

                    <View style={styles.feilds}>
                        <Typography size={17}>Date & Time</Typography>

                        <Input style={styles.input}

                        />
                    </View>

                    <View style={{ marginBottom: "5%", marginTop:"2%" }}>
                        <DropDownPicker
                            label={'Vehicle Type'}
                            // style={{colour:"black"}}
                            items={[
                                { label: 'Half body', value: '0' },
                                { label: 'Full body', value: '1' },
                                { label: 'Container', value: '2' },
                                // { label: 'Dumper', value: '3' },
                                // { label: 'Other', value: '4' },

                            ]}
                            onValueChange={(item) => { setType(item), setValue({ VEHTYPE: item }) }}
                            value={data.VEHTYPE}

                        />
                    </View>

                    <View style={{ marginBottom: "5%"}}>
                        <DropDownPicker
                            label={'Vehicle Size'}
                            // style={{colour:"black"}}
                            items={[
                                { label: '20 feet', value: '0' },
                                { label: '22 feet', value: '1' },
                                { label: '32 feet', value: '2' },
                                { label: '≥ 120 cubic feet', value: '3' },
                                // { label: 'Other', value: '4' },

                            ]}
                            onValueChange={(item) => { setType(item), setValue({ VEHSIZE: item }) }}
                            value={data.VEHSIZE}

                        />
                    </View>

                    <View style={{ marginBottom: "3%" }}>
                        <DropDownPicker
                            label={'Number of Drivers'}
                            // style={{colour:"black"}}
                            items={[
                                { label: 'One (1)', value: '0' },
                                { label: 'Two (2)', value: '1' },
                                { label: 'Three (3)', value: '2' },
                                { label: 'Others', value: '3' },
                                // { label: 'Other', value: '4' },

                            ]}
                            onValueChange={(item) => { setType(item), setValue({ NUMDRI: item }) }}
                            value={data.NUMDRI}

                        />
                    </View>

                    <View style={styles.feilds}>
                        <Typography size={17}>Freight Amount</Typography>

                        <Input style={styles.input}

                        />
                    </View>

                    <View style={styles.feilds}>
                        <Typography size={17}>Weight of Load</Typography>

                        <Input style={styles.input}

                        />
                    </View>

                    <View style={{ marginBottom: "2%" , marginTop:"2%"}}>
                        <DropDownPicker
                            label={'Trip Type'}
                            items={[
                                { label: 'DeadHead (One-way)', value: '0' },
                                { label: 'Round Trip (Two-way)', value: '1' },

                            ]}
                            onValueChange={(item) => { setType(item), setValue({ TRIP: item }) }}
                            value={data.TRIP}

                        />
                    </View>

                </View>


            </Content>
            <Footer>
                <View style={{ padding: 10 }}>
                    <Button
                        title="Submit"
                        onPress={() => { }}
                        style={{ marginTop: 15 }}
                    />
                </View>
            </Footer>
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

export default (CreateBooking);