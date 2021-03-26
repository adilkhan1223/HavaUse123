import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {  Icon} from 'native-base';


const onHold=()=> {
    return (
        <View>
                    <View>
                        <View style={styles.ratebutton}>
                            <Icon style={{color:'#3FAD72', fontSize:20}} name="star" />
                            <Text style={{color:'#3FAD72'}}> Rate your experience</Text>
                        </View>
                    </View> 
             <View style={{alignItems:'center'}}>
                        <TouchableOpacity style={styles.Buttonask}>
                            <Text style={{color:'#FFF'}}>
                            Ask for refund
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Buttonhelp}>
                            <Text style={{color:'#FFF'}}>
                            Need Any Help?
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{alignItems:'center', marginTop:hp('5%')}}>
                        <Text style={{color:'#A9AFBD'}}>Proof of delivery</Text>
                        {/* Image of Prooof */}
                        <View style={{marginTop:hp('1%')}}>
                            <Image style={{height:hp('40%'), width:wp('100%')}}  source={require('../../issets/img2.jpg')} />
                        </View>

                        {/* Map */}                                           
                    </View>
        </View>
    )
}

const styles = StyleSheet.create({
  Buttonask:{
    height: hp('9%'),
    width: wp('90%'),
    backgroundColor:'#FB4B7B',
    justifyContent:"center",
    alignItems:"center",
    borderRadius:18,
    marginTop:hp('2%')
},
Buttonhelp:{
    height: hp('9%'),
    width: wp('90%'),
    backgroundColor:'#3FAD72',
    justifyContent:"center",
    alignItems:"center",
    borderRadius:18,
    marginTop:hp('2%')

},
ratebutton:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    width:wp('73%'),
    backgroundColor:'#E4F2F0',
    height:hp('5%'),
    borderRadius:10,
    marginVertical:hp('2%')
},


})

export default onHold;
