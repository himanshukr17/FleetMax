import React, { useState, useEffect } from "react";
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
import DropDownPicker from '../../Components/Dropdown/Dropdown'
import Snackbar from 'react-native-snackbar';
import { AddTruck } from "../../redux/actions/AddTruck";
import { connect } from "react-redux";

const TruckSetails = (props) => {

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
            "VEHICLE_NO": "",
            "VEHICLE_TYPE": "",
            "VEHICLE_SIZE": "",
            "OWNER": "",
            "FUEL_TYPE": "",
            "LENGTH": "",
            "WIDTH": "",
            "HEIGHT": "",
            "APPROVED_LOAD_CAPACITY": "",
            "RC_NO": "",
            "RC_VALID_TO": "",
            "INSURANCE_STATUS": "",
            "INSURANCE_VALID_TO": "",
            "PERMIT_NO": "",
            "PERMIT_EXPIRY": "",

      })

      const [error, seterror] = useState({
      })

      const setValue = (val) => {
            setdata({ ...data, ...val })
      }

      const [type, setType] = useState(null)

      const handleSubmit = () => {
            let hasErr = false
            let require = ["VEHICLE_NO", "VEHICLE_TYPE", "VEHICLE_SIZE", "OWNER", "FUEL_TYPE", "LENGTH", "WIDTH", "HEIGHT", "APPROVED_LOAD_CAPACITY", "RC_NO", "RC_VALID_TO", "INSURANCE_STATUS", "INSURANCE_VALID_TO", "PERMIT_NO", "PERMIT_EXPIRY"]
            let err = {
                  VEHICLE_NO: "",
                  VEHICLE_TYPE: "",
                  VEHICLE_SIZE: "",
                  OWNER: "",
                  FUEL_TYPE: "",
                  LENGTH: "",
                  WIDTH: "",
                  HEIGHT: "",
                  APPROVED_LOAD_CAPACITY: "",
                  RC_NO: "",
                  RC_VALID_TO: "",
                  INSURANCE_STATUS: "",
                  INSURANCE_VALID_TO: "",
                  PERMIT_NO: "",
                  PERMIT_EXPIRY: "",

            }
            require.map((items) => {
                  if (data[items] == "" || data[items] == '' || data[items] == null) {
                        hasErr = true
                        err[items] = "This field is mandatory"
                  }
            })
            if(hasErr){
                  setTimeout(() => {

                        Snackbar.show({
                            text: 'Please fill all the feilds',
                            duration: Snackbar.LENGTH_SHORT,
                        })
                    }, 1000)
            }
            seterror(err)

            if (!hasErr) {
                  // props.Shipment(sendata).then
                  // props.navigation.navigate("Home")

                  props.AddTruck({Truck_Master:[{...data}]}).then((res) => {
                        if (res = "success") {
                              props.navigation.navigate("Home"),
                                    setTimeout(() => {
                                          Snackbar.show({
                                                text: 'Truck added sucessfully',
                                                duration: Snackbar.LENGTH_SHORT,
                                          })
                                    }, 1000)
                        }
                  }
                  ).catch(err => {
                        Snackbar.show({
                              text: 'Unable to add truck, Please Try again!',
                              duration: Snackbar.LENGTH_SHORT,
                        })
                  })
            }
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
                                          <Typography type='bold' style={{ marginTop: 5, marginLeft: 7 }} size={19}>Truck Details</Typography>
                                    </View>
                              </View>}
                        />
                  </Header>
                  <Divider style={{ backgroundColor: "black", height: 0.2, marginLeft: -3 }} />
                  <Content>
                        <View style={{ marginTop: "2%", marginLeft: "3%", marginBottom: "20%" }}>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Vehicle Number</Typography>
                                    <Input style={styles.input}
                                          onChangeText={(text) => { setValue({ VEHICLE_NO: text }), seterror({ ...error, ...{ VEHICLE_NO: '' } }) }}
                                          value={data.VEHICLE_NO}
                                          // error={error?.VEHICLE_NO==""?true:false}
                                          // errorMessage={"error.VEHICLE_NO"}
                                    />
                              </View>

                              <View style={{ marginBottom: "4%" }}>
                                    <DropDownPicker
                                          label={'Vehicle Type'}
                                          // style={{colour:"black"}}
                                          items={[
                                                { label: 'Truck', value: '0' },
                                                { label: 'Dumper', value: '1' },
                                                { label: 'Mini Van', value: '2' },
                                                { label: 'Dumper', value: '3' },
                                                { label: 'Other', value: '4' },

                                          ]}
                                          onValueChange={(item) => { setType(item), setValue({ VEHICLE_TYPE: item }) }}
                                          value={data.VEHICLE_TYPE}
                                          // errorMessage={error.VEHICLE_TYPE}
                                    />
                              </View>

                              <View style={{ marginBottom: "2%" }}>
                                    <DropDownPicker
                                          label={'Vehicle Size'}
                                          // style={{colour:"black"}}
                                          items={[
                                                { label: '85–99.9 cubic feet', value: '0' },
                                                { label: '100–109.9 cubic feet', value: '1' },
                                                { label: '110–119.9 cubic feet', value: '2' },
                                                { label: '≥ 120 cubic feet', value: '3' },
                                                // { label: 'Other', value: '4' },

                                          ]}
                                          onValueChange={(item) => { setType(item), setValue({ VEHICLE_SIZE: item }) }}
                                          value={data.VEHICLE_SIZE}
                                          // errorMessage={error.VEHICLE_SIZE}
                                    />
                              </View>

                              <View style={{ marginBottom: "2%" }}>
                                    <DropDownPicker
                                          label={'Owner'}
                                          // style={{colour:"black"}}
                                          items={[
                                                { label: 'Owner 1', value: '0' },
                                                { label: 'Owner 2', value: '1' },
                                                { label: 'Owner 3', value: '2' },
                                                { label: 'Owner 4', value: '3' },

                                          ]}
                                          onValueChange={(item) => { setType(item), setValue({ OWNER: item }) }}
                                          value={data.OWNER}
                                          // errorMessage={error.OWNER}
                                    />
                              </View>

                              <View style={{ marginBottom: "2%" }}>
                                    <DropDownPicker
                                          label={'Fuel Type'}
                                          // style={{colour:"black"}}
                                          items={[
                                                { label: 'Petrol engine', value: '0' },
                                                { label: 'Diesel engine', value: '1' },
                                                { label: 'CNG', value: '2' },
                                                { label: 'Electric', value: '3' },

                                          ]}
                                          onValueChange={(item) => { setType(item), setValue({ FUEL_TYPE: item }) }}
                                          value={data.FUEL_TYPE}
                                          // errorMessage={error.FUEL_TYPE}
                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Length</Typography>

                                    <Input style={styles.input}
                                          onChangeText={(text) => { setValue({ LENGTH: text }), seterror({ ...error, ...{ LENGTH: '' } }) }}
                                          value={data.LENGTH}
                                          // errorMessage={error.LENGTH}
                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Width</Typography>

                                    <Input style={styles.input}
                                          onChangeText={(text) => { setValue({ WIDTH: text }), seterror({ ...error, ...{ WIDTH: '' } }) }}
                                          value={data.WIDTH}
                                          // errorMessage={error.WIDTH}
                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Height</Typography>

                                    <Input style={styles.input}
                                          onChangeText={(text) => { setValue({ HEIGHT: text }), seterror({ ...error, ...{ HEIGHT: '' } }) }}
                                          value={data.HEIGHT}
                                          // errorMessage={error.HEIGHT}
                                    />
                              </View>

                              <View style={styles.feilds}>

                                    <View>
                                          <Typography size={17}>Approved Load </Typography>
                                          <Typography size={17}>Capacity</Typography>
                                    </View>

                                    <Input style={styles.input}
                                          onChangeText={(text) => { setValue({ APPROVED_LOAD_CAPACITY: text }), seterror({ ...error, ...{ APPROVED_LOAD_CAPACITY: '' } }) }}
                                          value={data.APPROVED_LOAD_CAPACITY}
                                          // errorMessage={error.APPROVED_LOAD_CAPACITY}
                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>RC Number</Typography>

                                    <Input style={styles.input}
                                          onChangeText={(text) => { setValue({ RC_NO: text }), seterror({ ...error, ...{ RC_NO: '' } }) }}
                                          value={data.RC_NO}
                                          // errorMessage={error.RC_NO}
                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>RC Upto</Typography>

                                    <Input style={styles.input}
                                          onChangeText={(text) => { setValue({ RC_VALID_TO: text }), seterror({ ...error, ...{ RC_VALID_TO: '' } }) }}
                                          value={data.RC_VALID_TO}
                                          // errorMessage={error.RC_VALID_TO}
                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Insurance Statuc</Typography>

                                    <Input style={styles.input}
                                          onChangeText={(text) => { setValue({ INSURANCE_STATUS: text }), seterror({ ...error, ...{ INSURANCE_STATUS: '' } }) }}
                                          value={data.INSURANCE_STATUS}
                                          // errorMessage={error.INSURANCE_STATUS}
                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Insurance Upto</Typography>

                                    <Input style={styles.input}
                                          onChangeText={(text) => { setValue({ INSURANCE_VALID_TO: text }), seterror({ ...error, ...{ INSURANCE_VALID_TO: '' } }) }}
                                          value={data.INSURANCE_VALID_TO}
                                          // errorMessage={error.INSURANCE_VALID_TO}
                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Permit Number</Typography>

                                    <Input style={styles.input}
                                          onChangeText={(text) => { setValue({ PERMIT_NO: text }), seterror({ ...error, ...{ PERMIT_NO: '' } }) }}
                                          value={data.PERMIT_NO}
                                          // errorMessage={error.PERMIT_NO}
                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Permit Expiry</Typography>

                                    <Input style={styles.input}
                                          onChangeText={(text) => { setValue({ PERMIT_EXPIRY: text }), seterror({ ...error, ...{ PERMIT_EXPIRY: '' } }) }}
                                          value={data.PERMIT_EXPIRY}
                                          // errorMessage={error.PERMIT_EXPIRY}
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

export default connect(null,{AddTruck})(TruckSetails);