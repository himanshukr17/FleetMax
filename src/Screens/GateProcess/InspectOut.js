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
            "TEMP": "",
            "DOCUMENT": "",
            "ROUTE": "",
            "FIT": "",
            "REG": "",
            "TIME": "",
            "LOAD": "",
            "FUEL": "",
            "SEAL": "",
            "CONDITION": "",
            "DRIVER": "",
            "LOAD_VERIFY": "",
            "GEAR": "",


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
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ TEMP: item }) }}
                                                value={data.TEMP}

                                          />
                                    </View>

                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Documentation</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ DOCUMENT: item }) }}
                                                value={data.DOCUMENT}

                                          />
                                    </View>

                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Route Plan</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ ROUTE: item }) }}
                                                value={data.ROUTE}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Driver Fitness</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ FIT: item }) }}
                                                value={data.FIT}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Compliance with regulation</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ REG: item }) }}
                                                value={data.REG}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Time of Dispatch</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ TIME: item }) }}
                                                value={data.TIME}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Load Secured</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ LOAD: item }) }}
                                                value={data.LOAD}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Fuel Check</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ FUEL: item }) }}
                                                value={data.FUEL}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Seal Intact</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ SEAL: item }) }}
                                                value={data.SEAL}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Vehicle Condition</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ CONDITION: item }) }}
                                                value={data.CONDITION}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Driver's Log</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ DRIVER: item }) }}
                                                value={data.DRIVER}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Load Verification</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ LOAD: item }) }}
                                                value={data.LOAD}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Safety Gear</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ GEAR: item }) }}
                                                value={data.GEAR}

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
                                          onPress={() => props.navigation.navigate("Home")}
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

export default (InspectOut);