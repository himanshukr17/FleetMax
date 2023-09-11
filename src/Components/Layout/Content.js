import React from "react";
import { Button, ThemeProvider } from "react-native-elements";
import Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet, Text, Platform, View, ScrollView } from 'react-native';
import { theme } from "../../Config/theme"
const Content = (props) => {




  if (props.fixed) {
    return (
      <View style={[styles.contentFixed, props.style]}>
        {props.children}

      </View>
    )
  }
  else {
    return (


      <ScrollView contentContainerStyle={[styles.content, , props.style]}>
        {props.children}

      </ScrollView>
    )
  }
};



const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    backgroundColor: '#efeeee',
    ...Platform.select({
      ios: {
        padding: 14
      },
      android: {
        padding: 10
      }
    }),

    paddingTop: 0,
    flexDirection: 'column'
  },
  contentFixed: {
    flexGrow: 1,
    ...Platform.select({
      ios: {
        padding: 14
      },
      android: {
        padding: 24
      }
    }),
    paddingTop: 0,

  }
})



export default Content;
