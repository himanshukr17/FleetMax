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
import { Icon } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import DocumentPicker, { types } from 'react-native-document-picker';
import Snackbar from 'react-native-snackbar';
import { AddDriver } from "../../redux/actions/AddDriver";
import { connect } from "react-redux";
import DateTimePicker from '@react-native-community/datetimepicker';
// import Icon from 'react-native-vector-icons/Ionicons';

const AddTruckDriver = (props) => {

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

      const [doc, setdoc] = useState(null);
      const [doc1, setdoc1] = useState(null);
      const [doc2, setdoc2] = useState(null);


      const docselection = useCallback(async () => {
            try {
                  const response = await DocumentPicker.pick({
                        presentationStyle: 'fullScreen',
                        // type: [types.pdf, types.docx],
                        allowMultiSelection: true,
                  });
                  setdoc(response);
            } catch (err) {
                  console.warn(err);
            }
      }, []);

      const docselection1 = useCallback(async () => {
            try {
                  const response = await DocumentPicker.pick({
                        presentationStyle: 'fullScreen',
                        // type: [types.pdf, types.docx],
                        allowMultiSelection: true,
                  });
                  setdoc1(response);
            } catch (err) {
                  console.warn(err);
            }
      }, []);

      const docselection2 = useCallback(async () => {
            try {
                  const response = await DocumentPicker.pick({
                        presentationStyle: 'fullScreen',
                        // type: [types.pdf, types.docx],
                        allowMultiSelection: true,
                  });
                  setdoc2(response);
            } catch (err) {
                  console.warn(err);
            }
      }, []);

      useFocusEffect(useCallback(() => {
            setdoc(null)
            setdoc1(null)
            setdoc2(null)
            setDate(new Date())


      }, []))

      const [data, setdata] = useState({
            "DRIVER_NAME": "",
            "BASE_LOCATION": "",
            "LICENSE_NO": "",
            "VALID_TO": "",
            "VEHICLE_ALLOWED": "",
            "VEHICLE_TYPE": "",

      })

      const [error, seterror] = useState({
      })

      const setValue = (val) => {
            setdata({ ...data, ...val })
      }

      const [type, setType] = useState(null)

      const handleSubmit = () => {
            let hasErr = false
            let require = ["DRIVER_NAME", "BASE_LOCATION", "LICENSE_NO", "VALID_TO", "VEHICLE_ALLOWED", "VEHICLE_TYPE"]
            let err = {
                  DRIVER_NAME: "",
                  BASE_LOCATION: "",
                  LICENSE_NO: "",
                  VALID_TO: "",
                  VEHICLE_ALLOWED: "",
                  VEHICLE_TYPE: "",
            }
            require.map((items) => {
                  if (data[items] == "" || data[items] == '' || data[items] == null) {
                        hasErr = true
                        err[items] = "This field is mandatory"
                  }
            })
            if (hasErr) {
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

                  props.AddDriver({ driver_master: [{ ...data }] }).then((res) => {
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
                                          <Typography type='bold' style={{ marginTop: 5, marginLeft: 7 }} size={19}>Driver Details</Typography>
                                    </View>
                              </View>}
                        />
                  </Header>
                  <Divider style={{ backgroundColor: "black", height: 0.2, marginLeft: -3 }} />
                  <Content>
                        <View style={{ marginTop: "7%", marginLeft: "3%" }}>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Driver Name</Typography>
                                    <Input style={styles.input}

                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Base Location</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>License Number</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>


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

                                                val && setDate(val);
                                          }}
                                          display="default"
                                    />)}

                              <TouchableOpacity onPress={() => setShowPicker(true)}>

                                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                          <View style={{ flexDirection: 'row', marginBottom: 15 }}>

                                                <View style={{ flexDirection: 'row' }}>
                                                      <View style={{ marginLeft: 8 }}>
                                                            <Typography size={18}>License Validd Upto </Typography>
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
                                                <Typography>{date.toDateString()}</Typography>
                                          </View>
                                    </View>
                              </TouchableOpacity>


                              {/* <View style={styles.feilds}>
                                    <Typography size={17}>License Valid Upto</Typography>

                                    <Input style={styles.input}

                                    />
                              </View> */}

                              <View style={styles.feilds}>
                                    <Typography size={17}>Vehicles Allowed</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Vehicles Type</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>

                              <View style={{ flexDirection: "row", alignItems: "center", marginBottom: "3%" }}>
                                    <Typography size={17} style={{ marginLeft: "3%" }}>Driver License</Typography>

                                    <TouchableOpacity onPress={() => docselection2()}>
                                          <View style={{ marginLeft: "52%", marginRight: -10 }}>
                                                <View style={{ borderWidth: 0.5, padding: 5, borderRadius: 10, width: '100%', backgroundColor: "#dcdcdc" }}>

                                                      {doc2 ? <Icon
                                                            name={"checkbox-outline"}
                                                            color={"green"}
                                                            type='ionicon'
                                                            // onPress={onpress}
                                                            size={28}
                                                            style={{ marginRight: "5%" }}
                                                      /> : <Icon
                                                            name={"cloud-upload-outline"}
                                                            color={"black"}
                                                            type='ionicon'
                                                            // onPress={onpress}
                                                            size={28}
                                                            style={{ marginRight: "5%" }}
                                                      />}
                                                      {/* <Typography color='black' type="extraBold">{!doc ? "Please Attach Relevant Document" : doc[0].name}</Typography> */}
                                                </View>
                                          </View>
                                    </TouchableOpacity>
                              </View>

                              <View style={{ flexDirection: "row", alignItems: "center", marginBottom: "3%" }}>
                                    <Typography size={17} style={{ marginLeft: "3%" }}>Driver ID</Typography>

                                    <TouchableOpacity onPress={() => docselection1()}>
                                          <View style={{ marginLeft: "64%", marginRight: -30 }}>
                                                <View style={{ borderWidth: 0.5, padding: 5, borderRadius: 10, width: '100%', backgroundColor: "#dcdcdc" }}>

                                                      {doc1 ? <Icon
                                                            name={"checkbox-outline"}
                                                            color={"green"}
                                                            type='ionicon'
                                                            // onPress={onpress}
                                                            size={28}
                                                            style={{ marginRight: "5%" }}
                                                      /> : <Icon
                                                            name={"cloud-upload-outline"}
                                                            color={"black"}
                                                            type='ionicon'
                                                            // onPress={onpress}
                                                            size={28}
                                                            style={{ marginRight: "5%" }}
                                                      />}
                                                      {/* <Typography color='black' type="extraBold">{!doc ? "Please Attach Relevant Document" : doc[0].name}</Typography> */}
                                                </View>
                                          </View>
                                    </TouchableOpacity>
                              </View>

                              <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Typography size={17} style={{ marginLeft: "3%" }}>Driver Image</Typography>

                                    <TouchableOpacity onPress={() => docselection()}>
                                          <View style={{ marginLeft: "55%", marginRight: -18 }}>
                                                <View style={{ borderWidth: 0.5, padding: 5, borderRadius: 10, width: '100%', backgroundColor: "#dcdcdc" }}>

                                                      {doc ? <Icon
                                                            name={"checkbox-outline"}
                                                            color={"green"}
                                                            type='ionicon'
                                                            // onPress={onpress}
                                                            size={28}
                                                            style={{ marginRight: "5%" }}
                                                      /> : <Icon
                                                            name={"cloud-upload-outline"}
                                                            color={"black"}
                                                            type='ionicon'
                                                            // onPress={onpress}
                                                            size={28}
                                                            style={{ marginRight: "5%" }}
                                                      />}
                                                      {/* <Typography color='black' type="extraBold">{!doc ? "Please Attach Relevant Document" : doc[0].name}</Typography> */}
                                                </View>
                                          </View>
                                    </TouchableOpacity>
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

export default connect(null, { AddDriver })(AddTruckDriver);