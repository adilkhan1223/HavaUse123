import React, { Component } from 'react';
import {  SafeAreaView, Text,View, StyleSheet, ScrollView  } from 'react-native'
import { Container, Header,  Tab, Tabs, } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import HeaderWithIcon from '../components/HeaderWithIcon';
import All from '../ScreenComponents/All'
const Orders=() => {
    return (
      <ScrollView style={{backgroundColor:'#FAF8F8'}} >
        <HeaderWithIcon  /> 
        
        <Tabs  tabBarUnderlineStyle = {{backgroundColor:"#3FAD72" , height:1}} tabContainerStyle = {{backgroundColor:'white',borderWidth:1,borderBottomWidth:1, }}>
          <Tab heading="All" tabStyle = {{backgroundColor:"#FFF" }} textStyle={{color:"lightgrey"}} activeTabStyle = {{ backgroundColor:"#FFf"}} activeTextStyle = {{color:"#3FAD72ed"}} >
              <View><All /></View>
          </Tab>
          <Tab heading="Completed" textStyle={{color:"lightgrey"}} tabStyle = {{backgroundColor:"#FFF", }} activeTabStyle = {{ backgroundColor:"#FFf",}} activeTextStyle = {{color:"#3FAD72ed"}} >
          <View><Text>Hello</Text></View>
          </Tab>
          <Tab heading="Cancelled" textStyle={{color:"lightgrey"}} tabStyle = {{backgroundColor:"#FFF", }} activeTabStyle = {{ backgroundColor:"#FFFFFF",}} activeTextStyle = {{color:"#3FAD72ed"}} >
          <View><Text>Hello</Text></View>
          </Tab>
        </Tabs>
      </ScrollView>
    );
  
}

const styles = StyleSheet.create({
  container1:{  
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  }
})

export default Orders;