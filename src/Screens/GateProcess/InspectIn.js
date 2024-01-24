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
import { useFocusEffect } from '@react-navigation/native';
import DropDownPicker from '../../Components/Dropdown/Dropdown'
import { GateIn } from "../../redux/actions/GateProcess";
import { connect } from "react-redux";
import Snackbar from 'react-native-snackbar';


const InspectIn = (props) => {

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
            "EXTERIOR_INSPECTION": "",
            "INTERIOR_INSPECTION": "",
            "ODOR_INSPECTION": "",
            "INTERIOR_SUPRFACE": "",
            "PEST_CONTROLE_VERIFY": "",
            "HYGIENE_MATERIAL": "",
            "DOCUMENTATION_CHECK": "",
            "VEHICLE_MAINTAINENCE_REPORT": "",
            "STRUCTURAL_INTEGRITY": "",
            "CLEANING_VALIDATION": "",
            "COMMENTS": ""
      })

      console.log('====================================');
      // console.log(props.GateIn());
      console.log(data);
      console.log('====================================');

      const setValue = (val) => {
            setdata({ ...data, ...val })
      }

      const [type, setType] = useState(null)

      const handleSubmit = () => {

            props.GateIn({ Gate_In_Inspection: [{ ...data, CREATED_BY: "HIMANSHU", CREATED_ON: new Date(), ORDER_NO: 123456 }] }).then((res) => {
                  if (res = "success") {
                        setTimeout(() => {
                              Snackbar.show({
                                    text: 'Inspection added sucessfully',
                                    duration: Snackbar.LENGTH_SHORT,
                              })
                        }, 1000)
                        props.navigation.navigate("Home")
                  }
            }
            ).catch(err => {
                  Snackbar.show({
                        text: 'Unable to add Inspection, Please Try again!',
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
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Visual Interior Inspection</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Exterior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ INTERIOR_INSPECTION: item }) }}
                                                value={data.INTERIOR_INSPECTION}

                                          />
                                    </View>

                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Visual Exterior Inspection</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ EXTERIOR_INSPECTION: item }) }}
                                                value={data.EXTERIOR_INSPECTION}

                                          />
                                    </View>

                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>ODOR_INSPECTION Inspection</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ ODOR_INSPECTION: item }) }}
                                                value={data.ODOR_INSPECTION}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Checking Interior Surface</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ INTERIOR_SUPRFACE: item }) }}
                                                value={data.INTERIOR_SUPRFACE}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Pest Control Verification</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ PEST_CONTROLE_VERIFY: item }) }}
                                                value={data.PEST_CONTROLE_VERIFY}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Hygiene Materials</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ HYGIENE_MATERIAL: item }) }}
                                                value={data.HYGIENE_MATERIAL}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Documentation Check</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ DOCUMENTATION_CHECK: item }) }}
                                                value={data.DOCUMENTATION_CHECK}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Vehicle Maintainence Record</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ VEHICLE_MAINTAINENCE_REPORT: item }) }}
                                                value={data.VEHICLE_MAINTAINENCE_REPORT}

                                          />
                                    </View>
                              </View>



                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Structural Integrity</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ STRUCTURAL_INTEGRITY: item }) }}
                                                value={data.STRUCTURAL_INTEGRITY}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Cleaning Validation</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: true },
                                                      { label: 'Not Ok', value: false },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ CLEANING_VALIDATION: item }) }}
                                                value={data.CLEANING_VALIDATION}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Comment</Typography>

                                    <Input style={styles.comment}
                                          onChangeText={(text) => { setValue({ COMMENTS: text }) }}
                                          value={data.COMMENTS}
                                    />
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

export default connect(null, { GateIn })(InspectIn);