import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import {  Header, Left, Icon, Center, Right, Body, Item, Input, } from 'native-base';
import { Container, Tab, Tabs } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ProductDetailtab1 from './src/ScreenComponents/ProductDetailtab1';
import ProductDetailAboutTab from './src/ScreenComponents/ProductDetailAboutTab'
import ProductDetailtab2 from './src/ScreenComponents/ProductDetailtab2';


const App=() => {
  return (
    <ScrollView>
        <Header style={{backgroundColor:'#fff', height:hp('8%')}}>
              <Left style={{flex:0.3}}>
                  <Icon name='arrow-back' />
              </Left>
              <Body style={{width:'80%', alignItems:'center'}}>
                  <Text>Details</Text>

              </Body>
              <Right style={{flex:0.3}}>
                  <Icon name="cart"  />
              </Right>

      </Header>

      <View style={{backgroundColor:'#fff', borderTopWidth:1, borderTopColor:'lightgrey'}}> 
                  <Tabs locked={true} tabBarUnderlineStyle = {{backgroundColor:"#3FAD72",height:2 }} tabContainerStyle = {{backgroundColor:'transparent',borderWidth:1, borderBottomWidth:1, elevation:0 }}>
                    <Tab heading="Overview" textStyle={{color:"lightgrey", fontWeight:'900'}} tabStyle = {{backgroundColor:"transparent", }} activeTabStyle = {{ backgroundColor:"transparent",}} activeTextStyle = {{color:"#3FAD72ed"}}>
                        <ProductDetailtab1  />
                    </Tab>
                    <Tab heading="Related" textStyle={{color:"lightgrey",fontWeight:'900'}} tabStyle = {{backgroundColor:"transparent", }} activeTabStyle = {{ backgroundColor:"transparent",}} activeTextStyle = {{color:"#3FAD72ed"}}>
                         <ProductDetailtab2 />
                    </Tab>
                   
                  </Tabs>
                  </View>
                  
                             
    </ScrollView>
  )
}
const styles = StyleSheet.create({

  

 })
export default App;