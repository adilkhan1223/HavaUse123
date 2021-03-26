import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {  Header, Left, Icon, Center, Right, Body } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SwipeButton from 'rn-swipe-button';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';


const ScanPakages=()=> {
    const onSuccess=() =>{
        console.log("compelte")
    }
    return (
        <View>
            <Header style={{backgroundColor:'transparent', elevation:0}}>
                <Left style={{flex:0.3}}>
                    <Icon name='menu' />
                </Left>
                <Body style={{width:'80%', alignItems:'center'}}>
                    <Text style={{fontWeight:'bold'}}>SCAN PAKAGES</Text>

                </Body>
                <Right style={{flex:0.3}}>
                    
                </Right>

            </Header>
            <View>
                {/* ********* */}
                <View style={{height:hp('30%')}}>
                <QRCodeScanner
                    onRead={onSuccess}
                    // cameraStyle={{overflow: 'hidden'}}
                    // cameraProps={{ratio:'1:1'}}
                    // containerStyle={{  }}
                   cameraStyle={{ height: 100, marginTop: 20, width: 400, }}
                    // flashMode={RNCamera.Constants.FlashMode.torch}
                    // topContent={
                    // <Text style={styles.centerText}>
                    //     Go to{' '}
                    //     <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                    //     your computer and scan the QR code.
                    // </Text>
                    // }
                    // bottomContent={
                    // <TouchableOpacity style={styles.buttonTouchable}>
                    //     <Text style={styles.buttonText}>OK. Got it!</Text>
                    // </TouchableOpacity>
                    // }
                />
                </View>

                <View style={{marginHorizontal:wp('3%')}}>
                   <View style={{marginTop:hp('3%')}}>
                       <Text style={{fontWeight:'bold'}}>
                           Tap to unscan pakage
                       </Text>
                    </View> 

                    <View style={{flexDirection:'row', marginTop:hp('1%')}}>
                        <View style={styles.count}>
                            <Text style={{color:'#FFF', fontSize:12}}>1</Text>
                        </View>
                        <View>
                            <Text style={{paddingLeft:10}}>114 Village Post Road</Text>
                            <Text style={{paddingLeft:10, marginTop:hp('1%')}}>Christie Cheyne</Text>
                        </View>
                    </View>

                    {/* Buttons */}
                    <View style={styles.btn1}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <View style={styles.check}></View>
                                <View>
                                    <Text style={{paddingLeft:15}}>(M) Box</Text>
                                </View>
                            </View>

                            <View>
                                <Text>TBA046914515204</Text>
                            </View>
                            
                        </View>
                    </View>
                    {/* button Pick up pakage */}
                    <TouchableOpacity style={styles.btn2}>
                        <Text style={{color:'#444444'}}>Pick up Pakage</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn3}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Text style={{color:'#444444'}}>Return pakages</Text>
                            <Icon style={{color:'#3FAD72'}} name="check" type="AntDesign"  />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn4}>
                        <Text style={{color:'#444444'}}>Deliver pakages</Text>
                    </TouchableOpacity>


                </View>

                <View style={{alignItems:'center', marginTop:hp('2%')}}>
                    <SwipeButton
                        disabled={false}
                        //disable the button by doing true (Optional)
                        swipeSuccessThreshold={50}
                        height={hp('8%')}
                        //height of the button (Optional)
                        width={330}
                        //width of the button (Optional)
                        title="Swipe To Confirm"
                        //Text inside the button (Optional)
                        //thumbIconImageSource={thumbIcon}
                        //You can also set your own icon (Optional)
                        onSwipeSuccess={() => {
                        alert('Submitted Successfully!');
                        }}
                        titleColor="#FFF"
                        
                        thumbIconComponent={false}
                        //After the completion of swipe (Optional)
                        railFillBackgroundColor="#FFF" //(Optional)
                        railFillBorderColor="#000" //(Optional)
                        thumbIconBackgroundColor="#3FAD72" //(Optional)
                        thumbIconBorderColor="#3FAD72" //(Optional)
                        railBackgroundColor="#3FAD72" //(Optional)
                        railBorderColor="transparent" //(Optional)
                    />
                </View>


                {/* ******** */}
            </View>
            {/* ********** */}
        </View>
    )
}

const styles = StyleSheet.create({
    centerText: {
        
        fontSize: 18,
        padding: 32,
        color: '#777'
      },
      textBold: {
        fontWeight: '500',
        color: '#000'
      },
      buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
      },
      buttonTouchable: {
        padding: 16
      },

    count:{
        height:hp('2.5%'),
        width:wp('5.3%'),
        backgroundColor:'#000',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    btn1:{

        height:hp('8%'),
        width:wp('94%'),
        borderWidth:1,
        borderRadius:10,
        marginTop:hp('1%'),
        borderColor:'lightgrey',
        justifyContent:'center',
        paddingHorizontal:10
    },
    check:{
        height:hp('2.5%'),
        width:wp('5.3%'),
        borderWidth:1,
        backgroundColor:'#FFF',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    btn2:{
        height:hp('8%'),
        width:wp('94%'),
        borderWidth:1,
        borderRadius:10,
        marginTop:hp('2.5%'),
        borderColor:'lightgrey',
        justifyContent:'center',
        paddingLeft:25

    },
    btn3:{
        height:hp('8%'),
        width:wp('94%'),
        borderWidth:1,
        borderRadius:10,
        marginTop:hp('1%'),
        borderColor:'#3FAD72',
        justifyContent:'center',
        paddingLeft:25,
        paddingRight:20
    },
    btn4:{
        height:hp('8%'),
        width:wp('94%'),
        borderWidth:1,
        borderRadius:10,
        marginTop:hp('1%'),
        borderColor:'lightgrey',
        justifyContent:'center',
        paddingLeft:25
    }


})

export default ScanPakages;
