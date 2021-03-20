import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {  Header, Left, Icon, Center, Right, Body } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const MyProfile=()=> {
    return (
        <View>
                <Header style={{backgroundColor:'transparent', elevation:0, borderBottomWidth:1,
                                borderBottomColor:'lightgrey'
                                }}>
                    <Left style={{flex:0.3}}>
                        
                    </Left>
                    <Body style={{width:'80%', alignItems:'center'}}>
                        <Text>My Profile</Text>

                    </Body>
                    <Right style={{flex:0.3}}>
                        <Icon name='shopping-outline' type="MaterialCommunityIcons" />        
                    </Right>

                </Header>
        {/* ******** */}
            <View style={{marginTop:hp('3%'),}}>
            {/* ********* */}
                    <View style={{flexDirection:'row', marginHorizontal:wp('3%')}}>
                        <View style={styles.imagecontainer}>
                            <View><Image style={styles.userImage} source={require('../../../issets/userr.png')} /></View>
                            <TouchableOpacity style={styles.camerabutton}>
                                <Icon style={{color:'#fff', fontSize:15}} name="camera" type="SimpleLineIcons" />
                            </TouchableOpacity>
                        </View>

                        <View style={{paddingLeft:20}}>
                            <Text style={{fontWeight:'bold', fontSize:20}}>Dennis Watkins</Text>
                            <Text style={{color:'grey', marginVertical:hp('1%')}}>DennisWatkins@gmail.com</Text>
                            <TouchableOpacity style={styles.editbutton}>
                                <Text style={{color:'#3FAD72'}}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            {/* End of Profile portion */}
                    <View style={{marginTop:hp('3%'), marginHorizontal:wp('3%')}}>
                        {/* Delivery Location */}
                        <View>
                            <Text style={{fontWeight:'bold', fontSize:15}}>GENERAL</Text>
                        </View>
                        <View style={styles.row1}>
                            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                                
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <Icon style={{color:'#3FAD72'}} name='location-pin' type="SimpleLineIcons" />
                                    <View style={{paddingLeft:10}}>
                                        <Text>Delivery Locations</Text>
                                        <Text style={{color:'grey', fontSize:13}}>7306 Madisyn Manors Suite 387</Text>
                                    </View>
                                </View>
                                    
                                <View>
                                    <Icon style={{color:'grey', fontSize:20}} name="right" type="AntDesign" />
                                </View>   
                            </View>
                        </View>
                        {/* Profile */}

                        <View style={styles.row2}>
                            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                                
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <Icon style={{color:'#3FAD72'}} name='user' type='AntDesign' />
                                    <View style={{paddingLeft:10}}>
                                        <Text>Profile</Text>
                                        <Text style={{color:'grey', fontSize:13}}>Manage Your Profile</Text>
                                    </View>
                                </View>
                                    
                                <View>
                                    <Icon style={{color:'grey', fontSize:20}} name="right" type="AntDesign" />
                                </View>   
                            </View>
                        </View>
                        {/* ********* */}
                    </View>
                        {/* ******** */}
                        {/* My Orders */}

                        <View style={styles.row3}>
                            <View style={{flexDirection:'row',
                                         justifyContent:'space-between',
                                          alignItems:'center', marginHorizontal:wp('3%')}}>
                                
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <Icon style={{color:'#3FAD72'}} name='box' type="Feather" />
                                    <View style={{paddingLeft:10}}>
                                        <Text>My Orders</Text>
                                        <Text style={{color:'grey', fontSize:13}}>Manage Your orders</Text>
                                    </View>
                                </View>
                                    
                                <View>
                                    <Icon style={{color:'grey', fontSize:20}} name="right" type="AntDesign" />
                                </View>   
                            </View>
                        </View>
                    </View>
            {/* ********* ********** */}
            <View style={{marginHorizontal:wp('3%'), marginTop:hp('0.5%')}}>
                    <View>
                        <Text style={{fontWeight:'bold', fontSize:15}}>ACCOUNT</Text>
                    </View>

                       <View style={styles.row4}>
                            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                                
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <Icon style={{color:'#3FAD72'}} name='notifications-none' type="MaterialIcons" />
                                    <View style={{paddingLeft:10}}>
                                        <Text>Notifications</Text>
                                    </View>
                                </View>
                                    
                                <View>
                                    <Icon style={{color:'grey', fontSize:20}} name="right" type="AntDesign" />
                                </View>   
                            </View>
                        </View>
                        {/* Privacy */}
                        <View style={styles.row4}>
                            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                                
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <Icon style={{color:'#3FAD72'}} name='lock' type="SimpleLineIcons" />
                                    <View style={{paddingLeft:10}}>
                                        <Text>Privacy</Text>
                                    </View>
                                </View>
                                    
                                <View>
                                    <Icon style={{color:'grey', fontSize:20}} name="right" type="AntDesign" />
                                </View>   
                            </View>
                        </View>
                        {/* Setting */}

                        <View style={styles.row5}>
                            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                                
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <Icon style={{color:'#3FAD72'}} name='settings' type="SimpleLineIcons" />
                                    <View style={{paddingLeft:10}}>
                                        <Text>Setting</Text>
                                    </View>
                                </View>
                                    
                                <View>
                                    <Icon style={{color:'grey', fontSize:20}} name="right" type="AntDesign" />
                                </View>   
                            </View>
                        </View>

                        {/* **************** */}
                        {/* Logout Button */}
                        <View style={{marginTop:hp('2%')}}>
                            <TouchableOpacity style={styles.logoutbutton}>
                                <Text style={{color:'#fff', fontSize:16}}>LOGOUT</Text>
                            </TouchableOpacity>
                        </View>


            </View>
      {/* ************* */}
        </View>
    )
}

const styles = StyleSheet.create({

    userImage:{
        height:hp('12%'),
        width:wp('24%'),
        backgroundColor:'lightgrey',
        borderRadius:50,
        position:'absolute'
    },
    camerabutton:{
        height:hp('4%'),
        width:wp('8%'),
        backgroundColor:'#3FAD72',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        alignSelf:'flex-end',
        marginTop:2
    },
    imagecontainer:{
        height:hp('12%'),
        width:wp('25%'),

    },
    editbutton:{
        height:hp('4%'),
        width:wp('24%'),
        borderWidth:1,
        borderColor:'#3FAD72',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    row1:{
        height:hp('10%'),
        justifyContent:'center',
        borderBottomWidth:1,
        borderColor:'lightgrey'
    },
    row2:{
        height:hp('10%'),
        justifyContent:'center',
        borderBottomWidth:1,
        borderColor:'lightgrey'
    },
    row3:{
        height:hp('10%'),
        justifyContent:'center',
        borderBottomWidth:1,
        borderColor:'lightgrey'
    },
    row4:{
        height:hp('9%'),
        justifyContent:'center',
        borderBottomWidth:1,
        borderColor:'lightgrey'
    },
    row5:{
        height:hp('9%'),
        justifyContent:'center',
    },
    logoutbutton:{
        height:hp('7%'),
        width:wp('45%'),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#3FAD72',
        borderRadius:10,
        alignSelf:'center'
    }

})

export default MyProfile;
