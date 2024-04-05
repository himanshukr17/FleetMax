import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, TouchableWithoutFeedback, ActivityIndicator } from "react-native";
import Nav from "../../Components/Header/Nav";
import Container from "../../Components/Layout/Conatiner";
import Content from "../../Components/Layout/Content";
import Header from "../../Components/Layout/Header";
import Typography from "../../Components/typography"
import { Icon } from 'react-native-elements';
import LottieAnimation from 'lottie-react-native';
import { Avatar, Divider, Overlay } from 'react-native-elements';



const Transporter = (props) => {

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
            <>
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
                                                <Typography type='bold' style={{ marginTop: 5, marginLeft: 7 }} size={19}>Transporter Dashboard</Typography>
                                          </View>
                                    </View>}
                              />
                        </Header>
                        <Divider style={{ backgroundColor: "black", height: 0.2, marginLeft: -3 }} />
                        <Content style={{ paddingTop: 10 }}>
                              <View style={{ alignSelf: "center" }}>
                                    <Typography size={18} type="extraBold" style={{ textDecorationLine: 'underline', fontStyle: 'italic', marginTop: "2%" }}>Last Month Orders</Typography>
                              </View>

                              <View style={{ flexDirection: "row", justifyContent: "center" }}>

                                    <View style={styles.card}>
                                          <TouchableOpacity onPress={() => props.navigation.navigate("OrderDetail","Accept")}>
                                                <Typography size={18} color="green" type="extraBold" style={{ alignSelf: "center", paddingTop: 20 }}>Accepted</Typography>
                                                <Typography size={15} style={{ alignSelf: "center", paddingBottom: 20 }}>110</Typography>
                                          </TouchableOpacity>
                                    </View>

                                    <View style={styles.card}>
                                          <TouchableOpacity onPress={() => props.navigation.navigate("OrderDetail","Pending")}>
                                                <Typography size={18} color="yellow" type="extraBold" style={{ alignSelf: "center", paddingTop: 20 }}>Pending</Typography>
                                                <Typography size={15} style={{ alignSelf: "center", paddingBottom: 20 }}>5</Typography>
                                          </TouchableOpacity>
                                    </View>

                                    <View style={styles.card}>
                                          <TouchableOpacity onPress={() => props.navigation.navigate("OrderDetail","Reject")}>
                                                <Typography size={18} color="red" type="extraBold" style={{ alignSelf: "center", paddingTop: 20 }}>Rejected</Typography>
                                                <Typography size={15} style={{ alignSelf: "center", paddingBottom: 20 }}>7</Typography>
                                          </TouchableOpacity>
                                    </View>
                              </View>

                              {/* <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                    <View style={styles.card}>
                                          <TouchableOpacity>
                                                <Typography size={18} color="red" type="extraBold" style={{ alignSelf: "center", paddingTop: 20 }}>Rejected</Typography>
                                                <Typography size={15} style={{ alignSelf: "center", paddingBottom: 20 }}>30</Typography>
                                          </TouchableOpacity>

                                    </View>
                              </View> */}

                              <View style={{ alignSelf: "center" }}>
                                    <Typography size={18} type="extraBold" style={{ textDecorationLine: 'underline', fontStyle: 'italic', marginTop: "5%" }}>Last Week Orders</Typography>
                              </View>

                              <View style={{ flexDirection: "row", justifyContent: "center" }}>

                                    <View style={styles.card}>
                                          <TouchableOpacity onPress={() => props.navigation.navigate("OrderDetail")}>
                                                <Typography size={18} color="green" type="extraBold" style={{ alignSelf: "center", paddingTop: 20 }}>Accepted</Typography>
                                                <Typography size={15} style={{ alignSelf: "center", paddingBottom: 20 }}>16</Typography>
                                          </TouchableOpacity>
                                    </View>

                                    <View style={styles.card}>
                                          <TouchableOpacity onPress={() => props.navigation.navigate("OrderDetail")}>
                                                <Typography size={18} color="yellow" type="extraBold" style={{ alignSelf: "center", paddingTop: 20 }}>Pending</Typography>
                                                <Typography size={15} style={{ alignSelf: "center", paddingBottom: 20 }}>11</Typography>
                                          </TouchableOpacity>
                                    </View>

                                    <View style={styles.card}>
                                          <TouchableOpacity onPress={() => props.navigation.navigate("OrderDetail")}>
                                                <Typography size={18} color="red" type="extraBold" style={{ alignSelf: "center", paddingTop: 20 }}>Rejected</Typography>
                                                <Typography size={15} style={{ alignSelf: "center", paddingBottom: 20 }}>2</Typography>
                                          </TouchableOpacity>
                                    </View>
                              </View>
                        </Content>
                  </Container>
            </>
      )
}


const styles = StyleSheet.create({
      card: {
            paddingHorizontal: 10,
            paddingVertical: 5,
            ...Platform.select({ ios: { width: 100 }, android: { width: 125 } }),
            backgroundColor: 'white',
            borderRadius: 15,
            paddingTop: 5,
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: { width: 20, height: 30 },
            shadowOpacity: 25,
            shadowRadius: 30,
            marginTop: 20,
            alignSelf: 'center',
            marginLeft: 10,
            justifyContent: 'space-around',
      },
});

export default (Transporter);