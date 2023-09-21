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

                              <View style={styles.feilds}>
                                    <Typography size={17}>Vehicle Type</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Vehicle Size</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Owner</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>

                              <View style={styles.feilds}>
                                    <Typography size={17}>Fuel Type</Typography>

                                    <Input style={styles.input}

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