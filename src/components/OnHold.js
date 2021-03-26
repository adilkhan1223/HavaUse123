import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {  Icon } from 'native-base';


const onHold=()=> {
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
       
        
      ])

    return (
        <View>
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
                        {/* <Text style={{color:'#A9AFBD'}}>Proof of delivery</Text> */}
                        {/* Image of Prooof */}
                        <View>
                            <Image   />
                        </View>

                        {/* Map */}
                        <View>
                            <MapView
                            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                            style={styles.mapcontainer}
                            region={{
                                latitude: latitude,
                                longitude: longitude,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                            >
                                {markers.map(marker => (
                                    <MapView.Marker 
                                    coordinate={marker.coordinates}
                                    title={marker.title}
                                    />
                                ))}
                            </MapView>

                            <View>
                                <TouchableOpacity style={styles.Buttontrack}>
                                    <Icon style={{color:'#FFF'}} name="route" type="FontAwesome5" />
                                    <Text style={{color:'#FFF', paddingLeft:10}}>Track Driver</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
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
mapcontainer:{
    height:hp('40%'),
        width:wp('100%'),
        marginTop:hp('4%'),
},
Buttontrack:{
    flexDirection:'row',
    height: hp('9%'),
    width: wp('90%'),
    backgroundColor:'#3FAD72',
    justifyContent:"center",
    alignItems:"center",
    borderRadius:18,
    marginTop:hp('2%'),
    alignSelf:'center',
    marginBottom:hp('2%')

},

})

export default onHold;
