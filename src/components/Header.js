import React from 'react'
import { View, Text } from 'react-native'
import {  Header, Left, Icon, Center, Right, Body } from 'native-base';

const Headers = () => {
    return(
        <Header style={{backgroundColor:'transparent', elevation:0}}>
        <Left style={{flex:0.3}}>
            <Icon name='arrow-back' />
        </Left>
        <Body style={{width:'80%', alignItems:'center'}}>
            <Text>Havazuse Plus Access</Text>

        </Body>
        <Right style={{flex:0.3}}>
            
        </Right>

      </Header>
    )
}

export default Headers;
