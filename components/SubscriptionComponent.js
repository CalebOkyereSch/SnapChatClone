import React from 'react';
import {ImageBackground,View,Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function SubscriptionComponent(){


    return(
        <View > 
            <ImageBackground style={{height:140,width:100,justifyContent:'space-between',marginHorizontal:10}} source={require('../assets/images/1.jpg')} imageStyle={{borderRadius:10}}> 
                    <View style={{flexDirection:'row', justifyContent:'flex-end',paddingRight:5}}>
                        <Ionicons 
                            name="ios-bookmark"
                            size={20}
                            style={{color:'#fff',}}
                        />
                    </View>
                    <View style={{marginBottom:5}}>
                        <Text style={{fontWeight:'bold', color:'#fff',fontSize:14}}>Nii Amu.</Text>
                        <Text style={{fontSize:12,color:"#fff"}}>1h ago</Text>
                    </View>

            </ImageBackground>
        </View>
    )
}