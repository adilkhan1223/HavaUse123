import React from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'

export default function Tab(props) {
    return (
        <TouchableOpacity onPress = {props.onPress} style = {{borderRadius:20,backgroundColor:props.backgroundColor,height:70,width:160,justifyContent:"center",alignItems:"center"}}>
          <Text>{props.Text}</Text>
        </TouchableOpacity>
    )
}
