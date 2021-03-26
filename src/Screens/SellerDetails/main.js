import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import {  Header, Left, Icon, Center, Right, Body, Item, Input, } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container, Tab, Tabs } from 'native-base';
import MenuTab from './MenuTab';




const SellerDetails=()=> {
  return (
    <ScrollView>
        <Header style={{backgroundColor:'transparent', elevation:0}}>
            <Left style={{flex:0.3}}>
                <Icon name='arrow-back' />
            </Left>
            <Body style={{width:'80%'}}>            
            </Body>
            <Right style={{flex:0.3}}>                
               <Icon name="cart"  />
            </Right>
        </Header>
        
        {/* Name of seller and logo of seller */}
          <View>
              <View style={{flexDirection:'row', width:wp('100%'), marginLeft:wp('4%')}} >                
                    <View style={{alignItems:'center'}}>
                          <View style={styles.logoImage}></View>
                          <Text style={{fontWeight:'bold'}}>Logo of seller</Text>
                    </View>

                  <View style={{marginLeft:wp('3%')}}>    
                {/* Name of seller to badge and heart */}
                    <View style={{flexDirection:'row'}}>
                          <View  style={{width:wp('55%')}}>
                                <View>
                                  <Text style={{fontWeight:'bold', fontSize:16}}>Name of seller</Text>
                                </View>
                                <View><Text style={{color:'grey'}}>Address</Text></View>
                                
                                <View  style={{flexDirection:'row'}}>
                                   <View style={styles.badge}>
                                     <Icon name='star' style={{fontSize:15, color:'#FFF'}} />
                                     <Text style={{color:'#FFF'}}>5.0</Text>
                                    </View>
                                  <View><Text> (409)</Text></View>
                                </View>
                          </View>   

                           <View style={{}} >
                                  <Icon name='heart' style={{color:'#3FAD72'}}  />
                           </View>
                    </View>

                    {/* end of name of seller and badge and heart */}

                    {/* Buttons  */}

                       <View style={{flexDirection:'row', marginVertical:hp('2%')}}>
                         <TouchableOpacity style={styles.buttoncontact}>
                              <Text style={{color:'#FFF', fontSize:11}}>Contact</Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.buttondirection}>
                              <Text style={{color:'grey', fontSize:11}}>Direction</Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.buttonhour}>
                              <Text style={{color:'grey', fontSize:11}}>Hour</Text>
                         </TouchableOpacity>
                       </View>

                   </View>
              </View>
          </View>

          {/* ********************  */}

          {/* Hero banner section Start */}

          <View style={{marginVertical:hp('3%')}}>
            <View style={{marginHorizontal:wp('2.5%')}}>
              <Image  style={styles.heroImage} source={{uri:'https://images.pexels.com/photos/3401900/pexels-photo-3401900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
            </View>
          </View>

          {/* ***************** */}

          {/* Tabs Section start */}

           <View style={{backgroundColor:'#fff', borderTopWidth:1, borderTopColor:'lightgrey'}}> 
                  <Tabs locked={true} tabBarUnderlineStyle = {{backgroundColor:"#3FAD72",height:2 }} tabContainerStyle = {{backgroundColor:'transparent',borderWidth:1, borderBottomWidth:1, elevation:0 }}>
                    <Tab heading="Menu" textStyle={{color:"lightgrey", fontWeight:'900'}} tabStyle = {{backgroundColor:"transparent", }} activeTabStyle = {{ backgroundColor:"transparent",}} activeTextStyle = {{color:"#3FAD72ed"}}>
                        <View><MenuTab  /></View>
                    </Tab>
                    <Tab heading="Details" textStyle={{color:"lightgrey",fontWeight:'900'}} tabStyle = {{backgroundColor:"transparent", }} activeTabStyle = {{ backgroundColor:"transparent",}} activeTextStyle = {{color:"#3FAD72ed"}}>
                         <View><Text>Screen 2</Text></View>
                    </Tab>

                    <Tab heading="Deals" textStyle={{color:"lightgrey",fontWeight:'900'}} tabStyle = {{backgroundColor:"transparent", }} activeTabStyle = {{ backgroundColor:"transparent",}} activeTextStyle = {{color:"#3FAD72ed"}}>
                         <View><Text>Screen 3</Text></View>
                    </Tab>

                    <Tab heading="Reviews" textStyle={{color:"lightgrey",fontWeight:'900'}} tabStyle = {{backgroundColor:"transparent", }} activeTabStyle = {{ backgroundColor:"transparent",}} activeTextStyle = {{color:"#3FAD72ed"}}>
                         <View><Text>Screen 4</Text></View>
                    </Tab>

                    
                   
                  </Tabs>
           </View>

    </ScrollView>
  )
}


const styles = StyleSheet.create({
  logoImage:{
    height:hp('9 %'),
    width:wp('19%'),
    backgroundColor:'#AFDDA1',
    borderRadius:50
  },
  badge:{
    flexDirection:'row',
    height:hp('3%'),
    width:wp('15%'),
    backgroundColor:'#FF9D2B',
    justifyContent:'center',
    borderRadius:8,
    alignItems:'center'
  },
  buttoncontact:{
    height:hp('5%'),
    width:wp('21%'),
    backgroundColor:'#3FAD72',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },

  buttondirection:{
    height:hp('5%'),
    width:wp('21%'),
    backgroundColor:'transparent',
    borderWidth:1,
    borderColor:'#3FAD72',
    borderRadius:10,
    marginHorizontal:wp('2%'),
    justifyContent:'center',
    alignItems:'center'
  },
  buttonhour:{
    height:hp('5%'),
    width:wp('21%'),
    backgroundColor:'transparent',
    borderWidth:1,
    borderColor:'#3FAD72',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },

  heroImage:{
    height:hp('23%'),
    width:wp('95%'),
    borderRadius:10,
  }

})


export default SellerDetails;
