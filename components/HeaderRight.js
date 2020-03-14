import React from 'react';
import {View,Text,Image,TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Directions } from 'react-native-gesture-handler';

export default function HeaderRight(){
    return(
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:40,marginTop:5}}>
                    <View style={{marginHorizontal:5}}>
                        <Image 
                            source={require('../assets/images/9.png')}
                            style={{height:40,width:40}}
                            resizeMode="contain"
                        />
                    </View>

            <View style={{flexDirection:'row',borderRadius:50,height:40,width:270,justifyContent:'space-between',padding:10,alignItems:'center',backgroundColor:'rgba(180,180,180,0.4)',paddingHorizontal:20 }}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Ionicons 
                        name="ios-search"
                        size={23}
                        color="#fff"
                    />
                    <Text style={{marginLeft:5,fontWeight:'bold',color:'#aaa',fontSize:20}}>Search</Text>
                </View>
                <TextInput/>
                <View>
                    <Ionicons
                        name="ios-person-add"
                        size={26}
                        color="#fff"
                    />
                </View>
            </View>

</View>
        
    );
}