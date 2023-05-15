import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import React, { Component } from 'react'

function Container(props) {
    
    return (

        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
            {props.children}
        </View>

    )
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: "100%",
        // alignItems : 'center'
    }
})
export default (Container)