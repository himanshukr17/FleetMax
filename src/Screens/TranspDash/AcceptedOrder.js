import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, TouchableWithoutFeedback, ActivityIndicator } from "react-native";
import Nav from "../../Components/Header/Nav";
import Container from "../../Components/Layout/Conatiner";
import Content from "../../Components/Layout/Content";
import Header from "../../Components/Layout/Header";
import Input from "../../Components/CustomInput/Input"
import Typography from "../../Components/typography"
import LottieAnimation from 'lottie-react-native';
import { Avatar, Divider, Overlay } from 'react-native-elements';
import Footer from "../../Components/Layout/Footer"
import Button from "../../Components/CustomButton/Button";
import LinearGradient from "react-native-linear-gradient";



const AcceptedOrder = (props) => {

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

      let data = props.route.params
      console.log("screen ", data)

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
                                          <Typography type='bold' style={{ marginTop: 5, marginLeft: 7 }} size={19}>Accepted Order</Typography>
                                    </View>
                              </View>}
                        />
                  </Header>
                  <Divider style={{ backgroundColor: "black", height: 0.2, marginLeft: -3 }} />
                  <Content>
                        <View style={{ marginTop: "7%", marginLeft: "3%" }}>
                              <View style={styles.feilds}>
                                    <Typography size={17}>Order Number</Typography>
                                    <Input style={styles.input}
                                          value={data.ORDER_NO}
                                          disabled
                                    />
                              </View>
                              <View style={styles.feilds}>
                                    <Typography size={17}>From Location</Typography>
                                    <Input style={styles.input}
                                          value={data.FROM_LOCATION}
                                          disabled
                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>To Location</Typography>

                                    <Input style={styles.input}
                                          disabled
                                          value={data.TO_LOCATION}
                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Date </Typography>

                                    <Input style={styles.input}
                                          disabled
                                          value={data.date}
                                    />
                              </View>
                              <View style={styles.feilds}>
                                    <Typography size={17}>Time</Typography>

                                    <Input style={styles.input}
                                          disabled
                                          value={data.time}
                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Vehicle Type</Typography>

                                    <Input style={styles.input}
                                          value={data.VEHICLE_TYPE}
                                          disabled
                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Vehicle Size</Typography>

                                    <Input style={styles.input}
                                          value={data.VEHICLE_SIZE}
                                          disabled
                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Number of Drivers</Typography>

                                    <Input style={styles.input}
                                          value={data.NUMBER_OF_DRIVER}
                                          disabled
                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Freight Amount</Typography>

                                    <Input style={styles.input}
                                          value={data.FREUGHT_AMOUNT}
                                          disabled
                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Weight of Load</Typography>

                                    <Input style={styles.input}
                                          value={data.WEIGHT_OF_LOAD}
                                          disabled
                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Trip Type</Typography>

                                    <Input style={styles.input}
                                          value={data.TRIP_TYPE}
                                          disabled
                                    />
                              </View>

                        </View>
                  </Content>

                  <Footer> 
                        <View style={{ padding: 10, flexDirection: "row", justifyContent: "space-around" }}>
                              
                              <View style={styles.button}>
                                    <TouchableOpacity>
                                          <LinearGradient colors={['#8EDD01', '#669B05']} style={{ padding: 20, alignItems: 'center', paddingVertical: 12, borderRadius: 10 }} useAngle={true} angle={200} angleCenter={{ x: 0.5, y: 0.5 }}>
                                                <Typography size={20} color="white" type="extraBold">Add Driver</Typography>
                                          </LinearGradient>
                                    </TouchableOpacity>
                              </View>

                              <View style={styles.button}>
                                    <TouchableOpacity>
                                          <LinearGradient colors={['#F10201', "#C20000"]} style={{ padding: 20, alignItems: 'center', paddingVertical: 12, borderRadius: 10 }} >
                                                <Typography size={20} color="white" type="extraBold">Add Truck</Typography>
                                          </LinearGradient>
                                    </TouchableOpacity>
                              </View>

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
      },
      button: {
            width: "40%"
      }
})

export default (AcceptedOrder);