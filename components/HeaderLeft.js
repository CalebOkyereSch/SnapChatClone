import React from 'react';
import {View,Text,Image} from 'react-native';
import {Ionicons,Entypo,MaterialIcons,Feather} from '@expo/vector-icons';
import { Directions } from 'react-native-gesture-handler';

export default function HeaderLeft(){
    return(

 
            <View style={{minHeight:100,justifyContent:'space-evenly'}}>
                <View>
                <Feather 
                        name="rotate-cw"
                        size={26}
                        color="#fff"
                    />
                </View>
                <View>
                    <Entypo 
                        name="flash"
                        size={26}
                        color="#fff"
                    />
                </View>
                    <Ionicons
                        name="outline-moon"
                        size={26}
                        color="#fff"
                    />
                </View>
                <View>
                    <MaterialIcons
                        name=""
                        size={26}
                        color="#fff"
                    />
        

                </View>

           

    );
}