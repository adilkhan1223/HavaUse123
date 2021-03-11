import React from 'react'
import { View, Text, StyleSheet,Image, ScrollView,StatusBar } from 'react-native'
import Header from './src/components/Header';
import { Card, CardItem, Body, Icon, Row, Left, Right } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Button from './src/components/Button'

export default function App() {
  return (
    <ScrollView >
      <StatusBar barStyle="#FFF" />
      <Header  />
      <View  style={styles.logo}>
          <Image source={require('./issets/logopluss.png')} style={{height:hp('3%'), width:wp('60%')}} />
          </View>

          <View>
          <Card style={styles.card2}>
         
            <CardItem style={styles.carditem1}>
            <Image source={require('./issets/passport.png')} style={{ height:100, width:wp('50%')}} />
              
            </CardItem>
            <CardItem style={styles.cardtext1}>
              <Text style={{textAlign:'center', bottom:hp('4%')}}>Take a passport or ID to check{'\n'}your information</Text>
            </CardItem>

            <CardItem > 
              <Left>
                      <View style={styles.cardicon}>
                      <Image source={require('./issets/icon.png')}  />       
                      </View>
                      <View style={{marginLeft:wp('5%')}}>
                        <Text style={{fontWeight:'bold'}}>ID Verification</Text>
                        <Text style={{color:'#3FAD72'}}>Uploaded</Text>
                      </View>
              </Left>
              {/* <Body> */}
                      
              {/* </Body> */}
              <Right>
                      <View>
                        <Icon   style={{ fontSize: 30, color:"#3FAD72" }}  name="menu" />
                      </View>
              </Right>
            </CardItem>
         </Card>

          </View>


          <View>
          <Card style={styles.card2}>
         
            <CardItem style={styles.carditem2}>
            <Image source={require('./issets/user.png')}  />
              
            </CardItem>
            <CardItem style={styles.cardtext1}>
              <Text style={{textAlign:'center', bottom:hp('4%')}}>Selfie with your front camera{'\n'}to verify your identity</Text>
            </CardItem>


            <CardItem>
              <Left>
                      <View style={styles.cardicon}>
                      <Image source={require('./issets/Shape.png')}  />      
                      </View>
                      <View style={{marginLeft:wp('5%')}}>
                        <Text style={{fontWeight:'bold'}}>Selfie Verification</Text>
                        <Text style={{color:'#3FAD72'}}>Uploading...</Text>
                      </View>
              </Left>
              {/* <Body> */}
                      
              {/* </Body> */}
              
            </CardItem>
         </Card>

          </View>
          <View style={styles.button}>
              <Button title="Submit" /> 
          </View>


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  
  logo:
    {marginVertical:hp('4%'),
  alignSelf:"center"
  },
  card:{
    width:wp('90%'),
    alignSelf:'center',
    borderRadius:10,
    backgroundColor:'#FFF',
    // height:hp('35%'),
    justifyContent:'center',
    

    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

elevation: 0.5,
    
  },

  card2:{
    marginTop:hp('3%'),
    width:wp('90%'),
    alignSelf:'center',
    borderRadius:10,
    backgroundColor:'#FFF',
    borderColor:'transparent',
    // height:hp('35%'),
  
    
    

    shadowColor: '#FFF',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

elevation:8,
    
  },
  carditem1:{
    alignSelf:'center',
    bottom:hp('3%'),
    backgroundColor:'transparent'

  },
  carditem2:{
    alignSelf:'center',
 bottom:"7%",
    backgroundColor:'transparent'

  },
  cardtext1:{
    borderBottomWidth:0.50,
    justifyContent:'center',
    borderColor:'lightgrey',

  },
  cardicon:{
    backgroundColor:'#F8F8FA',
    height:60,
    width:60,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    alignItems:'center',
    marginVertical:hp('1%'),

    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
  }  
 
})
