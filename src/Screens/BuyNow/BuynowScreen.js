import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {  Header, Left, Icon, Card, Right, Body, } from 'native-base';

const ENTRIES1 = [
    {
      title: "Professional Modification of racing car Steering Wheel",
      subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
      illustration: "https://media.istockphoto.com/photos/steering-wheel-picture-id507984911?k=6&m=507984911&s=612x612&w=0&h=Qcr0bGMqXYi2b1rBgjtD8l6eiPXchaSoXS-CjuyHG3E=",
    },
    {
      title: "Professional Modification of racing car Steering Wheel",
      subtitle: "Lorem ipsum dolor sit amet",
      illustration: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoPg93EpMK7o6-E708DDMOZhkWFFN3c7l5g&usqp=CAU",
    },
    {
      title: "Professional Modification of racing car Steering Wheel",
      subtitle: "Lorem ipsum dolor sit amet et nuncat ",
      illustration: "https://media.istockphoto.com/photos/steering-wheel-picture-id167759607?k=6&m=167759607&s=612x612&w=0&h=9kUcA9pkp3Mmm7mLhoQMUUxfuGqHYiDzAvfm7ezmySE=",
    },
     
  ];

const BuynowScreen=() => {
    return (
        <ScrollView>
            <Header style={{backgroundColor:'transparent', elevation:0}}>
                <Left style={{flex:0.3}}>
                    <Icon name='arrow-back' />
                </Left>
                <Body style={{width:'80%', alignItems:'center'}}>
                    <Text>Buy Now</Text>

                </Body>
                <Right style={{flex:0.3}}>
                    
                </Right>

            </Header>

            <View style={{marginHorizontal:wp('3%')}}>
        {/* *********** */}
            <View style={{marginTop:hp('2%')}}>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.imageContainer}></View>
                    <View style={{width:wp('70%'), paddingLeft:8}}>
                        <Text style={{fontWeight:'bold', fontSize:16}}>Professional Modification of racing Car Steering Wheel</Text>
                        <View style={{flexDirection:'row', alignItems:'center', paddingTop:5}}>
                            <Icon style={{color:'#60BB8A', fontSize:23}}  name='truck-fast-outline' type="MaterialCommunityIcons" />
                            <Text style={{color:'#4A4A4A', fontSize:12}}> Free Shipping</Text>
                            <Text style={{paddingLeft:7, color:'#4A4A4A', fontSize:12}}>Arrives: </Text>
                            <Text style={{color:'#4A4A4A', fontSize:12}}>Tuesday, Nov 21</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* End Of Professional modification Portion */}
            <View style={{marginTop:hp('2%')}}>
                <Card style={{padding:8, flexDirection:'row',
                             backgroundColor:'#F1F9F5',
                             borderRadius:10,
                             justifyContent:'space-between'}}>
                    <View style={{width:wp('63%')}}>
                        <Text style={{color:'#818482', fontWeight:'bold'}}>Ship to</Text>
                        <Text style={{color:'#B0B4B2', fontSize:12.5, lineHeight:18, paddingTop:5}}>374 Farifield Rd,
                             Uniondale, NewYork - 
                             11553 United States of America</Text>
                    </View>

                    <View>
                        <Icon style={{color:'#60BB8A', fontSize:30}} name="pencil" type="EvilIcons" />
                    </View>

                </Card>
            </View>
            {/* ******** */}
            <View>
                <Card style={{padding:8, flexDirection:'row',
                             backgroundColor:'#F1F9F5',
                             borderRadius:10,
                             justifyContent:'space-between'}}>
                    <Text style={{color:'#818482', fontWeight:'bold'}}>Pay With</Text>
                    <View style={{flexDirection:'row'}}>
                        <Image style={{height:hp('2.5%'), width:wp('5%')}} source={require('../../../issets/mastercard.png')} />
                     <Text style={{color:'#818482', fontWeight:'bold'}}> 4221 **** **** 9018</Text>
                    </View>
                    <Icon style={{color:'#60BB8A', fontSize:30}} name="pencil" type="EvilIcons" />
                </Card>
            </View>
            {/* ************ */}
            <View>
                <Card style={{padding:8, flexDirection:'row',
                             backgroundColor:'#F1F9F5',
                             borderRadius:10,
                             justifyContent:'space-between'}}>
                    <View style={{width:wp('79%')}}>
                        <Text style={{color:'#818482', fontWeight:'bold'}}>Ship to</Text>
                        <Text style={{color:'#B0B4B2', fontSize:12.5, lineHeight:18, paddingTop:15}}>
                         What is Lorem Ipsum Lorem sum is simply dummy text of the printing and typesetting
                          industry Lorem Ipsum has be the industry standard dummy 
                        </Text>
                    </View>

                    <View>
                        <Icon style={{color:'#60BB8A', fontSize:30}} name="pencil" type="EvilIcons" />
                    </View>

                </Card>
            </View>
            {/* ************* */}
            <View>
                <TouchableOpacity style={styles.creditbutton}>
                    <Text style={{color: '#3FAD72'}}>Use Store Credit</Text>
                </TouchableOpacity>

                <View style={styles.input1}>
                    <TextInput placeholder="Coupen Code" style={{width: wp('70%')}} />
                    <TouchableOpacity style={styles.applybutton}>
                    <Text style={{color:'grey'}}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Sub Total and Swipe Button */}
            <View>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:hp('2%'), marginHorizontal:wp('2%')}}>
                    <View>
                        <Text style={{color:'grey'}}>SubTotal {'  '}$1,350</Text>
                        <Text style={{color:'grey'}}>Coupen {'   '}-$10.00</Text>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold', fontSize:24}}>$1,350</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.Buttonproceed}>
                        <Icon style={{fontSize:20, color:'#FFF'}} name='doubleright' type='AntDesign' /> 
                        <Text style={{color:'#FFF', paddingLeft:5}}>Swipe to place order</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* ************* */}
            {/* Flatlist */}
            <View style={{marginTop:hp('1%')}}>
                    <Text style={{ fontWeight:'bold', fontSize:16}}>Related Items</Text>
                    </View>
                    <FlatList 
                    data={ENTRIES1}
                    horizontal={true}
                    renderItem={({item, index})=>{
                        return(
                            <View>
                                <View style={styles.flatlistContainer}>
                                        <View style={styles.imageConatiner}>
                                            <Image style={styles.flatlistImage} resizeMode='contain' source={{uri: item.illustration}} />
                                            <View style={{flexDirection:'row'}}>
                                                <View style={styles.onSale}>
                                                    <Text style={{fontSize:11, color:"#fff"}}>On Sale</Text>
                                                </View>
                                                <View style={{marginLeft:wp('18%'), marginTop:hp('1%')}}>
                                                    <Icon name='heart'  />
                                                </View>
                                             </View>   
                                        </View>
                                    <View style={{marginLeft:wp('2.5%')}}>
                                        <View>
                                            <Text style={{fontWeight:'bold', }}>Product Name</Text>
                                        </View>

                                        <View style={{flexDirection:'row',
                                                      alignItems:'center',
                                                      marginVertical:hp('0.8%')}}>
                                            <View style={styles.flatlistbadge}>
                                                <Icon name='star' 
                                                    style={{color:'#fff',
                                                            fontSize:15,
                                                            marginHorizontal:wp('1%')}} 
                                                />
                                                <Text style={{color:'#fff'}}>5.0 </Text>
                                            </View>
                                            <View style={{marginLeft:wp('1.5%')}}>
                                                <Text>(409)</Text>
                                            </View>
                                        </View>

                                        <View>
                                            <Text>$60.00 - $70.00</Text>
                                        </View>
                                    </View>    
                                </View>
                            </View>

                        )
                    }}
                    />



        {/* ************* */}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        height:hp('10%'),
        width:wp('20%'),
        backgroundColor:'green'
    },
    creditbutton: {
        width: wp('94%'),
        alignSelf:'center',
        height: hp('8%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'lightgrey',
        marginVertical: hp('2%'),
      },
      input1: {
        flexDirection: 'row',
        width: wp('94%'),
        height: hp('8%'),
        justifyContent: 'center',
        alignSelf:'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'lightgrey',
      },
      applybutton: {
        height: hp('8%'),
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderLeftColor: 'lightgrey',
        width: wp('20%'),
        alignItems: 'center',
      },
      Buttonproceed:{
        height: hp('9%'),
        width: wp('94%'),
        backgroundColor:'#3FAD72',
        justifyContent:"center",
        alignItems:"center",
        borderRadius:18,
        marginVertical: hp('3%'),
        alignSelf:'center',
        flexDirection:'row'
    },
    flatlistContainer:{
        height:hp('30%'),
        width:wp('44%'),
        borderWidth:1,
        borderRadius:10,
        borderColor:'lightgrey',
        marginHorizontal:wp('1%'),
        marginVertical:hp('2%')
    },
    imageConatiner:{
        width:wp('100%'),
        height:hp('18%'),
    },
    flatlistImage:{
        height:wp('28%'),
        width:wp('43%'),
        position:'absolute',
        marginTop:hp('3%')
    },

    flatlistbadge:{
        flexDirection:'row',
        width:wp('14%'),
        height:hp('3.5%'),
        backgroundColor:'orange',
        borderRadius:7,
        alignItems:'center',
    },
    onSale:{
        height:hp('3.5%'),
        width:wp('14%'),
        backgroundColor:'#FF0303',
        justifyContent:'center',
        borderRadius:10,
        alignItems:'center',
        marginTop:hp('1%'),
        marginLeft:wp('1%')
    }


})

export default BuynowScreen;
