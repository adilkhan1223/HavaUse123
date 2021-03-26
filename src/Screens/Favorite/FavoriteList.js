import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {  Header, Left, Icon, Center, Right, Body } from 'native-base';
import Button from '../../components/Button'


const FavoriteList=()=> {
    return (
        <View>
            <Header style={{backgroundColor:'transparent', elevation:0}}>
                <Left style={{flex:0.3}}>
                    <Icon name='arrow-back' />
                </Left>
                <Body style={{width:'80%', alignItems:'center'}}>
                    <Text style={{fontSize:16}}>My Wishlist</Text>

                </Body>
                <Right style={{flex:0.3}}>
                    
                </Right>

            </Header>
            <View>
                <View style={{marginTop:hp('12%')}}>
                    <Image style={{height:hp('25%'), marginLeft:wp('19%') ,width:wp('50%')}} resizeMode="contain" source={require('../../../issets/list.png')}  />
                </View>
                <View style={{alignItems:'center', marginTop:hp('2%')}}>
                    <Text style={{fontSize:17, color:'#212121'}}>No Favorites Yet</Text>
                </View>
                <View style={{alignItems:'center', marginTop:hp('1%')}}>
                    <Text style={{color:'#212121'}}>
                        Explore the platform and save the favorite {'\n'}
                        articles by tapping on the heart icon next
                    </Text>
                </View>
                <View style={{ marginTop:hp('20%')}}>
                    <View style={{alignItems:'center'}}>                   
                        <TouchableOpacity style={styles.Button}>
                            <Text style={{color:'#3FAD72'}}>
                            Search for items
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{alignItems:'center', marginTop:hp('1%')}}>
                        <Button  title="Start Shopping" />
                    </View>
                </View>    

                {/* <View style={{borderWidth:2, borderRadius:10, width:wp('50%'), alignSelf:'center', marginTop:hp('5%')}}>
                </View> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Button:{
        height: hp('9%'),
        width: wp('90%'),
        borderWidth:1,
        borderColor:'#3FAD72',
        justifyContent:"center",
        alignItems:"center",
        borderRadius:18,
    }


})

export default FavoriteList;
