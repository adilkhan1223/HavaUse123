import React,{useState} from 'react';
import { View, Text, Image, TextInput ,StyleSheet, SafeAreaView, ImageBackground,Dimensions, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';
import Button from './src/components/Button'
import { Icon} from 'native-base';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;




export default function Login() {
  const [password,setPassword] = useState("");
  const [showPass,setShowPass] = useState(false)
    return (
  
      <ImageBackground style={{width:width, height:height,flex:1}} source={require('./issets/backImage.png')} resizeMode = "contain">
      <SafeAreaView style={styles.contianer}>
          <View  style={{marginTop:hp('8%')}}>
          <Image source={require('./issets/Main.png')} />
          </View>

            <View style={styles.firsttext}>
            <Text>Please sign in to continue</Text>
            </View>

              <View style={styles.input1}>

                    <View style={styles.inputcontent}>
                      <Text style={styles.inputtext}>Email</Text>
                        <TextInput
                          
                          onChangeText={text => setPassword(text)}
                          placeholder="email@email.com"
                        />
                    </View>              
              </View>

              <View style={styles.input2}>

                      <View style={styles.inputcontent}>
                        <Text style={styles.inputtext}>Password</Text>
                          <TextInput
                            secureTextEntry={showPass}
                            onChangeText={text => setPassword(text)}
                            placeholder="password"
                            
                          />
                      </View>   
                      <TouchableOpacity onPress = {()=>setShowPass(!showPass)} style={{marginRight:wp('2.5%'), paddingTop:15}} >
                      {/* <Image source = {require('./issets/google.png')}/>   */}
                      <Icon name="eye"/>
                      </TouchableOpacity>         
               </View>



              <View>
                 <Text style={styles.textforgot}>Forgot Password?</Text>
              </View>

          <View style={styles.Button}>
                <Button title = "Login"/>
          </View>
                
              <View style={styles.registertext}>
                <Text>Don't have account? <Text style={{fontWeight:'bold', color:"#3FAD72"}}> Register</Text></Text>
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
  firsttext:{
    marginBottom:hp('3%')

  },
 
  Button:{
    marginTop:hp('3%')
  },
  input1:{
    height: hp('9%'),
    borderColor: '#a9a9a9', 
    borderWidth: 1 ,
    width:wp('90%'),
    borderRadius:12
  },

    input2:{
      height: hp('9%'),
      borderColor: 'gray', 
      borderWidth: 1 ,
      width:wp('90%'),
      borderRadius:12,
      marginTop:hp('1%'),
      flexDirection:"row",
      justifyContent:"space-between"
      },

  inputcontent:{
    marginVertical:hp('1%'),
    marginHorizontal:hp('1%')
    
    
  },
  inputtext:{
    fontWeight:'bold'
  },

  textforgot:{
    marginTop: hp('2%')
  },

  registertext:{

    marginTop: hp('2%')



  },

})
