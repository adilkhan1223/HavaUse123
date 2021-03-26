import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {  Header, Left, Icon, Center, Right, Body } from 'native-base';



const Chat=()=> {
    return (
        <View>
            <Header style={{backgroundColor:'transparent', elevation:0}}>
                <Left style={{flex:0.3}}>
                    <Icon name='arrow-back' />
                </Left>
                <Body style={{width:'80%', alignItems:'center'}}>
                    <Text>Customer Support</Text>

                </Body>
                <Right style={{flex:0.3}}>
                    
                </Right>

            </Header>
            {/* ************* */}
            <View>

            </View>
            {/* ***************** */}
        </View>
    )
}

const styles = StyleSheet.create({


})

export default Chat;