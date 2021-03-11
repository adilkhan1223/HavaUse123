import React from 'react'
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from '../components/Button';
 const All=()=> {
    return (
            <View style={styles.container}>
            <View><Image source={require('../../issets/Allorder.png')} style={{height:hp('25%')}} /></View>
            <View style={{marginVertical:hp('0.5%')}}><Text style={{fontWeight:'bold', fontSize:22}}>You made no orders yet </Text></View>
            <View style={{marginBottom:hp('4%')}}><Text>All your orders and tracking details go here. </Text></View>
            <View><Button title="Continue Shopping" /></View>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{  
            
        justifyContent:'center',
        alignItems:'center'
    }

})

export default All;
