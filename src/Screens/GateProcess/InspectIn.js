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
            "VEH_EXT": "",
            "VEH_INT": "",
            "ODOR": "",
            "INT_SUR": "",
            "PEST": "",
            "HYG": "",
            "DOC": "",
            "MAINT": "",
            "STR_INTEGRITY": "",
            "CLEAN": "",
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

                        <View style={{right:-15}}>
                              <View style={{ marginTop: "2%" }}>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Visual Interior Inspection</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Exterior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ VEH_INT: item }) }}
                                                value={data.VEH_INT}

                                          />
                                    </View>

                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Visual Exterior Inspection</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ VEH_EXT: item }) }}
                                                value={data.VEH_EXT}

                                          />
                                    </View>

                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Odor Inspection</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ ODOR: item }) }}
                                                value={data.ODOR}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Checking Interior Surface</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ INT_SUR: item }) }}
                                                value={data.INT_SUR}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Pest Control Verification</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ PEST: item }) }}
                                                value={data.PEST}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Hygiene Materials</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ HYG: item }) }}
                                                value={data.HYG}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Documentation Check</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ DOC: item }) }}
                                                value={data.DOC}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Vehicle Maintenance Record</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ MAINT: item }) }}
                                                value={data.MAINT}

                                          />
                                    </View>
                              </View>

                             

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Structural Integrity</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ STR_INTEGRITY: item }) }}
                                                value={data.STR_INTEGRITY}

                                          />
                                    </View>
                              </View>

                              <View>
                                    <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Cleaning Validation</Typography>

                                    <View style={{ marginTop: "2%", marginLeft: "5%" }}>
                                          <DropDown
                                                // label={'Visual Interior Inspection'}
                                                items={[
                                                      { label: 'Ok', value: '0' },
                                                      { label: 'Not Ok', value: '1' },

                                                ]}
                                                onValueChange={(item) => { setType(item), setValue({ CLEAN: item }) }}
                                                value={data.CLEAN}

                                          />
                                    </View>
                              </View>

                              <View>
                              <Typography size={16} type="bold" style={{ marginTop: "4%", marginLeft: "5%" }}>Comment</Typography>

                                    <Input style={styles.comment}

                                    />
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
      comment:{
            width: "83%",
            height: "18%",
            marginLeft:"5%",
            marginTop:"2%",
            marginBottom:"5%"
      }
})

export default (InspectIn);