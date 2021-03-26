import React, {useState} from 'react'
import { Card, Icon } from 'native-base';
import {  View, Text, TouchableOpacity, StyleSheet, Alert, Image, FlatList, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import Button from '../components/Button'
import MultiSlider from '@ptomasroos/react-native-multi-slider'

const service=[
    {
        re: 'AIRPOD CASES',
    },
    {
        re:'COLOR',
    },
    {
        re:'RAM',
     },
    {
        re:'HARD DRIVE',
     },
     {
        re:'IPHONE CASE VERSION',
     },
     
]
const Filter=()=> {
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue]= useState(0)
    const [selected, setSelected] = useState('');
    const [multiSliderValue, setMultiSliderValue] = React.useState([3, 7]);
    console.log(multiSliderValue)

    multiSliderValuesChange = values => setMultiSliderValue(values);
 
    

    return(
        <View>
            <Modal
                animationType={"slide"}
                transparent={true}
                // backdropColor={'black'}
                // backdropOpacity={1}
                deviceWidth={700}
                style={{width:wp('100%'), height:hp('100%'),marginLeft:0, marginBottom:0}}               
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            
            >
            <View>
                <Card style={{padding: 10, borderRadius:15}}>
                    <ScrollView>
                   <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'bold', fontSize:20}}>Filter</Text>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                            <Icon style={{color:'grey'}} name="close-o"  type="EvilIcons" />
                        </TouchableOpacity> 
                    </View>
                    <View style={{marginTop:hp('1%')}}>
                        <Text style={{fontSize:16, fontWeight:'bold'}}>Layouts</Text>
                    </View>
                    {/* Layout Menu */}
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:hp('1%')}}>
                        <TouchableOpacity style={styles.layout1}>
                            <Image style={{height:hp('4%'), width:wp('8%')}} source={require('../../issets/filter1.png')}  />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.layout2}>
                        <Image style={{height:hp('4%'), width:wp('8%')}} source={require('../../issets/filter4.png')}  />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.layout2}>
                        <Image style={{height:hp('4%'), width:wp('8%')}} source={require('../../issets/filter2.png')}  />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.layout2}>
                        <Image style={{height:hp('4%'), width:wp('8%')}} source={require('../../issets/filter3.png')}  />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.layout2}>
                        <Image style={{height:hp('4%'), width:wp('8%')}} source={require('../../issets/filter5.png')}  />
                        </TouchableOpacity>
                    </View>
                    {/* End of Layou Mene */}
                    
                    <View style={{marginTop:hp('1%')}}>
                        <Text style={{fontSize:16, fontWeight:'bold'}}>By Price</Text>
                    </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text>$0.00</Text>
                            <Text>${multiSliderValue[0]}-${multiSliderValue[1]}</Text>
                        </View>
                    <View style={{alignItems:'center'}}>
                    <MultiSlider
                        values={[2, 200]}
                        sliderLength={320}
                        marker
                        onValuesChange={multiSliderValuesChange}
                        min={0}
                        max={500}
                        markerStyle={{
                            backgroundColor:'#3FAD72',
                        }}
                        selectedStyle={{
                            backgroundColor:'#3FAD72',
                            
                        }}
                        
                    />
                    </View>

                    <View style={{marginTop:hp('1%')}}>
                        <Text style={{fontSize:16, fontWeight:'bold'}}>Attributes</Text>
                    </View>


                    {/* Groups of Button */}

                    <FlatList
                        contentContainerStyle={{alignSelf: 'flex-start', marginTop: 20}}
                        data={service}
                        extraData={selected}
                        // horizontal
                        numColumns={3}
                        renderItem={({item}) => (
                        <TouchableOpacity
                            style={{
                            marginHorizontal: 5,
                            paddingHorizontal: 15,
                            paddingVertical: 7,
                            marginVertical: 4,
                            // height: hp('4%'),
                            backgroundColor: selected.includes(item.id)
                                ? '#3FAD72'
                                : '#fff',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 6,
                            borderWidth:1,
                            borderColor:'#F4F4F4'
                            }}
                            onPress={() => handleSelection(item)}>
                            <Text
                            style={{
                                color: selected.includes(item.id) ? '#FFFFFF' : '#000',
                            }}>
                            {item.re}
                            </Text>
                        </TouchableOpacity>
                        )}
                    />
                    {/* <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:hp('1%')}}>
                        <TouchableOpacity style={styles.airpodbutton}>
                            <Text>AIRPOD CASES</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.colorbutton}>
                            <Text>COLOR</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.rambutton}>
                            <Text>RAM</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:hp('1%')}}>
                        <TouchableOpacity style={styles.hardbutton}>
                            <Text>HARD DRIVE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.iphonebutton}>
                            <Text>IPHONE CASE VERSION</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:hp('2%')}}>
                        <TouchableOpacity style={styles.color2button}>
                            <Text style={{color:'#FFF'}}>COLOR</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.shippingbutton}>
                            <Text style={{color:'#FFF'}}>SHIPPING</Text>
                        </TouchableOpacity>
                    </View> */}
                    {/* End Of Groups button */}

                    <View style={{marginTop:hp('1%')}}>
                        <Text style={{fontSize:16, fontWeight:'bold'}}>By Category</Text>
                    </View>
                    <TouchableOpacity style={{borderRadius:10, elevation:0, borderColor:'#E8E8E8', borderWidth:1, marginTop:hp('1.5%')}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Icon style={{color:'#3FAD72', fontSize:25}} name="flash" type="Entypo" />
                                <Text style={{color:'#303030'}}>All Accessories</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Text style={{color:'grey', paddingRight:20}}>132</Text>
                                <Icon style={{color:'grey', fontSize:17}} name="right" type="AntDesign" />
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{borderRadius:10, elevation:0, borderColor:'#E8E8E8', borderWidth:1, marginTop:hp('1.5%')}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Icon style={{color:'#3FAD72', fontSize:25}} name="box" type="Feather" />
                                <Text style={{color:'#303030', paddingLeft:10}}>Home Products</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Text style={{color:'grey', paddingRight:20}}>6</Text>
                                <Icon style={{color:'grey', fontSize:17}} name="right" type="AntDesign" />
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{borderRadius:10, elevation:0, borderColor:'#E8E8E8', borderWidth:1, marginTop:hp('1.5%')}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Icon style={{color:'#3FAD72', fontSize:25}} name="shirt-outline" type='Ionicons' />
                                <Text style={{color:'#303030', paddingLeft:10}}>Clothing</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Text style={{color:'grey', paddingRight:20}}>19</Text>
                                <Icon style={{color:'grey', fontSize:17}} name="right" type="AntDesign" />
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{borderRadius:10, elevation:0, borderColor:'#E8E8E8', borderWidth:1, marginTop:hp('1.5%')}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Icon style={{color:'#3FAD72', fontSize:25}} name="flash" type="Entypo" />
                                <Text style={{color:'#303030'}}>Beauty Products</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Text style={{color:'grey', paddingRight:20}}>16</Text>
                                <Icon style={{color:'grey', fontSize:17}} name="right" type="AntDesign" />
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{borderRadius:10, elevation:0, borderColor:'#E8E8E8', borderWidth:1, marginTop:hp('1.5%')}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Icon style={{color:'#3FAD72', fontSize:25}} name="tablet-mobile-combo" type="Entypo" />
                                <Text style={{color:'#303030', paddingLeft:10}}>Electronic</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Text style={{color:'grey', paddingRight:20}}>16</Text>
                                <Icon style={{color:'grey', fontSize:17}} name="right" type="AntDesign" />
                            </View>

                        </View>
                    </TouchableOpacity>

                    <View style={{marginTop:hp('2%'), alignItems:'center'}}>
                        <Button title="Apply"  />
                    </View>



                    {/* ******** */}
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
    Image:{
        height:hp('11%'),
        width:wp('25%')
    },

    button8:{
        height:hp('11%'),
        width:wp('25%'),
        backgroundColor:'#3FAD72',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },

    buttonadd:{
        height:hp('11%'),
        width:wp('62%'),
        backgroundColor:'#3FAD72',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    layout1:{
        height:hp('6.5%'),
        width:wp('16%'),
        backgroundColor:'#3FAD72',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    layout2:{
        height:hp('6.5%'),
        width:wp('16%'),
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0.5,
        borderColor:'#E8E8E8'
    },
    airpodbutton:{
        height:hp('5.5%'),
        width:wp('38%'),
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#E8E8E8'
    },
    colorbutton:{
        height:hp('5.5%'),
        width:wp('25%'),
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#E8E8E8'
    },
    rambutton:{
        height:hp('5.5%'),
        width:wp('25%'),
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#E8E8E8'
    },
    iphonebutton:{
        height:hp('5.5%'),
        width:wp('55%'),
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#E8E8E8'
    },
    hardbutton:{
        height:hp('5.5%'),
        width:wp('35%'),
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#E8E8E8'
    },
    color2button:{
        height:hp('5.5%'),
        backgroundColor:'#3FAD72',
        width:wp('43%'),
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#E8E8E8'
    },
    shippingbutton:{
        height:hp('5.5%'),
        width:wp('43%'),
        backgroundColor:'#3FAD72',
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#E8E8E8'
    }

})

export default Filter;
