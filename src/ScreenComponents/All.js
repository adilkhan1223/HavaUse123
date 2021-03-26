import React, { useState, useEffect } from 'react'
import { View, Text, Image, SafeAreaView, StyleSheet, TextInput, FlatList} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from '../components/Button';
import {  Header, Left, Icon, Card, Right, Body,  } from 'native-base';

const data2= [
    {
      image:'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ProductName:'Photo Studio Box, SEDGEWIN',
      Order: 'FT1726839090',
      OrderDate:'July 11, 2020 - 16:30',
      Total: 17.94,
      
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
      ProductName:'Photo Studio Box, SEDGEWIN',
      Order: 'FT1726839090',
      OrderDate:'July 11, 2020 - 16:30',
      Total: 17.94,
    },
    {
      image:'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
      ProductName:'Photo Studio Box, SEDGEWIN',
      Order: 'FT1726839090',
      OrderDate:'July 11, 2020 - 16:30',
      Total: 17.94,
    },
    {
      image:'https://cdn.britannica.com/s:300x169,c:crop/36/123536-004-1780EFF1/Variety-fruits-vegetables.jpg',
      ProductName:'Photo Studio Box, SEDGEWIN',
      Order: 'FT1726839090',
      OrderDate:'July 11, 2020 - 16:30',
      Total: 17.94,
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yMIHkxs901EzRfpvMq6gIEfDADZcfbJxLw&usqp=CAU',
      ProductName:' Test',
      Order: 'FT1726839090',
      OrderDate:'July 11, 2020 - 16:30',
      Total: 17.94,
    },
  ]


 const All=()=> {
    const [value, setValue] = useState('');
    const [data, setData] = useState(data2);

    const searchFilterFunction = (text) => {
        setValue(text);
     console.log(value)

    const newData = data.filter((item) => {
        const itemData = `${item.ProductName.toUpperCase()} `;
        const textData = text.toUpperCase();
  
        return itemData.indexOf(textData) > -1;
      });
      console.log('New', newData);
      setData(newData);
      if (!text || text === '') {
        setData(data2);
      }
    };

    useEffect(() => {
      setData(data2);
    }, [data2]);
    return (
        <View style={{backgroundColor:'#FAF8F8'}}>
            {/*  <View style={styles.container}>
             <View><Image source={require('../../issets/Allorder.png')} style={{height:hp('25%')}} /></View>
             <View style={{marginVertical:hp('0.5%')}}><Text style={{fontWeight:'bold', fontSize:22}}>You made no orders yet </Text></View>
             <View style={{marginBottom:hp('4%')}}><Text>All your orders and tracking details go here. </Text></View>
             <View><Button title="Continue Shopping" /></View>
             </View> */}

             {/* If there is orders then this portion will executes */}
             <View style={{ marginHorizontal:wp('3%'), }}>
                <View style={styles.searchbar}>
                        <Icon name="ios-search" style={{padding: 8,}} />
                        <TextInput 
                        style={{width:wp('75%')}}
                        placeholderTextColor='grey'
                        value={value}
                        onChangeText={(text)=>searchFilterFunction(text)}
                        placeholder="Search" />
                </View>

                <FlatList
                data={data}
                renderItem={({item, index}) => {
                    return(
                     <Card style={{borderRadius:10, elevation:0, borderColor:'#FFF', backgroundColor:'#fff'}}>
                       <View style={{padding:10, marginVertical:hp('1%')}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.flatimagecontainer}>
                                <Image   />
                            </View>
                            <View style={{paddingLeft:10}}>
                                <Text style={{fontWeight:'bold', fontSize:17}}>{item.ProductName}</Text>
                                <View style={{flexDirection:'row', paddingTop:5}}>
                                    <View style={styles.ongoing}>
                                        <Text style={{fontSize:12}}>Ongoing</Text>
                                    </View>
                                    <View style={styles.similar}>
                                        <Text style={{fontSize:12, color:'#FC99B4'}}>Buy similar</Text>
                                    </View>
                                    <View style={styles.delivered}>
                                        <Text style={{fontSize:12, color:'#3FAD72'}}>Delivered</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* 2nd Row of details */}
                        <View style={{marginTop:hp('1%')}}>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Text style={{color:'#9FA9B8'}}>Order#</Text>
                                <Text style={{fontWeight:'bold'}}>{item.Order}</Text>
                            </View>

                            <View style={{flexDirection:'row',marginTop:hp('0.5%'), justifyContent:'space-between'}}>
                                <Text style={{color:'#9FA9B8'}}>Order Date</Text>
                                <Text style={{fontWeight:'bold'}}>{item.OrderDate}</Text>
                            </View>

                            <View style={{flexDirection:'row',marginTop:hp('0.5%'), justifyContent:'space-between'}}>
                                <Text style={{color:'#9FA9B8'}}>Total</Text>
                                <Text style={{fontWeight:'bold'}}>$ {item.Total}</Text>
                            </View>
                        </View>
                    </View>
                </Card>

                    )
                }}

                />

                
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{  
            
        justifyContent:'center',
        alignItems:'center'
    },
    searchbar:{
        marginTop:hp('2%'),
        marginBottom:hp('1%'),
        borderWidth:1,
        borderRadius:10,
        borderColor:'lightgrey',
        flexDirection:'row',
        backgroundColor:'#FFF'
      },
      flatimagecontainer:{
          width:wp('18%'),
          height:hp('9%'),
          backgroundColor:'skyblue'
      },
      ongoing:{
          width:wp('20%'),
          height:hp('4%'),
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#FAEFDC',
          borderRadius:7
      },
      similar:{
        width:wp('20%'),
        height:hp('4%'),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FEE8EE',
        borderRadius:7,
        marginLeft:wp('2%')
    },
    delivered:{
        width:wp('20%'),
        height:hp('4%'),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E7F5ED',
        borderRadius:7,
        marginLeft:wp('2%')

    }

})

export default All;
