import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import Nav from '../../Components/Header/Nav';
import Container from '../../Components/Layout/Conatiner';
import Content from '../../Components/Layout/Content';
import Header from '../../Components/Layout/Header';
import Typography from '../../Components/typography';
import {Icon} from 'react-native-elements';
import LottieAnimation from 'lottie-react-native';
import {Avatar, Divider, Overlay} from 'react-native-elements';
import {GetbookingDetails} from '../../redux/actions/GetbookingDetails';
import {GetBookingstatus} from '../../redux/actions/GetBookingstatus';
import {connect} from 'react-redux';
import moment from 'moment';

const Transporter = props => {
  data = props.renderdata;
 

  const [menloop, setmenloop] = useState(1);
  const [lastweekdate, setLastWeek] = useState([]);
  const [lastmonthdate, setLastMonth] = useState([]);
  const [allmonthdata, setAllmonthdata] = useState([]);
  // console.log("al data-------->",allmonthdata);
  // console.log("weekorder------>",lastweekdate);
  // console.log("monthdata----->>>",lastmonthdate);


  useEffect(() => {
    const emptydata = [];
    const emptymonth = [];
    const emptyalldata = [];
    const currentdate = new Date();

    const lastwdate = new Date();
    lastwdate.setDate(currentdate.getDate() - 7);

    const lastmdate = new Date();
    lastmdate.setMonth(currentdate.getMonth() - 1);

    {
      data.map((item, index) => {
        const [datePart, timePart] = item.ORDER_DATE.split(' '); // Split date and time parts
        const [day, month, year] = datePart.split('-'); // Split day, month, year
        const [hour, minute, second] = timePart.split(':');
        apidate = new Date(year, month - 1, day, hour, minute, second);

        if (new Date(apidate) >= new Date(lastwdate)) {
          const setdate = item;
          emptydata.push(setdate);
          emptymonth.push(setdate);
          emptyalldata.push(setdate);
        } else if (new Date(apidate) >= new Date(lastmdate)) {
          const setmonth = item;
          emptymonth.push(setmonth);
          emptyalldata.push(setmonth);
        } 
        else {
          const alldata = item;
          emptyalldata.push(alldata);
        }
      }); 
    }

    setLastWeek(emptydata);
    setLastMonth(emptymonth);
    setAllmonthdata(emptyalldata);
  }, [data]);

 

  const [dashboardata, setdashboardata] = useState([
    {Acceptweek: 0, Pendingweek: 0, Rejectweek: 0},
    {Acceptmonth: 0, Pendingmonth: 0, Rejectmonth: 0},
    {Acceptallmonth: 0, Pendingallmonth: 0, Rejectallmonth: 0},
  ]);
  const [ dashboardlength , setDashboardlength] = useState();
  // console.log(dashboardlength.acceptweek);


  useEffect(() => {
    function functio(array, StatusToFInd) {
      return array.filter(obj => obj.STATUS === StatusToFInd);
    }
   
    const Acceptweek = functio(lastweekdate, 'Accept');
    const Acceptmonth = functio(lastmonthdate, 'Accept');
    const Acceptallmonth = functio(allmonthdata, 'Accept');
    // const acceptallmonth = length(Acceptallmonth);
    
    const Pendingweek = functio(lastweekdate, 'Pending');
    const Pendingmonth = functio(lastmonthdate, 'Pending');
    const Pendingallmonth = functio(allmonthdata, 'Pending');
   
    const Rejectweek = functio(lastweekdate, 'Reject');
    const Rejectmonth = functio(lastmonthdate, 'Reject');
    const Rejectallmonth = functio(allmonthdata, 'Reject');
    
    setdashboardata([{Acceptweek: Acceptweek, Pendingweek: Pendingweek, Rejectweek: Rejectweek},
      {Acceptmonth: Acceptmonth, Pendingmonth: Pendingmonth, Rejectmonth: Rejectmonth},
      {Acceptallmonth: Acceptallmonth, Pendingallmonth: Pendingallmonth, Rejectallmonth: Rejectallmonth}])

      function length(array){
        return(
          array.length
        )
      }
      setDashboardlength({
        acceptweek: length(Acceptweek),
        acceptmonth: length(Acceptmonth),
        acceptallmonth: length(Acceptallmonth),
        pendingweek: length(Pendingweek),
        pendingmonth: length(Pendingmonth),
        pendingallmonth: length(Pendingallmonth),
        rejectweek: length(Rejectweek),
        rejectmonth: length(Rejectmonth),
        rejectallmonth: length(Rejectallmonth),     
     })     
  }, [lastweekdate]);

  console.log("dashboard------->>>>>>>",dashboardata[0].Acceptweek)

  const mentrigger = () => {
    let i = menloop;
    if (menloop < 1) {
      setmenloop(i + 1);
    }
  };
  const menref = React.useRef();
  useEffect(() => {
    if (menref.current) {
      menref.current?.play();
    }
  }, [menloop]);

  // console.log("console kara krrrr---------->>>>>>>>>",dashboardata[0].Acceptweek);

  return (
    <>
      <Container>
        <Header>
          <Nav
            leftComponent={
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  width: '400%',
                  alignItems: 'center',
                  marginTop: '10%',
                }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <LottieAnimation
                    source={require('../../Asets/Loader/back.json')}
                    loop={false}
                    speed={1}
                    ref={menref}
                    onAnimationFinish={mentrigger}
                    autoPlay={false}
                    style={{
                      width: 100,
                      height: 27,
                      marginBottom: -10,
                      marginTop: -2,
                    }}
                  />
                </TouchableOpacity>
                <View>
                  <Typography
                    type="bold"
                    style={{marginTop: 5, marginLeft: 7}}
                    size={19}>
                    Transporter Dashboard
                  </Typography>
                </View>
              </View>
            }
          />
        </Header>
        <Divider
          style={{backgroundColor: 'black', height: 0.2, marginLeft: -3}}
        />
        <Content style={{paddingTop: 10}}>
          <View style={{alignSelf: 'center'}}>
            <Typography
              size={18}
              type="extraBold"
              style={{
                textDecorationLine: 'underline',
                fontStyle: 'italic',
                marginTop: '5%',
              }}>
              Last Week Orders
            </Typography>
          </View>
        
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() =>
                  // props.navigation.navigate('OrderDetail', 'Accept')
                  props.navigation.navigate('OrderDetail',{CLICKED_DATA: dashboardata[0].Acceptweek})
                }>
                <Typography
                  size={18}
                  color="green"
                  type="extraBold"
                  style={{alignSelf: 'center', paddingTop: 20}}>
                  Accepted
                </Typography>
                <Typography
                  size={15}
                  style={{alignSelf: 'center', paddingBottom: 20}}>
                   {dashboardlength?.acceptweek}
                </Typography>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('OrderDetail', {CLICKED_DATA: dashboardata[0].Pendingweek})
                }>
                <Typography
                  size={18}
                  color="yellow"
                  type="extraBold"
                  style={{alignSelf: 'center', paddingTop: 20}}>
                  Pending
                </Typography>
                <Typography
                  size={15}
                  style={{alignSelf: 'center', paddingBottom: 20}}>
                  {dashboardlength?.pendingweek}
                  
                </Typography>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('OrderDetail', {CLICKED_DATA: dashboardata[0].Rejectweek})
                }>
                <Typography
                  size={18}
                  color="red"
                  type="extraBold"
                  style={{alignSelf: 'center', paddingTop: 20}}>
                  Rejected
                </Typography>
                <Typography
                  size={15}
                  style={{alignSelf: 'center', paddingBottom: 20}}>
                  {dashboardlength?.rejectweek}
                </Typography>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{alignSelf: 'center'}}>
            <Typography
              size={18}
              type="extraBold"
              style={{
                textDecorationLine: 'underline',
                fontStyle: 'italic',
                marginTop: '2%',
              }}>
              Last Month Orders
            </Typography>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('OrderDetail', {CLICKED_DATA: dashboardata[1].Acceptmonth})
                }>
                <Typography
                  size={18}
                  color="green"
                  type="extraBold"
                  style={{alignSelf: 'center', paddingTop: 20}}>
                  Accepted
                </Typography>
                <Typography
                  size={15}
                  style={{alignSelf: 'center', paddingBottom: 20}}>
                  {/* {dashboardlength?.Acceptmonth} */}
                  {dashboardlength?.acceptmonth}
                </Typography>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('OrderDetail', {CLICKED_DATA:dashboardata[1].Pendingmonth})
                }>
                <Typography
                  size={18}
                  color="yellow"
                  type="extraBold"
                  style={{alignSelf: 'center', paddingTop: 20}}>
                  Pending
                </Typography>
                <Typography
                  size={15}
                  style={{alignSelf: 'center', paddingBottom: 20}}>
                  {dashboardlength?.pendingmonth}
                </Typography>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('OrderDetail',{CLICKED_DATA:dashboardata[1].Rejectmonth})
                }>
                <Typography
                  size={18}
                  color="red"
                  type="extraBold"
                  style={{alignSelf: 'center', paddingTop: 20}}>
                  Rejected
                </Typography>
                <Typography
                  size={15}
                  style={{alignSelf: 'center', paddingBottom: 20}}>
                  {dashboardlength?.rejectmonth}
                </Typography>
              </TouchableOpacity>
            </View>
          </View>

          {/* <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                    <View style={styles.card}>
                                          <TouchableOpacity>
                                                <Typography size={18} color="red" type="extraBold" style={{ alignSelf: "center", paddingTop: 20 }}>Rejected</Typography>
                                                <Typography size={15} style={{ alignSelf: "center", paddingBottom: 20 }}>30</Typography>
                                          </TouchableOpacity>

                                    </View>
                              </View> */}

          <View style={{alignSelf: 'center'}}>
            <Typography
              size={18}
              type="extraBold"
              style={{
                textDecorationLine: 'underline',
                fontStyle: 'italic',
                marginTop: '5%',
              }}>
              All Orders
            </Typography>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('OrderDetail', {CLICKED_DATA: dashboardata[2].Acceptallmonth})
                }>
                <Typography
                  size={18}
                  color="green"
                  type="extraBold"
                  style={{alignSelf: 'center', paddingTop: 20}}>
                  Accepted
                </Typography>
                <Typography
                  size={15}
                  style={{alignSelf: 'center', paddingBottom: 20}}>
                  {dashboardlength?.acceptallmonth}
                </Typography>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('OrderDetail', {CLICKED_DATA: dashboardata[2].Pendingallmonth })
                }>
                <Typography
                  size={18}
                  color="yellow"
                  type="extraBold"
                  style={{alignSelf: 'center', paddingTop: 20}}>
                  Pending
                </Typography>
                <Typography
                  size={15}
                  style={{alignSelf: 'center', paddingBottom: 20}}>
                  {dashboardlength?.pendingallmonth}
                </Typography>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('OrderDetail',{CLICKED_DATA: dashboardata[2].Rejectallmonth})
                }>
                <Typography
                  size={18}
                  color="red"
                  type="extraBold"
                  style={{alignSelf: 'center', paddingTop: 20}}>
                  Rejected
                </Typography>
                <Typography
                  size={15}
                  style={{alignSelf: 'center', paddingBottom: 20}}>
                  {dashboardlength?.rejectallmonth}
                </Typography>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    ...Platform.select({ios: {width: 100}, android: {width: 125}}),
    backgroundColor: 'white',
    borderRadius: 15,
    paddingTop: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 20, height: 30},
    shadowOpacity: 25,
    shadowRadius: 30,
    marginTop: 20,
    alignSelf: 'center',
    marginLeft: 6,
    // marginRight:10,
    justifyContent: 'space-around',
  },
});

const mapStateToProps = state => {
  return {
    renderdata: state.bookingdetails.bookingdetails,
    //   statusdata : state.Bookingstatus.Bookingstatus
  };
};

export default connect(mapStateToProps, {GetbookingDetails})(Transporter);
