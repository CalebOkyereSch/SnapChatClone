import React from 'react'
import { View, Text,Image} from 'react-native';
import StatusImage from '../components/StatusImage';
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';

export default function MessageComponent(){

    return(
        <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
            <View>
            <View style={{justifyContent:'center',alignItems:'center',borderWidth:3,width:80,height:80,borderRadius:100,borderColor:'#6f4685'}}>
                <Image 
                 source={require('../assets/images/3.jpg')}
                 resizeMode="cover"
                 style={{width:70,height:70,borderRadius:100}}

                />
            </View>
            </View>
            <View style={{justifyContent:'flex-end',marginLeft:5}}>
                <View style={{height:30}}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>Cabey</Text>
                </View>
                <View style={{flexDirection:'row',width:120,justifyContent:'space-evenly',alignItems:'center',}}>
                    <MaterialCommunityIcons
                        name="message-outline"
                        size={15}
                        color="#00f"
                    />
                    <Text style={{color:'#999'}}>Received . </Text>
                    <Text style={{color:'#999'}} >17h</Text>
                </View>
                {/* <View>
                    
                </View> */}
            </View>
        
        </View>
    )
}