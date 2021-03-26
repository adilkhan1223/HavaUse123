import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import {  Header, Left, Icon, Center, Right, Body } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';
import Button from '../../components/Button'



const ContactSupport =()=> {
    return (
        <View>
            <Header style={{backgroundColor:'transparent', elevation:0, borderBottomWidth:1, borderBottomColor:'lightgrey'}}>
                <Left style={{flex:0.3}}>
                    <Icon name='arrow-back' />
                </Left>
                <Body style={{width:'80%', alignItems:'center'}}>
                    <Text>Support</Text>

                </Body>
                <Right style={{flex:0.3}}>
                    
                </Right>

            </Header>

            <View style={{marginHorizontal:wp('3%')}}>
                    <View style={{marginTop:hp('2%')}}>
                        <Text style={{fontWeight:'bold', fontSize:16}}>
                            Or Write us your queries
                        </Text>

                        <Text style={{marginTop:hp('1%'), color:'#686565'}}>Your words mean a lot to us.</Text>
                    </View>

                    <View>
                        <View style={{marginTop:hp('2%')}}>
                            <Text style={{fontSize:13,  color:'#686565'}}>
                            Enter your name
                            </Text>
                        </View>
                        <View style={styles.input1}>
                            <TextInput 
                              style={{paddingLeft:10, width:wp('93%')}} 
                              placeholder='Christie Cheyne'                           
                            />
                        </View>
                    </View>

                    <View>
                        <View style={{marginTop:hp('2%')}}>
                            <Text style={{fontSize:13,  color:'#686565'}}>
                            Enter your phone number
                            </Text>
                        </View>
                        <View style={styles.input2}>
                            <View>
                                <Text>Check</Text>
                            </View>
                            <TextInput 
                              style={{paddingLeft:10, width:wp('73%')}} 
                              placeholder='Christie Cheyne'                           
                            />
                        </View>
                    </View>

                    <View>
                        <View style={{marginTop:hp('2%'),  color:'#686565'}}>
                            <Text style={{fontSize:13}}>
                            Enter Email
                            </Text>
                        </View>
                        <View style={styles.input1}>
                            <TextInput 
                              style={{paddingLeft:10, width:wp('93%')}} 
                              placeholder='email@email.com'                           
                            />
                        </View>
                    </View>

                    <View>
                        <View style={{marginTop:hp('2%')}}>
                            <Text style={{fontSize:13,  color:'#686565'}}>
                            Message
                            </Text>
                        </View>
                        <View style={styles.input4}>
                            <TextInput 
                             multiline={true}
                              style={{paddingLeft:10, width:wp('93%')}} 
                              placeholder='Christie Cheyne'                           
                            />
                        </View>
                    </View>

                    <View style={{marginTop:hp('4%'), alignItems:'center'}}>
                        <Button title="Submit"  />
                    </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    input1:{
        marginTop:hp('1%'),
        width:wp('93%'),
        borderWidth:1,
        borderRadius:10,
        borderColor:'#EAEAEA',
        height:hp('7%'),
        justifyContent:'center'
    },
    input2:{
        flexDirection:'row',
        marginTop:hp('1%'),
        width:wp('93%'),
        borderWidth:1,
        borderRadius:10,
        borderColor:'#EAEAEA',
        height:hp('7%'),
        justifyContent:'center',
        alignItems:'center'
    },
    input4:{
        marginTop:hp('1%'),
        width:wp('93%'),
        borderWidth:1,
        borderRadius:10,
        borderColor:'#EAEAEA',
        height:hp('20%'),
    }


})

export default ContactSupport;
