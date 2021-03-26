import React,{ useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import {  Header, Left, Icon, Center, Right, Body } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; 




const HavausePlusMaps=()=> {
  const [latitude, setLatitude]=useState(37.78825)
  const [longitude, setLongitude]= useState(-122.4324)

  const [markers, setMarkers]=useState([
    {
      title: 'hello',
      coordinates: {
        latitude: 37.78825,
        longitude: -122.4324
      },
    },
    {
      title: 'hello',
      coordinates: {
        latitude: 37.79825,
        longitude: -122.4324
      },
    },
    {
      title: 'hello',
      coordinates: {
        latitude: 37.79625,
        longitude: -122.4324
      },
    },
    {
      title: 'hello',
      coordinates: {
        latitude: 37.79725,
        longitude: -122.4324
      },
    }
    
  ])

    return (
        <View>
            
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

               

                <View style={styles.container}>
                
                <MapView
                  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                  style={styles.map}
                  region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                  }}
                  showsUserLocation={true}
                >


                  {markers.map(marker => (
                    <MapView.Marker 
                      coordinate={marker.coordinates}
                      title={marker.title}
                    />
                ))}
                  
                </MapView>
                <View style={styles.searchbar}>
                    <Icon name="ios-search" style={{padding: 8,}} />
                      <TextInput 
                      style={{width:wp('75%')}}
                      placeholderTextColor='grey'
                    //   value={value}
                    //   onChangeText={(text)=>searchFilterFunction(text)}
                      placeholder="Search" />
                </View>

                
              </View>

               

            {/* ***************** */}
        </View>
    )
}

const styles = StyleSheet.create({
    searchbar:{
        marginHorizontal:hp('1.5%'),
        borderWidth:1,
        borderRadius:10,
        borderColor:'lightgrey',
        flexDirection:'row',
        backgroundColor:'#FFF'
      },
      map: {
        height:hp('80%'),
        width:wp('100%'),
        marginTop:hp('4%'),
        position:'absolute'
        
        
      },
    
})

export default HavausePlusMaps;
