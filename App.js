import React from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import {  Header, Left, Icon, Center, Right, Body } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



 const App=()=> {
  return (
    <View>
          <Header style={{backgroundColor:'transparent', elevation:0}}>
           <Left style={{flex:0.3}}>
            < Icon name='menu' />
           </Left>

           <Body style={{width:'80%', alignItems:'center'}}>
                <Image style={{width:wp('40%')}} resizeMode='contain' source={require('./issets/Main.png')} />
           </Body>

           <Right style={{flex:0.3}}>
             <Icon  name='cart'   />            
           </Right>
          </Header>

          {/* *************End of Header******* */}
        
        <View style={{marginHorizontal:wp('2%')}}>
           {/*  <= parent View  */}
            <View style={{flexDirection:'row', alignItems:'center' }}>
              <View style={styles.inputsearch}>
                  <View style={{marginHorizontal:wp('2%')}}><Icon name='search'  /></View>
                  <View>
                    <TextInput  style={styles.textinput}
                      placeholder='Search'
                    />
                  </View>
                  <View><Icon name='mic'  /></View>
                  <View><Icon name='camera'  /></View>
              </View>
                  <View>
                    <Icon name='scan' />
                  </View>
            </View>

          {/* <= End of parent View   */}
        </View>   
    </View>
  )
}

const styles = StyleSheet.create({
  inputsearch:{
    width:wp('75%'),
    height:hp('7%'),
    borderWidth:1,
    borderRadius:10,
    borderColor:'lightgrey',
    flexDirection:'row',
    alignItems:'center'

  },
  textinput:{
    width:wp('45%')
  }

})

export default App;