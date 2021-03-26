import React,{ useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import {  Header, Left, Icon, Center, Right, Body } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import StepIndicator from 'react-native-step-indicator';
import OnHold from '../../components/OnHold'
import Delivered from '../../components/Delivered'

const labels = ["Pending Payments","On Hold","Processing","Delivered"];
const thirdIndicatorStyles = {
    stepIndicatorSize: 20,
    currentStepIndicatorSize: 20,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#7eaec4',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#7eaec4',
    stepStrokeUnFinishedColor: '#dedede',
    separatorFinishedColor: '#7eaec4',
    separatorUnFinishedColor: '#dedede',
    stepIndicatorFinishedColor: '#7eaec4',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: 'transparent',
    stepIndicatorLabelFinishedColor: 'transparent',
    stepIndicatorLabelUnFinishedColor: 'transparent',
    labelColor: '#999999',
    labelSize: 15,
    currentStepLabelColor: '#7eaec4',
  };

const TrackOrderDelivered=()=> {
    const [onHold, setOnHold]= useState(false);
    const [delivered, setDeliverd]= useState(true);    

    return (
        <ScrollView>
            <Header style={{backgroundColor:'transparent', elevation:0,}}>
                <Left style={{flex:0.3}}>
                    <Icon name='arrow-back' />
                </Left>
                <Body style={{width:'80%', alignItems:'center'}}>
                    <Text>Order Detail</Text>

                </Body>
                <Right style={{flex:0.3}}>
                    
                </Right>

            </Header>
            <View>

                <View style={{alignItems:'center', marginTop:hp('4%')}}>
                    <Text style={{fontSize:16}}>
                        Your order code: <Text style={{color:'#3FAD72'}}>#63134236</Text>
                    </Text>
                </View>

                <View style={{flexDirection:'row', marginTop:hp('2%'), justifyContent:'center'}}>
                    <View style={styles.item}>
                        <Text style={{color:'#3FAD72'}}>3 ITEMS</Text>
                    </View>
                    <View style={styles.total}>
                        <Text style={{color:'#3FAD72'}}>$264.74</Text>
                    </View>
                </View>

                
                    <View style={{marginTop:hp('5%'), marginLeft:20}}>
                        <StepIndicator
                            customStyles={thirdIndicatorStyles}
                            currentPosition={1}
                            labels={labels}
                            direction='vertical'
                            stepCount={4}
                            
                        />
                
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>{setDeliverd(false);  setOnHold(true)}}>
                            <Text>Check</Text></TouchableOpacity>
                            <TouchableOpacity onPress={()=> {setDeliverd(true); setOnHold(false)}}>
                                <Text>Chck 2</Text>
                            </TouchableOpacity>
                    </View>
                <View>
                {onHold? <OnHold  /> : <Delivered   />}

                </View>

                    
                


            </View>
            {/* **************** */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
item:{
    height:hp('5%'),
    width:wp('38%'),
    backgroundColor:'#E4F2F0',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
},
total:{
    height:hp('5%'),
    width:wp('38%'),
    backgroundColor:'#E4F2F0',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    marginLeft:wp('3%')
},


})

export default TrackOrderDelivered;