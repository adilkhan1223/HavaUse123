import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
  } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import {
    Header,
    Left,
    Icon,
    Center,
    Right,
    Body,
    SwipeRow,
    Button,
  } from 'native-base';
import { Container, Tab, Tabs } from 'native-base';
import ClothingTab from './ClothingTab';



 const Main=()=>{
    return (
        <ScrollView style={{backgroundColor:'#fff'}}>
            <View style={{}}>
                <Header style={{backgroundColor: '#fff', elevation: 0}}>
                <Left style={{flex: 0.3}}>
                    <Icon name="menu" />
                </Left>
                <Body style={{width: '80%', alignItems: 'center'}}>
                    <Image source={require('../../../issets/logopluss.png')} />
                </Body>
                <Right style={{flex: 0.3}}>
                    <Icon style={{color:'#3FAD72'}} name="cart" />
                </Right>
                </Header>
            </View>
        {/* End of Header */}

        <View>
        {/* Search input  */}

        <View style={styles.inputsearch}>
                  <View style={{marginHorizontal:wp('2%'),}}><Icon name='search'  /></View>
                  <View>
                    <TextInput  style={styles.textinput}
                      placeholder='Search'
                    />
                  </View>
              </View>

              {/* Tabs Start */}
              <View style={{backgroundColor:'transparent', marginVertical:hp('2%')}}> 
                  <Tabs locked={true} tabBarUnderlineStyle = {{backgroundColor:"#3FAD72", height:2 }} tabContainerStyle = {{backgroundColor:'#fff', borderTopWidth:1, borderTopColor:'lightgrey', elevation:3 }}>
                    <Tab heading="Clothing" textStyle={{color:"grey", fontSize:14}} tabStyle = {{backgroundColor:"transparent", }} activeTabStyle = {{ backgroundColor:"transparent",}} activeTextStyle = {{color:"#3FAD72ed"}}>
                        <View><ClothingTab   /></View>
                    </Tab>
                    <Tab heading="Men's clothing" textStyle={{color:"grey", fontSize:14}} tabStyle = {{backgroundColor:"transparent", }} activeTabStyle = {{ backgroundColor:"transparent",}} activeTextStyle = {{color:"#3FAD72ed"}}>
                         <View><Text>Tab 2</Text></View>
                    </Tab>
                    <Tab heading="Women's clothing" textStyle={{color:"grey", fontSize:14}} tabStyle = {{backgroundColor:"transparent", }} activeTabStyle = {{ backgroundColor:"transparent",}} activeTextStyle = {{color:"#3FAD72ed"}}>
                          <View><Text>Tab 3</Text></View>
                    </Tab>
                    <Tab heading="Socks" textStyle={{color:"grey", fontSize:14}} tabStyle = {{backgroundColor:"transparent", }} activeTabStyle = {{ backgroundColor:"transparent",}} activeTextStyle = {{color:"#3FAD72ed"}}>
                            <View><Text>Tab 4</Text></View>
                    </Tab>
                  </Tabs>
                  </View>




        </View>
        </ScrollView>
    )
}

const styles= StyleSheet.create({

    inputsearch:{
        width:wp('94%'),
        height:hp('7%'),
        alignSelf:'center',
        borderWidth:1,
        borderRadius:10,
        borderColor:'lightgrey',
        flexDirection:'row',
        alignItems:'center',
        marginTop:hp('1%'),
        backgroundColor:'#FFF'
    
      },
      textinput:{
        width:wp('80%')
      },
})


export default Main;