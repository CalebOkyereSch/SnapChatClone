import React from 'react';
import {View,Text,ImageBackground} from 'react-native';

export default function ForYouComponent(){

    return(
        <ImageBackground source={require('../assets/images/2.jpg') } style={{height:250,width:176,justifyContent:'flex-end',margin:3}} imageStyle={{borderRadius:10}}>
            <View>
                <Text  style={{fontWeight:'bold', color:'#fff',fontSize:15,marginBottom:10}}>Does the price really affect seating comfort</Text>
            </View>

        </ImageBackground>
    )
}