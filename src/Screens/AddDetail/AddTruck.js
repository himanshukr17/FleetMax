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


const AddTruck = (props) => {

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
            "VEHTYPE": "",
            "VEHSIZE": "",
            "OWNER": "",
            "FUEL": "",

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
                                          <Typography type='bold' style={{ marginTop: 5, marginLeft: 7 }} size={19}>Truck Details</Typography>
                                    </View>
                              </View>}
                        />
                  </Header>
                  <Divider style={{ backgroundColor: "black", height: 0.2, marginLeft: -3 }} />
                  <Content>
                        <View style={{ marginTop: "7%", marginLeft: "3%" }}>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Vehicle Number</Typography>
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
                                          onValueChange={(item) => { setType(item), setValue({ FUEL: item }) }}
                                          value={data.FUEL}

                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Length</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Width</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Height</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>

                              <View style={styles.feilds}>

                                    <View>
                                          <Typography size={17}>Approved Load </Typography>
                                          <Typography size={17}>Capacity</Typography>
                                    </View>

                                    <Input style={styles.input}

                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>RC Number</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>RC Upto</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Insurance Statuc</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Insurance Upto</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Permit (State)</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Permit Expiry</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>

                        </View>


                  </Content>
                  <Footer>
                        <View style={{ padding: 10 }}>
                              <Button
                                    title="Submit"
                                    onPress={() => { }}
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

export default (AddTruck);