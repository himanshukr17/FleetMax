import React from "react";
import { Button, ThemeProvider } from "react-native-elements";
import Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from "./../Config/theme"
const Typography = (props) => {

    let {
        style,
        type,
        bold,
        size,
        color,
        colour
    } = props

    let font = {
        bold: "Nunito-Bold",
        semiBold: "Nunito-SemiBold",
        regular: "Nunito",
        thin: "Nunito-Thin",
        light: "Nunito-Light",
        extraBold: "Nunito-ExtraBold",
        medium: "Nunito-Medium",
        italic: "Nunito-BoldItalic",
        cursive:'cursive'
    }

    return (
        <ThemeProvider theme={theme}>
            <Text style={
                {
                    ...props.style,

                    fontFamily: font[type],
                    fontWeight: bold ? "bold" : "normal",
                    color: colour?colour:theme.colors[color],
                    fontSize: size,
                }
            }>
                {props.children}
            </Text>
        </ThemeProvider>
    )
};

Typography.defaultProps = {
    style: {},
    size: 12,
    color: "textTertiary",
    type: "regular",
    bold: false,
}


export default Typography;
