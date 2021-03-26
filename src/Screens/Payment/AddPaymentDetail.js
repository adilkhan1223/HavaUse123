import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import {  Header, Left, Icon, Center, Right, Body } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


 const AddPaymentDetail=()=> {
    return (
        <View>
            <Header style={{backgroundColor:'transparent', elevation:0}}>
                <Left style={{flex:0.3}}>
                    <Icon name='arrow-back' />
                </Left>
                <Body style={{width:'80%', alignItems:'center'}}>
                    <Text>Add Payment Details</Text>

                </Body>
                <Right style={{flex:0.3}}>
                    
                </Right>

            </Header>
            <View style={{marginHorizontal:wp('3%')}}>
                <View style={{marginTop:hp('3%')}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Add Payment Details</Text>
                </View>
                <View style={{marginTop:hp('1.5%')}}>
                    <Text style={{color:'#4F4F4F'}}>Card Holder Name</Text>
                </View>
                <View style={styles.input1}>
                    <TextInput
                    style={{marginLeft:wp('5%')}}
                     placeholder="Waleed Shabbir"
                    />
                </View>

                <View style={{marginTop:hp('1.5%')}}>
                    <Text style={{color:'#4F4F4F'}}>
                        Card Holder Name
                    </Text>
                </View>
                <View style={styles.input2}>
                    <TextInput
                    style={{marginLeft:wp('5%')}}
                     placeholder="****_****_****_**85"
                    />
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:hp('2%')}}>
                    <View>
                        <Text style={{color:'#4F4F4F'}}>Card Holder Name</Text>
                        <View style={styles.input3}>
                            <TextInput
                            placeholder="10/27/2030" 
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={{color:'#4F4F4F'}}>CVV</Text>
                        <View style={styles.input5}>
                            <TextInput
                            placeholder="****" 
                            />
                        </View>
                    </View>

                </View>


                <View style={{marginTop:hp('30%')}}>

                </View>
                <View>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={{color:'#FFF'}}>Pay Now</Text>
                    </TouchableOpacity>
                </View>

            </View>
            {/* *************** */}
        </View>
    )
}

const styles = StyleSheet.create({
input1:{
    height:hp('7%'),
    borderWidth:1,
    width:wp('94%'),
    borderRadius:10,
    marginTop:hp('1%'),
    borderColor:'#DFDFDF'
},
input2:{
    marginTop:hp('1%'),
    height:hp('7%'),
    borderWidth:1,
    width:wp('94%'),
    borderRadius:10,
    borderColor:'#DFDFDF'
},
input3:{
    
    marginTop:hp('1%'),
    height:hp('7%'),
    borderWidth:1,
    width:wp('50%'),
    borderRadius:10,
    borderColor:'#DFDFDF'
},
input5:{
    height:hp('7%'),
    borderWidth:1,
    width:wp('40%'),
    borderRadius:10,
    marginTop:hp('1%'),
    borderColor:'#DFDFDF'
},
Button:{
    height: hp('7%'),
    width: wp('90%'),
    backgroundColor:'#3FAD72',
    justifyContent:"center",
    alignItems:"center",
    borderRadius:18,
}

})


export default AddPaymentDetail;
