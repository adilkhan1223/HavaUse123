import React, {useState} from 'react'
import { Card, Icon } from 'native-base';
import {  View, Text, TouchableOpacity, StyleSheet, Alert, Image, FlatList, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import Button from '../components/Button'


const OrderComplete=()=> {
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={{}}>
            <Modal
                animationType={"fade"}
                transparent={true}
                
                backdropColor='rgba(100,100,0.5)'
                backdropOpacity={3}
                style={{width:wp('100%'), marginLeft:0, backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'flex-end', marginBottom:0}}               
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            
            >
            <View style={{ backgroundColor:'rgba(100,100,100,0.5)' }}>
                <Card style={{padding: 10, borderRadius:15,}}>

                    <View style={{alignItems:'center', marginVertical:hp('2%')}}>
                        <Image  source={require('../../issets/ordercomplete.png')}  />
                    </View>
                    
                    <View style={styles.orderno}>
                        <Text style={{color:'#3FAD72'}}>Order No: <Text>63134236</Text></Text>
                    </View>

                    <View style={{alignItems:'center', marginVertical:hp('2%')}}>
                        <Text style={{fontWeight:'bold',fontSize:18}}>
                            It's Ordered!
                        </Text>

                        <Text style={{color:'#A5A5A5', paddingHorizontal:9}}>
                            lipsum as it is sometimes
                             is dummy text used in laying out print,
                              graphic or web designs designs</Text>
                    </View>

                    <TouchableOpacity style={{alignItems:'center', marginTop:widthPercentageToDP('3%')}}>
                        <Text style={{color:'#3FAD72'}}>Track Order</Text>
                    </TouchableOpacity>
 
                    <View style={{alignSelf:'center', marginTop:hp('2%'), marginBottom:hp('1%')}}>
                        <Button title="Continue Shopping" />
                    </View>
                    {/* ************* */}
            
            
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
    orderno:{
        width:wp('45%'),
        height:hp('5%'),
        backgroundColor:'#E3FDEE',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:7,
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

export default OrderComplete;
