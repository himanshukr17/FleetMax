import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Snackbar from "react-native-snackbar";
import Nav from "../../Components/Header/Nav";
import Container from "../../Components/Layout/Conatiner";
import Content from "../../Components/Layout/Content";
import Header from "../../Components/Layout/Header";
import Input from "../../Components/CustomInput/Input"
import Typography from "../../Components/typography"
import Button from "../../Components/CustomButton/Button";
import { Loginid } from "../../redux/actions/Loginid";
import { connect } from "react-redux";

const Login = (props) => {

    const [hide, sethide] = useState(true)
    // const[userid, setUserId] = useState('');
    const [userid, setUserId] = useState('')
    const[password, setPassword] = useState('');


    const HandelChangeid = (text) =>{
        // console.log("Id",text)
         setUserId(text)
    }


    const HandelChangepass = (text) =>{
        // console.log("password",text)
        setPassword(text)
    }


    const HandelSubmit = () =>{
     
         props.Loginid(userid,password).then(res=>{
            if(res="success"){
                Snackbar.show({
                    text:"Login Successfully",
                    backgroundColor:"green",
                    // duration:Snackbar.LENGTH_SHORT
                })
                props.navigation.navigate("Home");

            }
         }).catch(err=>{
            Snackbar.show({
                text:"Invalid id or password",
                backgroundColor:"red",
                // duration:Snackbar.LENGTH_SHORT,
            });
         })
         setUserId("");
         setPassword('');

    }


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
                    <Input placeholder="E-mail Address" mode='outlined' label='E-mail' icon="email-outline" onFocus={() => sethide(false)} onBlur={() => sethide(true)}  value={userid} onChangeText={HandelChangeid}/>
                    <Input placeholder="Password" mode='outlined' label='Password' secureTextEntry={true} icon="key-outline" style={{ marginTop: 10 }} onFocus={() => sethide(false)} onBlur={() => sethide(true)} value={password} onChangeText={HandelChangepass} />
                    <View style={{ alignItems: "center" }}> 
                        <Button
                            title="Login"
                            onPress ={ () =>{HandelSubmit()}}
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


const mapStateToProps = state =>{
    return{
          orderDetails: state.bookingdetails.bookingdetails
    }
}



export default connect(mapStateToProps,{Loginid})(Login);
