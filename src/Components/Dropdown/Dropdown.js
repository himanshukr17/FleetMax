import React from 'react'
import RNPickerSelect from 'react-native-picker-select';
import { theme } from "../../Config/theme"
import Typography from "../typography"
import { StyleSheet, Text, View } from 'react-native';

export default function index(props) {
      return (
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                  <Typography type={"bold"} size={17} style={{ marginLeft: 9, marginBottom: 5 }} >{props.label}</Typography>
                  <View style={{ borderBottomColor: "#000000", borderBottomWidth: 0.6,backgroundColor:"#E1E1E1", width: "57%", marginRight: "3%", padding:12, paddingBottom:14 }}>
                        <RNPickerSelect
                              {...props}
                              // textInputProps={{fontColor:"#707070" }}
                              style={{
                                    ...pickerSelectStyles,
                                    placeholder: {
                                          color: "#707070",
                                          // alignItems:"center"
                                    },
                              }}
                        />
                  </View>

            </View>
      )
}

const pickerSelectStyles = StyleSheet.create({
      inputIOS: {
            fontSize: 12,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 4,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
      },
      inputAndroid: {
            fontSize: 12,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 0.5,
            // borderColor: 'purple',
            borderRadius: 8,
            // color: theme.colors.textPrimary,
            paddingLeft: 30, // to ensure the text is never behind the icon
            paddingRight: 30, // to ensure the text is never behind the icon
      },
});