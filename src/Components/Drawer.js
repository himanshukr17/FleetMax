import { StyleSheet, View } from 'react-native'
import { Icon, Divider } from 'react-native-elements';
import React, { Component } from 'react'
import Typography from '../Components/typography'
import { theme } from "../Config/theme"
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { Avatar } from 'react-native-elements';
// import { connect } from 'react-redux';



const Drawer = (props) => {
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
                                    <View style={{ marginLeft: 10, marginTop: 3 }}>

                                          <Typography size={14} color={"black"} style={{ marginTop: 8 }}>UserName</Typography>
                                    </View></View>
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

export default (Drawer)