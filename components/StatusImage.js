import React from 'react';
import {View,Image,Text} from 'react-native';


export default function StatusImage(){


    return (

        <View style={{alignItems:'center',marginHorizontal:5,marginVertical:5}}>
            <View style={{justifyContent:'center',alignItems:'center',borderWidth:3,width:80,height:80,borderRadius:100,borderColor:'#6f4685'}}>
                <Image 
                 source={require('../assets/images/3.jpg')}
                 resizeMode="cover"
                 style={{width:70,height:70,borderRadius:100}}

                />
            </View>
            <View style={{}}>
            <Text style={{fontWeight:'bold',fontSize:13}}>Cabey</Text>
            </View>

        </View>
    )
}