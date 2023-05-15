import React, { useState, useEffect, useCallback } from "react";
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
import { mapstyle } from "../../../mapstyle";
import Footer from "../../Components/Layout/Footer";
import Button from "../../Components/CustomButton/HollowButton";
import LinearGradient from "react-native-linear-gradient";
import MapViewDirections from 'react-native-maps-directions';
import Geocoder from 'react-native-geocoder';
import { getDistance, getPreciseDistance } from 'geolib';
import BottomSheet from "../../Components/BotttomNav/BottomSheet";
import { Provider } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
const GetDirectionDetails = (props) => {
    let data = props.route.params
    let deliveytime = data.LeaveDate + " " + data.LeaveTime.split("T")[1].split("H")[0] + ":" + data.LeaveTime.split("T")[1].split("H")[1].split("M")[0] + ":" + data.LeaveTime.split("T")[1].split("H")[1].split("M")[1].split("S")[0] + ".0"
    // console.log()

    const filterdata = (props.fastag.filter(items => { return new Date(deliveytime) <= new Date(items.readerReadTime) }).length!=0?props.fastag.filter(items => { return new Date(deliveytime) <= new Date(items.readerReadTime) }):[props.fastag[0]])
    // console.log(filterdata)
    const [show, setShow] = useState(false);
    const [menloop, setmenloop] = useState(1)

    var coordinates = []

    {
        (filterdata && filterdata.length > 0) &&filterdata.map((item) => {

            coordinates.push({
                latitude: item.tollPlazaGeocode.split(",")[0],
                longitude: item.tollPlazaGeocode.split(",")[1]
            })
        })

    }

let distance = 0
let timetravel = ((new Date().getTime()-new Date(deliveytime).getTime())/(1000*60*60)).toFixed(2)

    {
        coordinates && coordinates.map((item, index) => {

// console.log(item)
return(
            (index != coordinates.length - 1 && (distance = distance + Number(`${getPreciseDistance(coordinates[index], coordinates[index + 1],) / 1000}`)))
         ) })

    }

console.log("distance",distance)

    const renderItem = (item) => {
        // console.log(item.item);
        return (
            <View>
                <View style={{ flexDirection: 'row', padding: 5, borderWidth: 1, margin: 5, borderRadius: 5, alignItems: 'center' }}>
                    <View>
                        <Typography type='bold'>{new Date(item.item.readerReadTime).toDateString()}</Typography>
                        <Typography type='bold'>{item.item.readerReadTime.split(" ")[1].substr(0, 5)}</Typography>
                    </View>
                    <Typography style={{ alignItems: 'flex-start', marginLeft: 20, marginRight: 60 }}>{item.item.tollPlazaName}</Typography>
                </View>

            </View>
        )
    }
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

    useFocusEffect(useCallback(() => {
    }, []))
    const [dis, sedis] = useState(0)
    const [time, setime] = useState(0)
    const [Totaldis, seTotaldis] = useState(0)
    const [Totaltime, seTotaltime] = useState(0)
    // const [load, setload] = useState(0)
// let load = 0
const setvalue=(val)=>{
    // console.log(val)
    // load = load + val
    // setload(load+val)
}
// console.log("load")
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
                            <Typography type='bold' style={{ marginTop: 5, marginLeft: 7 }} size={19}>{data.TruckNo}</Typography>
                        </View>
                    </View>}
                    rightComponent={
                        <TouchableOpacity onPress={() => props.navigation.navigate("GetDirectionMoreDetails", { ...data })}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'black', marginTop: 5, marginBottom: -5, paddingTop: 8, borderRadius: 10 }}>
                                <Icon
                                    name="alert-circle-outline"
                                    type="ionicon"
                                    color={"white"}
                                />
                            </View>
                        </TouchableOpacity>
                    }
                />
            </Header>
            <Divider style={{ backgroundColor: "black", height: 0.2, marginLeft: -3 }} />
            <Content>

                <View style={{ marginTop: 10, backgroundColor: '#f9f9f9', marginLeft: -10, marginRight: -10, padding: 5 }}>
                    <View style={{ marginLeft: 5, marginBottom: 2, marginTop: -10 }}>
                        {/* <Typography>Last updated at {filterdata[0].readerReadTime.split(" ")[1].substr(0, 5)}</Typography> */}
                    </View>
                    <View style={{ borderRadius: 10, borderWidth: 0.5, overflow: 'hidden' }}>
                        <MapView
                            style={[{ alignItems: 'center', height: 560, borderRadius: 10 }]}
                            toolbarEnabled={false}
                            customMapStyle={mapstyle}
                            initialRegion={{
                                latitude: (Number(filterdata[0].tollPlazaGeocode.split(",")[0])),
                                longitude: (Number(filterdata[0].tollPlazaGeocode.split(",")[1])),
                                latitudeDelta: 0.0622,
                                longitudeDelta: 0.0121,
                            }}>
                            <MapViewDirections
                                origin={data.ZoneFrom}
                                destination={data.ZoneTo}
                                apikey={"AIzaSyCE1YULRSRF4F4srb8kbxEillH_wuktivI"}
                                strokeWidth={0}
                                precision="high"
                                strokeColor="#2093c3"
                                timePrecision="now"
                                onReady={result => {
                                    seTotaldis(`${Number(result.distance).toFixed(2)} km`)
                                    seTotaltime(`${Number(result.duration / 60).toFixed(2)}`)
                                }}
                            />
                            {filterdata.length>0&&<MapViewDirections
                                origin={filterdata[0].tollPlazaGeocode}
                                destination={data.ZoneTo}
                                apikey={"AIzaSyCE1YULRSRF4F4srb8kbxEillH_wuktivI"}
                                strokeWidth={4}
                                precision="high"
                                strokeColor="#2093c3"
                                timePrecision="now"
                                onReady={result => {
                                    sedis(`${Number(result.distance).toFixed(2)} km`)
                                    setime(`Expected Delivery in: ${Number(result.duration / 60).toFixed(2)} Hrs.`)
                                }}
                            />}
                            {filterdata.length>1&&filterdata.map((items, index) => {
                                
                                // console.log("d",d)
                                return (<>
                                    {(filterdata.length - 1 != index) && <MapViewDirections
                                        origin={filterdata[index].tollPlazaGeocode}
                                        destination={filterdata[index + 1].tollPlazaGeocode}
                                        apikey={"AIzaSyCE1YULRSRF4F4srb8kbxEillH_wuktivI"}
                                        strokeWidth={4}
                                        precision="high"
                                        strokeColor="#808080"
                                    />}
                                </>
                                )
                            })}

                            {filterdata.length>1&&filterdata.map((items, index) => {
                                return (
                                    <>
                                        {index > 0 && <Marker
                                            coordinate={{
                                                latitude: Number(items.tollPlazaGeocode.split(",")[0]),
                                                longitude: Number(items.tollPlazaGeocode.split(",")[1])
                                            }}
                                            pinColor={'green'}
                                            title={items.tollPlazaName}
                                            description={"Updated at " + new Date(items.readerReadTime).toDateString() + " " + items.readerReadTime.split(" ")[1].substr(0, 5)}
                                        />}
                                    </>)
                            })}
                            <Marker
                                coordinate={{
                                    latitude: Number(filterdata[0].tollPlazaGeocode.split(",")[0]),
                                    longitude: Number(filterdata[0].tollPlazaGeocode.split(",")[1])
                                }}
                                pinColor={'red'}
                                title={filterdata[0].tollPlazaName}
                                description={"Updated at " + new Date(filterdata[0].readerReadTime).toDateString() + " " + filterdata[0].readerReadTime.split(" ")[1].substr(0, 5)}
                            />
                        </MapView>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', paddingTop: 0 }}>
                            <View style={{ width: 10, height: 10, backgroundColor: '#808080', borderRadius: 20 }}></View>
                            <Typography style={{ marginLeft: 5 }}>Covered Distance</Typography>
                        </View>
                        <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', paddingTop: 0 }}>
                            <View style={{ width: 10, height: 10, backgroundColor: '#2093c3', borderRadius: 20 }}></View>
                            <Typography style={{ marginLeft: 5 }}>Remaining Distance</Typography>
                        </View>
                        
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', paddingTop: 0,  marginTop: -5  }}>
                            <View style={{ width: 10, height: 10, backgroundColor: 'green', borderRadius: 20 }}></View>
                            <Typography style={{ marginLeft: 5 }}>CheckPoints</Typography>
                        </View>
                    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', paddingTop: 0, marginTop: -5 }}>
                        <View style={{ width: 10, height: 10, backgroundColor: 'red', borderRadius: 20 }}></View>
                        <Typography style={{ marginLeft: 5 }}>Current Location</Typography>
                    </View>
                    </View>
                    <View style={{ paddingLeft: 3 }}>
                        <Typography>Remaining Distance is {dis}</Typography>
                        <Typography>{time}</Typography>

                    </View>
                    <View style={{ marginTop: 4, paddingLeft: 3 }}>
                        <Typography>Total Distance is {Totaldis}</Typography>
                        <Typography>Total Duration : {Totaltime} Hrs.</Typography>
                    </View>
                    <View style={{ marginTop: 4, paddingLeft: 3 }}>
                        <Typography>Total {(distance).toFixed(2)} km covered in {timetravel} Hrs.</Typography>
                    </View>
                </View>
                <Provider>
                    <View>
                        <BottomSheet
                            show={show}
                            onDismiss={() => {
                                setShow(false);
                            }}
                            enableBackdropDismiss
                        >
                            <FlatList
                                data={filterdata}
                                renderItem={renderItem}
                                keyExtractor={(item, index) => index + 10}
                            />
                        </BottomSheet>
                    </View>
                </Provider>
            </Content>
            <Footer>
                <View style={{ padding: 10 }}>
                    <Button onPress={() => { setShow(true) }} title="Show Location Points" style={{ backgroundColor: '#ffb300' }} />
                </View>
            </Footer>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        fastag: state.deliverydetails.fastagDetails
    }
}

export default connect(mapStateToProps, {})(GetDirectionDetails);