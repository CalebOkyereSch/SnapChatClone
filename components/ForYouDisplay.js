import React from 'react';
import {View} from 'react-native';
import ForYouComponent from '../components/ForYouComponent';

export default function ForYouDisplay(){

    return(
        <View style={{flexDirection:'row'}}>
                <ForYouComponent/>
                <ForYouComponent/>
        </View>
    )
}