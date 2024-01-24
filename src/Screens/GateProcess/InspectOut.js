import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, TouchableWithoutFeedback, ActivityIndicator } from "react-native";
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
import DropDown from '../../Components/Dropdown/CustomDropdown'
import { connect } from "react-redux";
import Snackbar from 'react-native-snackbar';
import { GateOut } from "../../redux/actions/GateProcess";

const InspectOut = (props) => {

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
            "TEMPERATURE_CONTROLE": "",
            // "DOCUMENT": "",
            "ROUTE_PLAN": "",
            "DRIVER_FITNESS": "",
            "COMPLIANCE_REGULATION": "",
            "DISPATCH_TIME": "",
            "LOAD_SECURED": "",
            "FUEL_CHECK": "",
            "SEAL_INTACT": "",
            "VEHICLE_CONDITION": "",
            "DRIVER_LOG": "",
            "LOAD_VERIFY": "",
            "SAFETY_GEAR": "",
            // "COMMENTS": "",



      })

      console.log('====================================');
      // console.log(props.GateIn());
      console.log("GATEOUT",data);
      console.log('====================================');

      const setValue = (val) => {
            setdata({ ...data, ...val })
      }

      const [type, setType] = useState(null)

      const handleSubmit = () => {

            props.GateOut({ gate_out_inspection: [{ ...data, CREATED_BY: "HIMANSHU", CREATED_ON: new Date(), ORDER_NO: 7891029 }] }).then((res) => {
                  if (res = "success") {
                        setTimeout(() => {
                              Snackbar.show({
                                    text: 'Gate-Out Inspection added sucessfully',
                                    duration: Snackbar.LENGTH_SHORT,
                              })
                        }, 1000)
                        props.navigation.navigate("Home")
                  }
            }
            ).catch(err => {
                  Snackbar.show({
                        text: 'Unable to add Gate-Out Inspection, Please Try again!',
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
                                          <Typography type='bold' style={{ marginTop: 5, marginLeft: 7 }} size={19}>Inspection Process</Typography>
                                    </View>
                              </View>}
                        />
                  </Header>
                  <Divider style={{ backgroundColor: "black", height: 0.2, marginLeft: -3 }} />

                  <Content style={{ zIndex: 1 }}>

                        <View style={{ right: -15 }}>
                              <View style={{ marginTop: "2%" }}>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Temperature Control</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Exterior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ TEMPERATURE_CONTROLE: item }) }}
                                                value={data.TEMPERATURE_CONTROLE}

                                          />
                                    </View>

                              </View>

                              {/* <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Documentation</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ DOCUMENT: item }) }}
                                                value={data.DOCUMENT}

                                          />
                                    </View>

                              </View> */}

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Route Plan</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ ROUTE_PLAN: item }) }}
                                                value={data.ROUTE_PLAN}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Driver Fitness</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ DRIVER_FITNESS: item }) }}
                                                value={data.DRIVER_FITNESS}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Compliance with regulation</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ COMPLIANCE_REGULATION: item }) }}
                                                value={data.COMPLIANCE_REGULATION}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Time of Dispatch</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ DISPATCH_TIME: item }) }}
                                                value={data.DISPATCH_TIME}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Load Secured</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ LOAD_SECURED: item }) }}
                                                value={data.LOAD_SECURED}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Fuel Check</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ FUEL_CHECK: item }) }}
                                                value={data.FUEL_CHECK}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Seal Intact</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ SEAL_INTACT: item }) }}
                                                value={data.SEAL_INTACT}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Vehicle Condition</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ VEHICLE_CONDITION: item }) }}
                                                value={data.VEHICLE_CONDITION}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Driver's Log</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ DRIVER_LOG: item }) }}
                                                value={data.DRIVER_LOG}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Load Verification</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ LOAD_VERIFY: item }) }}
                                                value={data.LOAD_VERIFY}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Safety Gear</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ SAFETY_GEAR: item }) }}
                                                value={data.SAFETY_GEAR}

                                          />
                                    </View>
                              </View>
                        </View>

                  </Content>

                  <View>
                        <Footer>
                              <View style={{ padding: 10 }}>
                                    <Button
                                          title="Submit"
                                          onPress={() => handleSubmit()}
                                          // onPress={() => props.navigation.navigate("Home")}
                                          style={{ marginTop: 15 }}
                                    />
                              </View>
                        </Footer>
                  </View>

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
      comment: {
            width: "83%",
            height: "18%",
            marginLeft: "5%",
            marginTop: "2%",
            marginBottom: "5%"
      }
})

export default connect(null, { GateOut })(InspectOut);