import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Nav from "../../Components/Header/Nav";
import Container from "../../Components/Layout/Conatiner";
import Content from "../../Components/Layout/Content";
import Header from "../../Components/Layout/Header";
import Input from "../../Components/CustomInput/Input"
import Typography from "../../Components/typography"
import Footer from "../../Components/Layout/Footer"
import LottieAnimation from 'lottie-react-native';
import { Avatar, Divider, Overlay } from 'react-native-elements';
import Button from "../../Components/CustomButton/Button";
import DropDownPicker from '../../Components/Dropdown/Dropdown'
import { AddOrder } from "../../redux/actions/AddOder";
import { connect } from "react-redux";
import Snackbar from 'react-native-snackbar';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';

const CreateBooking = (props) => {

    const [showPicker, setShowPicker] = useState(false);
    const [date, setDate] = useState(new Date());

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

    useFocusEffect(
        useCallback(() => {
            setDate(new Date())
            setdata({
                "FROM_LOCATION": "",
                "TO_LOCATION": "",
                "VEHICLE_TYPE": "",
                "VEHICLE_SIZE": "",
                "NUMBER_OF_DRIVER": "",
                "FREUGHT_AMOUNT": "",
                "WEIGHT_OF_LOAD": "",
                "TRIP_TYPE": "",
                "ORDER_DATE": "",
            })


        }, [])
    )

    const [data, setdata] = useState({
        "FROM_LOCATION": "",
        "TO_LOCATION": "",
        "VEHICLE_TYPE": "",
        "VEHICLE_SIZE": "",
        "NUMBER_OF_DRIVER": "",
        "FREUGHT_AMOUNT": "",
        "WEIGHT_OF_LOAD": "",
        "TRIP_TYPE": "",
        "ORDER_DATE": "",


    })

    console.log('====================================');
    console.log("ADDORDER", data);
    console.log('====================================');
    const setValue = (val) => {
        setdata({ ...data, ...val })
    }


    const [type, setType] = useState(null)

    const handleSubmit = () => {

        props.AddOrder({ Order_Master: [{ ...data, CREATED_BY: "HIMANSHU", ORDER_NO:987536 }] }).then((res) => {
            if (res = "success") {
                setTimeout(() => {
                    Snackbar.show({
                        text: 'Order/Booking added sucessfully',
                        duration: Snackbar.LENGTH_SHORT,
                    })
                }, 1000)
                props.navigation.navigate("Home")
            }
        }
        ).catch(err => {
            Snackbar.show({
                text: 'Unable to add Order/Booking, Please Try again!',
                duration: Snackbar.LENGTH_SHORT,
            })
        })
    }


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
                            onChangeText={(text) => { setValue({ FROM_LOCATION: text }) }}
                            value={data.FROM_LOCATION}
                        />
                    </View>

                    <View style={styles.feilds}>
                        <Typography size={17}>To Location</Typography>

                        <Input style={styles.input}
                            onChangeText={(text) => { setValue({ TO_LOCATION: text }) }}
                            value={data.TO_LOCATION}
                        />
                    </View>

                    {/* <View style={styles.feilds}>
                        <Typography size={17}>Date & Time</Typography>

                        <Input style={styles.input}

                        />
                    </View> */}

                    {showPicker && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            open={true}
                            // minimumDate={new Date(moment(data.START_DATE))}
                            // maximumDate={new Date()+30}
                            mode={'date'}
                            onChange={(e, val) => {
                                setShowPicker(false);

                                val && setValue({ ORDER_DATE: val });
                            }}
                            display="default"
                        />)}

                    <TouchableOpacity onPress={() => setShowPicker(true)}>

                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            <View style={{ flexDirection: 'row', marginBottom: 15 }}>

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ marginLeft: 8 }}>
                                        <Typography size={18}>Order Date </Typography>
                                    </View>

                                </View>
                                <Icon
                                    name={"calendar"}
                                    type={"ionicon"}
                                    style={{ marginTop: "2%", marginLeft: "5%" }}
                                    size={20}
                                />
                            </View>

                            <View style={{ alignItems: 'flex-end', justifyContent: 'center', alignContent: 'flex-end', marginRight: "5%" }}>
                                <Typography>{data.ORDER_DATE ? new Date(data.ORDER_DATE).toDateString() : new Date().toDateString()}</Typography>
                            </View>
                        </View>
                    </TouchableOpacity>


                    <View style={{ marginBottom: "5%", marginTop: "2%" }}>
                        <DropDownPicker
                            label={'Vehicle Type'}
                            // style={{colour:"black"}}
                            items={[
                                { label: 'Half body', value: 'Half Body' },
                                { label: 'Full body', value: 'Full Bodyu' },
                                { label: 'Container', value: 'Container' },
                                // { label: 'Dumper', value: '3' },
                                // { label: 'Other', value: '4' },

                            ]}
                            onValueChange={(item) => { setType(item), setValue({ VEHICLE_TYPE: item }) }}
                            value={data.VEHICLE_TYPE}

                        />
                    </View>

                    <View style={{ marginBottom: "5%" }}>
                        <DropDownPicker
                            label={'Vehicle Size'}
                            // style={{colour:"black"}}
                            items={[
                                { label: '20 feet', value: '20 feet' },
                                { label: '22 feet', value: '22 feet' },
                                { label: '32 feet', value: '32 feet' },
                                { label: '≥ 120 cubic feet', value: '≥ 120 cubic feet' },
                                // { label: 'Other', value: '4' },

                            ]}
                            onValueChange={(item) => { setType(item), setValue({ VEHICLE_SIZE: item }) }}
                            value={data.VEHICLE_SIZE}

                        />
                    </View>

                    <View style={{ marginBottom: "3%" }}>
                        <DropDownPicker
                            label={'Number of Drivers'}
                            // style={{colour:"black"}}
                            items={[
                                { label: 'One (1)', value: 'One (1)' },
                                { label: 'Two (2)', value: 'Two (2)' },
                                { label: 'Three (3)', value: 'Three (3)' },
                                { label: 'Others', value: 'Others' },
                                // { label: 'Other', value: '4' },

                            ]}
                            onValueChange={(item) => { setType(item), setValue({ NUMBER_OF_DRIVER: item }) }}
                            value={data.NUMBER_OF_DRIVER}

                        />
                    </View>

                    <View style={styles.feilds}>
                        <Typography size={17}>Freight Amount</Typography>

                        <Input style={styles.input}
                            onChangeText={(text) => { setValue({ FREUGHT_AMOUNT: text }) }}
                            value={data.FREUGHT_AMOUNT}
                        />
                    </View>

                    <View style={styles.feilds}>
                        <Typography size={17}>Weight of Load</Typography>

                        <Input style={styles.input}
                            onChangeText={(text) => { setValue({ WEIGHT_OF_LOAD: text }) }}
                            value={data.WEIGHT_OF_LOAD}
                        />
                    </View>

                    <View style={{ marginBottom: "2%", marginTop: "2%" }}>
                        <DropDownPicker
                            label={'Trip Type'}
                            items={[
                                { label: 'DeadHead (One-way)', value: 'DeadHead (One-way)' },
                                { label: 'Round Trip (Two-way)', value: 'Round Trip (Two-way)' },

                            ]}
                            onValueChange={(item) => { setType(item), setValue({ TRIP_TYPE: item }) }}
                            value={data.TRIP_TYPE}

                        />
                    </View>

                </View>


            </Content>
            <Footer>
                <View style={{ padding: 10 }}>
                    <Button
                        title="Submit"
                        onPress={() => handleSubmit()}
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

export default connect(null, { AddOrder })(CreateBooking);