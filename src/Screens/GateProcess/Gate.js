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


const GateIn = (props) => {

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
            "GATETYPE": "",
            "VEHTYPE": "",
            "VEHSIZE": "",
            "NUMDRI": "",
            "TRIP": "",

      })


      const setValue = (val) => {
            setdata({ ...data, ...val })
      }

      useFocusEffect(useCallback(() => {
            setdata({
                  "GATETYPE": "",
                  "VEHTYPE": "",
                  "VEHSIZE": "",
                  "NUMDRI": "",
                  "TRIP": "",

            })
      }, []))

      console.log('====================================');
      console.log(data);
      console.log('====================================');

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
                                          <Typography type='bold' style={{ marginTop: 5, marginLeft: 7 }} size={19}>Gate Process</Typography>
                                    </View>
                              </View>}
                        />
                  </Header>
                  <Divider style={{ backgroundColor: "black", height: 0.2, marginLeft: -3 }} />
                  <Content style={{ zIndex: 1 }}>

                        <View>
                              <Typography size={19} type="italic" style={{ alignSelf: "center", marginTop: "4%" }}>Please select type of process</Typography>

                              <View style={{ marginTop: "5%", alignSelf: "center", alignContent: "center", alignItems: "center" }}>
                                    <DropDown
                                          // label={'Vehicle Size'}
                                          // style={{colour:"black"}}
                                          items={[
                                                { label: 'Gate In Process', value: '0' },
                                                { label: 'Gate Out Process', value: '1' },
                                                // { label: '110–119.9 cubic feet', value: '2' },
                                                // { label: '≥ 120 cubic feet', value: '3' },
                                                // { label: 'Other', value: '4' },

                                          ]}
                                          onValueChange={(item) => { setType(item), setValue({ GATETYPE: item }) }}
                                          value={data.GATETYPE}

                                    />
                              </View>
                        </View>

                        {data.GATETYPE != "" && data.GATETYPE == 0 ? <View style={{ marginTop: "5%" }}>
                              <View style={styles.feilds}>
                                    <Typography size={17}>Order Number</Typography>
                                    <Input style={styles.input}

                                    />
                              </View>

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
                                          onValueChange={(item) => { setType(item), setValue({ VEHTYPE: item }) }}
                                          value={data.VEHTYPE}

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
                                    <Typography size={17}>Bay Number</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Weight of load</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>

                              <View style={{ marginBottom: "2%", marginTop: "2%" }}>
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

                              <View style={styles.feilds}>
                                    <Typography size={17}>Transporter</Typography>
                                    <Input style={styles.input}

                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Truck Number</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>


                        </View> :

                              data.GATETYPE != "" && data.GATETYPE == 1 ? <View style={{ marginTop: "5%" }}>
                                    <View style={styles.feilds}>
                                          <Typography size={17}>Order Number</Typography>
                                          <Input style={styles.input}

                                          />
                                    </View>

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
                                                onValueChange={(item) => { setType(item), setValue({ VEHTYPE: item }) }}
                                                value={data.VEHTYPE}

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
                                          <Typography size={17}>Weight of load</Typography>

                                          <Input style={styles.input}

                                          />
                                    </View>

                                    <View style={{ marginBottom: "2%", marginTop: "2%" }}>
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

                                    <View style={styles.feilds}>
                                          <Typography size={17}>Transporter</Typography>
                                          <Input style={styles.input}

                                          />
                                    </View>
                              </View> : null}



                  </Content>

                  {data.GATETYPE != "" && data.GATETYPE == 0 ? <View>
                        <Footer>
                              <View style={{ padding: 10 }}>
                                    <Button
                                          title="Submit"
                                          onPress={() => props.navigation.navigate("InspectIn")}
                                          style={{ marginTop: 15 }}
                                    />
                              </View>
                        </Footer>
                  </View> :

                        data.GATETYPE != "" && data.GATETYPE == 1 ? <View>
                              <Footer>
                                    <View style={{ padding: 10 }}>
                                          <Button
                                                title="Submit"
                                                onPress={() => props.navigation.navigate("InspectOut")}
                                                style={{ marginTop: 15 }}
                                          />
                                    </View>
                              </Footer>
                        </View> : null}

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

export default (GateIn);