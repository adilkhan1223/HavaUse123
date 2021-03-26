import React, {useState} from 'react'
import { Card, Icon } from 'native-base';
import {  View, Text, TouchableOpacity, StyleSheet, Alert, Image, FlatList, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import Button from '../components/Button'


const Notifyme=()=> {
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View>
            <Modal
                animationType={"slide"}
                transparent={true}
                // backdropColor={'black'}
                // backdropOpacity={1}
                style={{width:wp('100%'), marginLeft:0, justifyContent:'flex-end', marginBottom:0}}               
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            
            >
            <View>
                <Card style={{padding: 10, borderRadius:15}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{marginLeft:wp('35%')}}>
                                <Text style={{fontWeight:'bold', fontSize:18}}>Notify Me</Text>
                            </View>
                            <TouchableOpacity  onPress={() => setModalVisible(!modalVisible)}>
                                <Icon style={{color:'grey'}} name="close-o"  type="EvilIcons" />
                            </TouchableOpacity> 
                        </View>
                   

                        <TouchableOpacity style={styles.btn1}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Icon style={{width:wp('15%'), paddingLeft:15, color:'#3FAD72',}} name="envelope" type="EvilIcons" />
                                
                                <View style={{width:wp('60%'), alignItems:'center',}}>
                                    <Text style={{color:'grey'}}>email</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <View style={{alignSelf:'center', marginVertical:hp('2%')}}>
                            <Text style={{color:'grey'}}>Or</Text>
                        </View>

                        <TouchableOpacity style={styles.btn2}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Icon style={{width:wp('15%'), paddingLeft:15, color:'#3FAD72',}} name="call-outline" type="Ionicons" />
                                
                                <View style={{width:wp('60%'), alignItems:'center',}}>
                                    <Text style={{color:'grey'}}>+900886655447</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        {/* 2nd card */}
 
                    <View style={{alignSelf:'center', marginTop:hp('8%'), marginBottom:hp('1%')}}>
                        <Button title="Submit" />
                    </View>
                    {/* ************* */}
                </ScrollView>
            
                </Card>
            </View>   
      </Modal> 

      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                <Text style={{color:'#fff'}}>Click me</Text>
                <Text>GHwpo</Text>
             </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
       btn1:{
           alignSelf:'center',
        height:hp('6%'),
        width:wp('90%'),
        borderWidth:1,
        backgroundColor:'#FFF',
        justifyContent:'center',
        borderRadius:10,
        borderColor:'lightgrey',
        marginTop:hp('4%')

       },
    btn2:{
     alignSelf:'center',
     height:hp('6%'),
     width:wp('90%'),
     borderWidth:1,
     backgroundColor:'#FFF',
     justifyContent:'center',
     borderRadius:10,
     borderColor:'lightgrey',
    },
    buttonadd:{
        height:hp('11%'),
        width:wp('62%'),
        backgroundColor:'#3FAD72',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }

})

export default Notifyme;
