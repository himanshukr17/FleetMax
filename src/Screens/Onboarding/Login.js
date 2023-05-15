import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Nav from "../../Components/Header/Nav";
import Container from "../../Components/Layout/Conatiner";
import Content from "../../Components/Layout/Content";
import Header from "../../Components/Layout/Header";
import Input from "../../Components/CustomInput/Input"
import Typography from "../../Components/typography"
import Button from "../../Components/CustomButton/Button";
const Login = (props) => {

    const [hide, sethide] = useState(true)


    return (
        <Container>
            <Content>

                {hide && <Image source={require('../../Asets/box.png')} style={styles.backgroundImage} />}
                {hide && <Image source={require('../../Asets/man3.png')} style={{ position: 'absolute', top: 0, right: -28, flex: 1, width: "40%", height: "19%", opacity: 1 }} />}
                {hide && <Image source={require('../../Asets/man.png')} style={{ position: 'absolute', bottom: -8, left: '15%', flex: 1, width: "80%", height: "25%", opacity: 1 }} />}
                <View style={styles.input}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20, alignContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 70 }}>
                            <Image source={require('../../Asets/applogo.png')} style={{ width:170,top:-550,resizeMode:"contain"}} />
                        </View>
                    </View>
                    <Input placeholder="E-mail Address" mode='outlined' label='E-mail' icon="email-outline" onFocus={() => sethide(false)} onBlur={() => sethide(true)} />
                    <Input placeholder="Password" mode='outlined' label='Password' secureTextEntry={true} icon="key-outline" style={{ marginTop: 10 }} onFocus={() => sethide(false)} onBlur={() => sethide(true)} />
                    <View style={{ alignItems: "center" }}>
                        <Button
                            title="Login"
                            onPress={() => props.navigation.navigate("Home")}
                            style={{ marginTop: 15, width: '80%' }}
                        />
                    </View>
                </View>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    input: {
        justifyContent: 'center',
        // marginTop:'70%'
        // position:'absolute',
        top: '35%',
    },
    backgroundImage: {
        position: 'absolute',
        top: -10,
        left: -55,
        flex: 1,
        // bottom: 0,
        // right: 0,
        width: "40%",
        height: "19%",
        opacity: 1
    },
})

export default (Login);