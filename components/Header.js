import React from 'react';
import {View,Text,Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Directions } from 'react-native-gesture-handler';

export default function Header(){
    return(
        <View style={{flexDirection:'row',borderRadius:20,height:30,justifyContent:'space-between',padding:10}}>
                <View style={{flexDirection:'row'}}>
                    <Ionicons 
                        name="ios-search"
                        size={26}
                    />
                    <Text>Search</Text>
                </View>
                <View>
                    <Ionicons
                        name="ios-person-add"
                        size={26}
                    />
                </View>
        </View>
       
    );
}