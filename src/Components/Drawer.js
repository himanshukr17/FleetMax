import { StyleSheet, View } from 'react-native'
import { Icon, Divider } from 'react-native-elements';
import { LogOut } from 'react-native-feather';
import React, { Component,useEffect,useState } from 'react'
import Typography from '../Components/typography'
import { theme } from "../Config/theme"
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { Loginid } from '../redux/actions/Loginid';
import { logout } from '../redux/actions/Loginid'
// import { logout } from '../redux/actions/Loginid';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



const Drawer = (props) => {

      const navigation = useNavigation();
      // let data = props.userdata;
      // console.log("newdataaaaaa",data.Items[0].USER_NAME)

      const[iddata ,setIdData] = useState([])

      useEffect(()=>{
           if(props.userdata){
            setIdData(props.userdata.Items[0])
           }
      },[props.userdata])
      // console.log("statedataaaa",iddata.USER_NAME)
      // const logout = ()=>{
            // props.userdata.Items[0].USER_NAME="";
            // props.navigation.navigate("Login")
            // props.logout()
             
      // }

      // useEffect(()=>{
      //       logout();
      // },[]);

      return (
            <DrawerContentScrollView {...props}>
                  <View>
                        <View style={[styles.AvatarView, { backgroundColor: '#ffb300', marginBottom: 5 }]}>
                              <View style={{ marginTop: "7%", flexDirection: 'row', marginBottom: "5%", marginLeft: 10 }}>
                                    <Avatar
                                                rounded
                                                borderRadius={150 / 2}
                                                borderWidth={1}
                                                borderColor={"white"}
                                                size={40}
                                                source={require('../Asets/profile.jpg')}
                                          />
                                            {/* <View style={{ marginLeft: 10, marginTop: 3 }}>

                                              <Typography size={14} color={"black"} style={{ marginTop: 8 }}>UserName</Typography>
                                                
                                                </View> */}



                                                {/* {iddata.map((item,index)=>{
                                                      return(
                                                            <View style={{ marginLeft: 10, marginTop: 3 }}>

                                                            <Typography size={14} color={"black"} style={{ marginTop: 8 }}>{item.USER_NAME}</Typography>
                                                              
                                                              </View>
                                                      )
                                                })}  */}

                                                <View style={{ marginLeft: 10, marginTop: 3 }}>
                                                 <Typography size={14} color={"black"} style={{ marginTop: 8 }}>{iddata.USER_NAME}</Typography> 

                                                </View>

                                    </View>
                        </View>

                        <DrawerItem
                              icon={({ focused, color, size }) => <Icon color={"#210635"} size={30} name='truck' type={"feather"} />}
                              style={{ marginTop: 5 }}
                              labelStyle={{ fontSize: 16, marginLeft: -10, fontFamily: "Nunito", color: theme.colors.textTertiary }}
                              label="Gate Process"
                              onPress={() => props.navigation.navigate("Gate")}
                        />
                        <Divider style={{ backgroundColor: "black", height: 0.4, marginLeft: -3 }} />

                        <DrawerItem
                              icon={({ focused, color, size }) => <Icon color={"#210635"} size={30} name='check-square' type={"feather"} />}
                              style={{ marginTop: 5 }}
                              labelStyle={{ fontSize: 16, marginLeft: -10, fontFamily: "Nunito", color: theme.colors.textTertiary }}
                              label="Get an order"
                              onPress={() => props.navigation.navigate("GetOrder")}
                        />
                        <Divider style={{ backgroundColor: "black", height: 0.4, marginLeft: -3 }} />

                        <DrawerItem
                              icon={({ focused, color, size }) => <Icon color={"#210635"} size={30} name='happy-outline' type={"ionicon"} />}
                              style={{ marginTop: 5 }}
                              labelStyle={{ fontSize: 16, marginLeft: -10, fontFamily: "Nunito", color: theme.colors.textTertiary }}
                              label="Complete Order"
                              onPress={() => props.navigation.navigate("CompOrder")}
                        />
                        <Divider style={{ backgroundColor: "black", height: 0.4, marginLeft: -3 }} />
                      {/* <TouchableOpacity  onPress={()=> { props.logout() } }> */}
                      <TouchableOpacity   onPress={()=>{props.logout()}}>
                        <View style={{flexDirection:'row',marginLeft:"8%",marginTop: "4%", marginBottom:"4%" }}>
                        <LogOut width={32} height={32} color="black"/>
                        <Typography style={{marginLeft:"6%"}}size={16} color={"black"} >Logout</Typography>
                        </View>                        
                      </TouchableOpacity>
                      
                        <Divider style={{ backgroundColor: "black", height: 0.4, marginLeft: -3 }} />

                  </View>
            </DrawerContentScrollView>
      )
}

const styles = StyleSheet.create({
      AvatarView: {
            flex: 1,
            width: "100%",
            flexDirection: 'row',
            justifyContent: "center",
            justifyContent: 'flex-start',
            // marginLeft: 10,
            marginTop: -10,
            marginBottom: -10,
            alignItems: "center",
      },
})

const mapStateToProps = (state)=>{
      return{
            userdata : state.logindata.logindata
      }
}

export default connect(mapStateToProps,{Loginid,logout})(Drawer)
