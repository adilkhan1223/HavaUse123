import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {  Header, Left, Icon, Center, Right, Body, Card } from 'native-base';
import Button from '../../components/Button'

const Payment=() => {
    return (
        <View>
            <Header style={{backgroundColor:'transparent', elevation:0}}>
                <Left style={{flex:0.3}}>
                    <Icon name='arrow-back' />
                </Left>
                <Body style={{width:'80%', alignItems:'center'}}>
                    <Text style={{fontSize:16}}>Checkout</Text>

                </Body>
                <Right style={{flex:0.3}}>
                    
                </Right>
            </Header>
            <View style={{marginHorizontal:wp('2%')}}>
                {/* ********** */}
                <View>
                    <Text style={{alignSelf:'center',fontSize:17, color:'#444444'}}>Order Details</Text>
                </View>
                <View>
                    <Card style={{padding:10, marginTop:hp('1.5%'), paddingHorizontal:15, backgroundColor:'#fff', borderRadius:10}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                           <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={styles.check}>
                                    <Icon name='check' style={{color:"#FFF", fontSize:21}} type='AntDesign' />
                                </View>
                                <View style={{paddingLeft:4}}>
                                    <Text style={{fontSize:16, color:'#828282'}}>Item Name can go here </Text>
                                    <Text style={{fontSize:12, color:'#828282'}}>Sub-heading or feature here..</Text>
                                </View>
                            </View> 
                            <View>
                                <Text style={{color:'#4C4C4C', fontSize:15}}>$250</Text>
                            </View>
                        </View> 

                        <View style={styles.underline}></View>

                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{color:'#828282', fontSize:16}}>Delivery Date</Text>
                            <Text style={{color:'#828282', fontSize:16}}>Sun, Nov,19, 2020</Text>
                        </View>

                        <View style={styles.underline}></View>


                        <View>
                            <Text style={{color:'#828282', fontSize:16}}>Order Summary</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop:3}}>
                                <Text style={{color:'#828282', fontSize:12,}}>Sub Total</Text>
                                <Text style={{color:'#828282', fontSize:12,}}>$250</Text>
                            </View>
                            <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop:2}}>
                                <Text style={{color:'#828282', fontSize:12,}}>Service Fee</Text>
                                <Text style={{color:'#828282', fontSize:12,}}>$50</Text>
                            </View>
                        </View>

                        <View style={styles.underline}></View>

                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{color:'#828282', fontSize:15}}>Total</Text>
                            <Text style={{color:'#828282', fontSize:15}}>$300</Text>
                        </View>


                    </Card>
                </View>


                <View>
                    <Text style={{alignSelf:'center',fontSize:17, marginVertical:hp('1%'), color:'#444444'}}>Additional Comments</Text>
                </View>

                <View>
                    <Card style={{padding:10, paddingBottom:18, borderRadius:10}}>
                        <Text style={{lineHeight:18, fontSize:12, color:'#828282'}}>
                        What is Lorem Ipsum Lorem Ipsum is sim
                        ply dummy text of the printing and typesetting 
                        industry Lorem Ipsum has been the industry's
                        </Text>
                    </Card>
                </View>


                <View style={{alignItems:'center', marginTop:hp('6%')}}>
                 <Button title="Confirm Payment"  />
                </View> 

                {/* ********** */}
            </View>



            {/* ********** */}
        </View>
    )
}

const styles= StyleSheet.create({
    underline:{
        width:wp('50%'),
        borderWidth:0.5,
        alignSelf:'center',
        borderColor:'lightgrey',
        marginVertical:hp('1.5%')
    },
    check:{
        width:wp('8%'),
        height:hp('4%'),
        backgroundColor:'#3FAD72',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    }

})

export default Payment;
