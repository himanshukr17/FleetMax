import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

const footer = (props) => {
    return (
        <View style={props.actionButton ? styles.container : styles.normal}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // paddingLeft: 20,
        // paddingBottom: 10,
        // paddingRight: 20,
        backgroundColor: "#F6F6F9",
        left:0,
        bottom:-2,
        height:500,
        width:440,
    },
    normal: {
        backgroundColor: "#F6F6F9",
    }
})
export default (footer)