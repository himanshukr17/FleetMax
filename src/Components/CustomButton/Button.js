import React from "react";
import { Button, ThemeProvider } from "react-native-elements";
import Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from "../../Config/theme"
import LinearGradient from "react-native-linear-gradient";
import Typography from "../typography"
const CustomButton = (props) => {

    let {
        style,
        next,
        title,
        onPress,
        type
    } = props

    return (


        <ThemeProvider theme={theme}>
            <TouchableOpacity onPress={onPress}>
                <LinearGradient colors={['#FCB50F', "#E5C477"]} style={[{ padding: 20, alignItems: 'center', paddingVertical: 12, borderRadius: 10 },{...style}]} useAngle={true} angle={15} angleCenter={{ x: 0.5, y: 0.5 }}>
                    <Typography size={20} type="extraBold">{title}</Typography>
                </LinearGradient>
            </TouchableOpacity>
        </ThemeProvider>
    )
};



const styles = StyleSheet.create({
    titleStyle: {
        fontFamily: "Nunito-Bold",
        fontSize: 22,
        color: theme.colors.textPrimary,

        // width: "100%",

    },
    conatinerStyle: {
        fontFamily: "Nunito-Bold",
        fontSize: 22,
        color: "#000000",

        // width: "100%",

    },
    conatinerStyle: {
        fontFamily: "Nunito-Bold",
        fontSize: 22,
        color: "#000000",

        // width: "100%",

    },
    titleStyleNext: {
        fontFamily: "Nunito-Bold",
        fontSize: 16,
        color: theme.colors.textPrimary,
        // width: "100%",
        paddingLeft: 28
    },
    disabledTitleStyle: {
        color: "grey"
    },
    buttonStyle: {
        // padding: 1,
        backgroundColor: "#385094",
        // marginBottom: 20,
        // color:theme.colors.white,
        // borderRadius:1,
        // width: "100%",
        // height:"35%"
    }
});
export default CustomButton;
