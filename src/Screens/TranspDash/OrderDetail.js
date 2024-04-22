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
import { connect } from "react-redux";
import { GetbookingDetails } from "../../redux/actions/GetbookingDetails";



const OrderDetail = (props) => {


      let data = props.orderDetails
      // console.log("order detailsssss", data)


      // const lengtharr = data.length
      // console.log("length------>>",lengtharr);

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


      // let n = [1, 2, 3, 4, 5]
      // console.log("nnnnnnnnnnnnn",props.route.params);

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
                                                <Typography type='bold' style={{ marginTop: 5, marginLeft: 7 }} size={19}>Detail View</Typography>
                                          </View>
                                    </View>}
                              />
                        </Header>
                        <Divider style={{ backgroundColor: "black", height: 0.2, marginLeft: -3 }} />
                        <Content style={{ paddingTop: 10 }}>
                              {/* <View style={{ alignSelf: "center" }}>
                                    <Typography size={22} type="extraBold" color="green" style={{ textDecorationLine: 'underline', 1fontStyle: 'italic', marginTop: "2%" }}>Accepted Orders</Typography>
                              </View> */}

                              {data && data.map(items => {
                                    // console.log("status---------->>>>", items.STATUS)
                                    return (<>
                                          {items.STATUS == props.route.params ?<TouchableWithoutFeedback
                                                key={items}
                                                onPress={() => props.navigation.navigate(items.STATUS=="Pending"?"PendingOrder":items.STATUS=="Accept"?"AcceptedOrder":"RejectedOrder",{...items})}>
                                                {/* { items.STATUS === "Accepted" && ( */}
                                                <View style={styles.container}>

                                                      { items.STATUS === "Pending" &&(
                                                      <View style={[styles.box, { marginRight: 10 }]}>
                                                            <View style={styles.tiles}>
                                                                  <Typography size={14} bold >From : </Typography>
                                                                  <Typography size={14}>{items.FROM_LOCATION}</Typography>
                                                            </View>
                                                            <View style={styles.tiles}>
                                                                  <Typography size={14} bold>To : </Typography>
                                                                  <Typography size={14}>{items.TO_LOCATION}</Typography>
                                                            </View>
                                                            <View style={styles.tiles}>
                                                                  <Typography size={14} bold>Date : </Typography>
                                                                  <Typography size={14}>{items.ORDER_DATE}</Typography>
                                                            </View>
                                                            <View style={styles.tiles}>
                                                                  <Typography size={14} bold>Time : </Typography>
                                                                  <Typography size={14}>{items.Time}</Typography>
                                                            </View>
                                                           
                                                      </View>
                                                       )}

                                                      { items.STATUS === "Pending" &&(

                                                      <View style={[styles.box, { marginLeft: 10 }]}>
                                                            <View style={styles.tiles}>
                                                                  <Typography size={14} bold>Order no : </Typography>
                                                                  <Typography size={14}>{items.ORDER_NO}</Typography>
                                                            </View>
                                                            
                                                            <View style={styles.tiles}>
                                                                  <Typography size={14} bold>Vehicle No : </Typography>
                                                                  <Typography size={14}>{items.VEHICLE_NO}</Typography>
                                                            </View>
                                                            <View style={styles.tiles}>
                                                                  <Typography size={14} bold>Vehicle Type : </Typography>
                                                                  <Typography size={14}>{items.VEHICLE_TYPE}</Typography>
                                                            </View>
                                                            <View style={styles.tiles}>
                                                                  <Typography size={14} bold>Vehicle Size : </Typography>
                                                                  <Typography size={14}>{items.VEHICLE_SIZE}</Typography>
                                                            </View>
                                                      </View>
                                                      )}  

                                                      {items.STATUS === "Accept" && (
                                                       <View style={[styles.box, { marginRight: 10 }]}>
                                                             <View style={styles.tiles}>
                                                                   <Typography size={14} bold >From : </Typography>
                                                                   <Typography size={14}>{items.FROM_LOCATION}</Typography>
                                                             </View>
                                                             <View style={styles.tiles}>
                                                                   <Typography size={14} bold>To : </Typography>
                                                                   <Typography size={14}>{items.TO_LOCATION}</Typography>
                                                             </View>
                                                             <View style={styles.tiles}>
                                                                   <Typography size={14} bold>Date : </Typography>
                                                                   <Typography size={14}>{items.ORDER_DATE}</Typography>
                                                             </View>
                                                             <View style={styles.tiles}>
                                                                   <Typography size={14} bold>Time : </Typography>
                                                                   <Typography size={14}>{items.Time}</Typography>
                                                             </View>
                                                            
                                                       </View>

                                                      )} 

                                                      {items.STATUS === "Accept" && (
                                                        <View style={[styles.box, { marginLeft: 10 }]}>
                                                             <View style={styles.tiles}>
                                                                   <Typography size={14} bold>Order no : </Typography>
                                                                   <Typography size={14}>{items.ORDER_NO}</Typography>
                                                             </View>
                                                             
                                                             <View style={styles.tiles}>
                                                                   <Typography size={14} bold>Vehicle No : </Typography>
                                                                   <Typography size={14}>{items.VEHICLE_NO}</Typography>
                                                             </View>
                                                             <View style={styles.tiles}>
                                                                   <Typography size={14} bold>Vehicle Type : </Typography>
                                                                   <Typography size={14}>{items.VEHICLE_TYPE}</Typography>
                                                             </View>
                                                             <View style={styles.tiles}>
                                                                   <Typography size={14} bold>Vehicle Size : </Typography>
                                                                   <Typography size={14}>{items.VEHICLE_SIZE}</Typography>
                                                             </View>
                                                       </View>
                                                      )}

                                                      {items.STATUS === "Reject" && (
                                                             <View style={[styles.box, { marginRight: 10 }]}>
                                                             <View style={styles.tiles}>
                                                                   <Typography size={14} bold >From : </Typography>
                                                                   <Typography size={14}>{items.FROM_LOCATION}</Typography>
                                                             </View>
                                                             <View style={styles.tiles}>
                                                                   <Typography size={14} bold>To : </Typography>
                                                                   <Typography size={14}>{items.TO_LOCATION}</Typography>
                                                             </View>
                                                             <View style={styles.tiles}>
                                                                   <Typography size={14} bold>Date : </Typography>
                                                                   <Typography size={14}>{items.ORDER_DATE}</Typography>
                                                             </View>
                                                             <View style={styles.tiles}>
                                                                   <Typography size={14} bold>Time : </Typography>
                                                                   <Typography size={14}>{items.Time}</Typography>
                                                             </View>
                                                            
                                                       </View>
 
                                                      )}
                                                      
                                                      {items.STATUS === "Reject" && (
                                                             <View style={[styles.box, { marginLeft: 10 }]}>
                                                             <View style={styles.tiles}>
                                                                   <Typography size={14} bold>Order no : </Typography>
                                                                   <Typography size={14}>{items.ORDER_NO}</Typography>
                                                             </View>
                                                             
                                                             <View style={styles.tiles}>
                                                                   <Typography size={14} bold>Vehicle No : </Typography>
                                                                   <Typography size={14}>{items.VEHICLE_NO}</Typography>
                                                             </View>
                                                             <View style={styles.tiles}>
                                                                   <Typography size={14} bold>Vehicle Type : </Typography>
                                                                   <Typography size={14}>{items.VEHICLE_TYPE}</Typography>
                                                             </View>
                                                             <View style={styles.tiles}>
                                                                   <Typography size={14} bold>Vehicle Size : </Typography>
                                                                   <Typography size={14}>{items.VEHICLE_SIZE}</Typography>
                                                             </View>
                                                       </View>

                                                      )}


                                                </View>
                                                {/* // )} */}

                                          </TouchableWithoutFeedback>:null}
                                          </>
                                    )
                              })}
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
      feilds: {
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10
      },
      input: {
            width: "60%",
            height: "5%"
      },
      tiles: {
            flexDirection: 'row',
            justifyContent: 'space-between'
      },
      box: {
            flex: 1
      },
      container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            marginTop: 10,
            padding: 5,
            borderWidth: 0.5,
            borderRadius: 5,
            paddingHorizontal: 10
      }
});

const mapStateToProps = state =>{
      return{
            orderDetails: state.bookingdetails.bookingdetails
      }
}

export default connect(mapStateToProps,{GetbookingDetails})(OrderDetail);