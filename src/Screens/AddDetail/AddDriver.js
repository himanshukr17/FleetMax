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


const AddDriver = (props) => {

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

      }, []))



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

                              <View style={styles.feilds}>
                                    <Typography size={17}>License Valid Upto</Typography>

                                    <Input style={styles.input}

                                    />
                              </View>

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

export default (AddDriver);