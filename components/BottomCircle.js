import React from 'react';
import {View,Text} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


export default function BottomCircle(){

    return(
        <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'100%',background:'transaparent',alignItems:'center',flex:1}}>
            <View>
                <MaterialIcons 
                    name="chat-bubble"
                    size={30}
                    color="#fff"
                />
                <Text style={{color:'#fff', fontWeight:'bold'}}>Chat</Text>
            </View>
            <View style={{width:80,height:80,borderRadius:100,borderWidth:6,borderColor:'#fff'}}>
            
            </View>
            <View>
                <Ionicons 
                    name="ios-browsers"
                    size={30}
                    color="#fff"
                />
                <Text style={{color:'#fff', fontWeight:'bold'}}>Discover</Text>
            </View>
        </View>
    )
}