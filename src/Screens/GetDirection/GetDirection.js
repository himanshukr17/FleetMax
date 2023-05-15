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
import { connect } from "react-redux";
import { GetDeliveryDetails } from "../../redux/actions/GetDeliveryDetails";
import { GetFastagDetails } from "../../redux/actions/GetDeliveryDetails";
const GetDirection = (props) => {


  const fastagapi = (data) => {
    setSearch(true)
    props.GetFastagDetails({ "vehiclenumber": data.TruckNo }).then(res => {
      if (res == 200) {
        setSearch(false)
        props.navigation.navigate("GetDirectionDetails", { ...data })
      }
      else{
        setSearch(false)
        setTimeout(() => {
          Snackbar.show({
            text: 'No data found',
            duration: Snackbar.LENGTH_SHORT,
          });
        }, 200);
      }
    }).catch(()=>{setSearch(false)})
  }

  const renderItem = (item) => {
    let time = item.item.LeaveTime.split("T")[1].split("H")[0] + ":" + item.item.LeaveTime.split("T")[1].split("H")[1].split("M")[0]
    return (
      <TouchableWithoutFeedback onPress={() => fastagapi(item.item)}>
        <View style={{ padding: 10, paddingVertical: 7, borderWidth: 0.1, backgroundColor: '#f9f9f9', marginBottom: 10, borderRadius: 4 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Typography size={15}>Vehicle no. : {item.item.TruckNo}</Typography>
              <Typography size={14}>Driver : {item.item.DriverName}</Typography>
              <Typography size={13}>{item.item.ZoneFrom} {" --> "} {item.item.ZoneTo}</Typography>
            </View>
            <View style={{ alignItems: 'flex-end', marginTop: 7 }}>
              <Typography size={14}>Delivery number</Typography>
              <Typography size={15}>{item.item.Vbeln}</Typography>
            </View>
          </View>
          <Divider style={{ backgroundColor: "grey", height: 0.2, marginLeft: 10, marginTop: 5, marginRight: 10 }} />
          <View style={{marginTop:5}}>
            <Typography>Dispatch DateTime : {new Date(item.item.LeaveDate).toDateString()+"," + " " + time}</Typography>
          </View>
          {/* <View style={{ marginTop: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <Typography size={12}>Current Location : </Typography>
                  <Typography size={12} color="green" bold>{item.item.LOCATION}</Typography>

                </View>
                <Typography size={12}>Last Update at {item.item.TIME}*</Typography>
              </View>
              <View>
              </View>
            </View>
            <View style={{ backgroundColor: item.item.STATUS == "delayed" ? "red" : item.item.STATUS == "ontime" && "green", borderRadius: 10, paddingHorizontal: 4, marginTop: 5, justifyContent: 'center' }}>
              <Typography color="white">{item.item.STATUS == "delayed" ? "Delayed" : item.item.STATUS == "ontime" && "On-Time"}</Typography>
            </View>
          </View> */}
        </View>
      </TouchableWithoutFeedback>
    )
  }
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
  const [state, setState] = useState(false)
  const [daterange, setdaterange] = useState({ "endDate": null, "startDate": null })
  // console.log(daterange.endDate)

  let en = ((daterange.endDate) ? daterange?.endDate.split('-') : null)
  let st = (daterange.startDate ? daterange?.startDate.split('-') : null)
  let data = (daterange.endDate ? (st[0] + st[1] + st[2] + "to" + en[0] + en[1] + en[2]) : null)
  // console.log(data)
  const [searchKey, setSearch] = useState(false)

  const handlesearch = (date) => {
    setSearch(true)
    props.GetDeliveryDetails(date).then(res => {
      if (res == 200) {
        setSearch(false)
      }
    }).catch(() => { setSearch(false) })
  }

  // console.log("details",props.deliveryDetails)

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
                <Typography type='bold' style={{ marginTop: 5, marginLeft: 7 }} size={19}>Vehicle List</Typography>
              </View>
            </View>}
          />
        </Header>
        <Divider style={{ backgroundColor: "black", height: 0.2, marginLeft: -3 }} />
        <Content style={{ paddingTop: 10 }}>
          <TouchableOpacity onPress={() => { setState(true) }}>
            <View style={{ paddingVertical: 15, paddingHorizontal: 10, borderWidth: 0.5, borderRadius: 50, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Typography>Please select date range to get delivery list</Typography>
              <Icon
                name="calendar-outline"
                type="ionicon"
              />
            </View>
          </TouchableOpacity>
          {daterange.endDate &&
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <View style={{ paddingVertical: 15, paddingHorizontal: 50, borderWidth: 0.5, borderRadius: 10 }}>
                <Typography size={13} style={{}}>{daterange.startDate} {"-->"} {daterange.endDate}</Typography>
              </View>
              <Button
                title='Search'
                onPress={() => handlesearch(data)}
              />
            </View>
          }

          <Modal isVisible={state}>
            <View style={{ ...Platform.select({ ios: { marginTop: 30 } }) }}>
              <TouchableOpacity onPress={() => setState(!state)}>
                <View style={{ backgroundColor: "#C5C5C5", width: 28, borderRadius: 18, alignSelf: 'flex-end' }}>
                  <Icon
                    name='close'
                    type='ionicon'
                    size={25}
                    color='white'
                  /></View>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <Calendar
                onChange={({ startDate, endDate }) => setdaterange({ startDate, endDate })}
              />
            </View>
          </Modal>
          <View>
            {/* <Search placeholder={"Search with Vehicle Number / Name"} value={searchKey}
            onChangeText={txt => setSearch(txt)}/> */}
            <View style={{ marginTop: 3, marginLeft: 10 }}>
              <Typography>* Refresh rate is of 3 hrs</Typography>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <FlatList
              data={props.deliveryDetails}
              renderItem={renderItem}
              key={int => int + 10}
            />
          </View>
        </Content>
      </Container>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    deliveryDetails: state.deliverydetails.deliveryDetails
  }
}

export default connect(mapStateToProps, { GetDeliveryDetails, GetFastagDetails })(GetDirection);