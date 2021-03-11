import React, {useState} from 'react'
import { View, Text,  Image, TextInput ,StyleSheet, SafeAreaView, Dimensions, TouchableOpacity ,ScrollView } from 'react-native';
import Button from './Button'
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';
import { Icon } from 'native-base';
const Registration =() => {
    const [password,setPassword] = useState("");
    const [showPass,setShowPass] = useState(true)
    return(

       
        <ScrollView>           
              <View style={styles.contianer}>

                <View style={styles.infotext}>
                  <Text style={{fontSize:17, color:'grey'}}>Personal Information</Text>
                </View>
                        <View style={styles.input1}>

                            <View style={styles.inputcontent}>
                              <Text style={styles.inputtext}>First Name</Text>
                                <TextInput
                                  
                                  onChangeText={text => setPassword(text)}
                                  placeholder="Alexander"
                                />
                            </View>              
                        </View>

                        <View style={styles.input1}>

                            <View style={styles.inputcontent}>
                              <Text style={styles.inputtext}>Last Name</Text>
                                <TextInput
                                  
                                  onChangeText={text => setPassword(text)}
                                  placeholder="Ben"
                                />
                            </View>              
                        </View>


                        


                        <View style={styles.input1}>

                            <View style={styles.inputcontent}>
                              <Text style={styles.inputtext}>Business Name</Text>
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
                            <TouchableOpacity onPress = {()=>setShowPass(!showPass)}>
                            <Icon type="FontAwesome" name="eye"  style={{fontSize: 20, marginHorizontal:10, marginVertical:20}}/> 
                            </TouchableOpacity>         
                         </View>

                         <View style={styles.infotext}>
                               <Text style={{fontSize:17, color:'grey'}}>Personal Information</Text>                          
                         </View>

                         <View style={styles.input1}>

                            <View style={styles.inputcontent}>
                              <Text style={styles.inputtext}> Country</Text>
                                <TextInput
                                  
                                  onChangeText={text => setPassword(text)}
                                  placeholder="Brazil"
                                />
                            </View>              
                        </View>

                        <View style={styles.input1}>

                            <View style={styles.inputcontent}>
                              <Text style={styles.inputtext}>City</Text>
                                <TextInput
                                  
                                  onChangeText={text => setPassword(text)}
                                  placeholder="Rao"
                                />
                            </View>              
                        </View>

                        <View style={styles.input1}>

                            <View style={styles.inputcontent}>
                              <Text style={styles.inputtext}>Street Address</Text>
                                <TextInput
                                  
                                  onChangeText={text => setPassword(text)}
                                  placeholder="Rio"
                                />
                            </View>              
                        </View>

                        <View style={styles.input1}>

                            <View style={styles.inputcontent}>
                              <Text style={styles.inputtext}>Postal Code</Text>
                                <TextInput
                                  
                                  onChangeText={text => setPassword(text)}
                                  placeholder="01000"
                                />
                            </View>              
                        </View>

                        <View style={styles.input1}>

                            <View style={styles.inputcontent}>
                              <Text style={styles.inputtext}>Phone Number</Text>
                                <TextInput
                                  
                                  onChangeText={text => setPassword(text)}
                                  placeholder="01000"
                                />
                            </View>              
                        </View>


                        <View style={styles.infotext}>
                               <Text style={{fontSize:17, color:'grey'}}>Your Choice</Text>                          
                         </View>

                      <View style={styles.input3}>
                            <View style={styles.inputcontent}>
                                     <Text style={styles.inputtext}>Tell Us What You Want to do</Text>
                                      <TextInput
                                          numberOfLines={5} 
                                            onChangeText={text => setPassword(text)}
                                            placeholder="01000"
                                      />
                              </View>
                      </View>


                      <Button title="Register" />

                      <View style={{justifyContent:'center', marginVertical:hp('2%'), marginHorizontal:hp('5%'),}}>
                        <Text style={{textAlign:'center'}}>By Signing in you agree with <Text style={{textDecorationLine:'underline'}}>Privacy Policy</Text> & <Text style={{textDecorationLine:'underline'}}>Terms of Services</Text></Text>
                      </View>


                      <View style={styles.signintext}>
                          <Text>
                              Already a member?  <Text>Sign in</Text>
                          </Text>
                      </View>
              </View>
              
              </ScrollView>
     
    )
}


const styles = StyleSheet.create({
    contianer:{
      justifyContent:'center',
      
      backgroundColor:"#FFF",
      marginHorizontal:wp('3%')  
  
    },
    infotext:{
      marginVertical:hp('1%'),
      alignItems:'flex-start',
      
    },
    input1:{
      height: hp('9%'),
      borderColor: '#a9a9a9', 
      borderWidth: 1 ,
      width:wp('93%'),
      borderRadius:12,
      alignSelf:'center',
      marginVertical:hp('0.7%'),
     
    },
    inputcontent:{
      marginVertical:wp('2%'),
      marginHorizontal:hp('2%')
      
      
    },
    inputtext:{
      fontWeight:'bold',
     
    },
    input2:{
      height: hp('9%'),
      borderColor: 'gray', 
      borderWidth: 1 ,
      width:wp('93%'),
      borderRadius:12,
      marginTop:hp('1%'),
      flexDirection:"row",
      justifyContent:"space-between"
      },
  
    input3:{
      height: hp('25%'),
      borderColor: '#a9a9a9', 
      borderWidth: 1 ,
      width:wp('93%'),
      borderRadius:12,
      alignSelf:'center',
      marginVertical:hp('0.7%'),
      marginBottom:hp('2%')
     
    },
    signintext:{
        alignItems:'center'
    }
    
   
  
  })


  export default Registration;
