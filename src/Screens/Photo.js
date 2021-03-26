import React,{ useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import {  Header, Left, Icon, Center, Right, Body, Card } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as ImagePicker from 'react-native-image-picker';
import { check } from 'react-native-permissions';

const Photo=()=> {
    const [addImage, setAddImage] = useState({})
    console.log('check', addImage)

    const TestCamera = () => {
        console.log("Test");
         let options = {
           storageOptions: {
             skipBackup: true,
             path: 'images',
           },
         };
         ImagePicker.launchCamera(options, (response) => {
           console.log('Response = ', response);
     
           if (response.didCancel) {
             console.log('User cancelled image picker');
           } else if (response.error) {
             console.log('ImagePicker Error: ', response.error);
           } else if (response.customButton) {
             console.log('User tapped custom button: ', response.customButton);
             alert(response.customButton);
           } else {
             const source = { uri: response.uri };
             console.log('response', JSON.stringify(response));
             setAddImage(response);
           }
         });
         console.log("Helghghghghlo", addImage.length)
       }
       const check=()=>{
           console.log('adil', addImage)
       }

    return (
        <View>
            <Header style={{backgroundColor:'transparent', elevation:0, borderBottomWidth:3, borderBottomColor:'#F1F2FC'}}>
                <Left style={{flex:0.3}}>
                    <Icon name='arrow-back' />
                </Left>
                <Body style={{width:'80%', alignItems:'center'}}>
                    <Text>Photo</Text>

                </Body>
                <Right style={{flex:0.3, flexDirection:'row', alignItems:'center'}}>
                    <Icon style={{fontSize:21, paddingRight:10}} name="chatbox-outline"  type="Ionicons" />
                    <Icon style={{fontSize:18}} name="questioncircleo" type="AntDesign" />
                </Right>

                </Header>
                <View >
                    <View>
                        <Image style={{height:hp('70%'), width:wp('100%')}}  source={{uri: addImage.uri}} />
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:hp('8%')}}>
                        <TouchableOpacity style={styles.btn1}  onPress={TestCamera}>
                            <Text style={{color:'#3FAD72'}}>Retake</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn2} onPress={check}>
                            <Text style={{color:'#FFF'}}>Use Photo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
 btn1 :{
     height:hp('7%'),
     width:wp('42%'),
     borderWidth:1,
     borderRadius:10,
     justifyContent:'center',
     alignItems:'center',
     borderColor:'#3FAD72'
 },
 btn2 :{
    height:hp('7%'),
    width:wp('42%'),
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#3FAD72'
}

})

export default Photo;