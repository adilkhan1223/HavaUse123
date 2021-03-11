
import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ImageBackground,Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';
import Button from './src/components/Button'
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;




export default function Continue() {
    return (
  
           <ImageBackground style={{width:width, height:height,flex:1}} source={require('./issets/backImage.png')} resizeMode = "contain">
                   <SafeAreaView style={styles.contianer}>
          <View  style={{marginTop:hp('8%')}}>
            <Image source={require('./issets/Main.png')} />
          </View>
            <Text style={styles.text}>Please sign in to continue</Text>
            <Button title = "Sign up with Email"/>

            <View style={styles.textcontianer}> 
                    <View style={styles.text2}>
                      <Text>Sign up as a <Text style={{color:'#3FAD72', fontWeight:'bold', fontSize:17}}> Driver</Text></Text>
                    </View>

                    <View style={styles.text2}>
                      <Text>Already a user? <Text style={{color:'#3FAD72', fontWeight:'bold', fontSize:17}}> Log In</Text></Text>
                    </View>
            </View>
                    <View style={styles.text2}>
                      <Text>Continue with</Text>
                    </View>

                   
                    <View style={styles.loginImage}>
                      <View style={{flexDirection:'row', justifyContent:'space-evenly',width:width/2 }} >
                        <View ><Image  source={require('./issets/facebook.png')} /></View> 

                        <View  style={{}}><Image  source={require('./issets/google.png')} /></View> 

                        <View><Image  source={require('./issets/apple.png')} /></View> 

                      </View>
                      
                    </View>
                    </SafeAreaView>
                    </ImageBackground>


          


    )
}

const styles = StyleSheet.create({
  contianer:{
    
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#FFF"

  },
  textcontianer:{
    alignItems:"center"

  },
  text:{
    marginVertical: hp('4%')
  },
  text2:{
    marginTop: hp('1%'),

  },


  loginImage:{
    marginTop: hp('1%')

  }

})
