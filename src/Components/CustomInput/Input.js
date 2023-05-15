import React from "react";
import { Input, ThemeProvider } from "react-native-elements";

import { StyleSheet, Text, View } from 'react-native';
import { theme } from "../../Config/theme"
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-paper';
const CustomInput = (props) => {

    let {
        style,
        next,
        icon

    } = props

    return (


        <ThemeProvider theme={theme}>
            <TextInput
            left={
                (icon&&<TextInput.Icon
                  icon={icon}
                  color="#22C55E"
                //   style={styles.leftIcon as StyleProp<ViewStyle>}
                //   size={responsiveFontSize(3)}
                />)
              }
                outlineStyle={styles.inputContainerStyle}
                // labelStyle={styles.labelStyle}
                // style={styles.container}
                // inputStyle={styles.inputStyle}
                // leftIconContainerStyle={styles.iconContainer}
                // rightIconContainerStyle={styles.iconContainer}
                activeOutlineColor="black"
                {...props}
            />
        </ThemeProvider>



    )
};



const styles = StyleSheet.create({
    inputContainerStyle: {
        fontFamily: "Nunito",
        // fontSize: 18,
        color: 'grey',
        backgroundColor:'white',
        borderWidth: 0.5,
        // width: "80%",
        // marginRight: 0,
        // paddingRight: 0,
        // marginBottom: 10,
        fontWeight: "normal",
        // borderBottomColor: theme.colors.borderColor,
    },
    inputStyle: {
        fontFamily: "Nunito-Regular",
        fontSize: 14,
        fontWeight: "normal",
        color: theme.colors.textPrimary,
    },
    container: {
        width: '98%',
        backgroundColor: 'white',
        borderRadius: 10,

    },

    iconContainer: {
        paddingRight: 10
    },

    labelStyle: {
        fontFamily: "Nunito-Bold",
        fontSize: 14,
        fontWeight: "normal",
        marginLeft: 0,
        lineHeight: 18,
        color: theme.colors.textPrimary
    }
    ,



});





export default CustomInput;
