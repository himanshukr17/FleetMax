import React from "react";
import { Input, ThemeProvider } from "react-native-elements";
import { SearchBar, Header } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import Typography from "../typography";
import { theme } from "../../Config/theme"
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
const Nav = (props) => {

  const navigation = useNavigation();

  return (
    <ThemeProvider theme={theme}>
      <View style={{ borderBottomLeftRadius: 20 }}>
        <Header
          leftComponent={<View style={{ flexDirection: 'row', width: '400%', alignItems: 'center', marginTop: '10%'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}><Icon onPress={() =>
              navigation.goBack()
            }
              name="chevron-left" type={"feather"} size={32} style={{ marginLeft: 10 }} color={"black"} />

            </View>
            <View style={{ marginLeft: 10 }}>
              {props.title && <Typography size={21} type={"extraBold"} color={"black"}>
                {props.title}
              </Typography>}</View>
          </View>
          }
          statusBarProps={{
            backgroundColor: "#ffb300",
            barStyle: "dark-content",
            hidden: false,

          }}
          containerStyle={{
            backgroundColor: '#ffb300',
            //  borderBottomWidth:0,
            justifyContent: 'center',
            // borderWidth: 1,
            marginBottom: -1,
            // borderBottomLeftRadius:20,
            // borderBottomRightRadius:20,
            // width:'90%',
            //  padding:5,
            // justifyContent:'flex-start',
            alignItems: "center",
            paddingTop: 0,
            // flex:0.5,
            // height:49,
            ...props.style

          }}
          {...props}
        />
        {/* {props.title&&   <Typography
          size={24}
          style={{paddingLeft: 34,marginTop:0,paddingTop:0}}
          type={'bold'}
          color={'textPrimary'}>
         {props.title}
        </Typography>} */}
      </View>
    </ThemeProvider>
  )
};



const styles = StyleSheet.create({});

export default Nav;
