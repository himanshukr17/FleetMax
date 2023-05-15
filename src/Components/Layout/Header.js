import React from "react";
import { Button, ThemeProvider } from "react-native-elements";
import Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { theme } from "../../Config/theme"
const Header = (props) => {
  return (

    <View style={styles.header}>
      {props.children}

    </View>

  )
};



const styles = StyleSheet.create({
  header: {
    backgroundColor: "#728B9F",
    ...Platform.select({
      ios: {
        paddingTop: 20
      }
    })
  }
})



export default Header;
