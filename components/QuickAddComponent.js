import React from 'react'; 
import {View,Text,Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function QuickAddComponent(){

    return(

        <View style={{flexDirection:'row',backgroundColor:'#fff',borderRadius:5,marginHorizontal:20,height:87,padding:5,justifyContent:'space-between',alignItems:'center',width:300,borderWidth:0.3,borderColor:'#eee'}}>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <View style={{}}>
                        <Image
                            source={require('../assets/images/4.jpg')}
                            style={{width:60,height:60,borderRadius:100,marginHorizontal:10,alignItems:'center',justifyContent:'center'}}
                        />
                    </View>
                    <View>
                        <Text  style={{fontSize:15}}>Fadeel</Text>
                        <Text  style={{fontSize:10,color:'#aaa'}}>Fadell1555</Text>
                    </View>
          </View>
          <View style={{flexDirection:'row',width:90,justifyContent:'space-between'}}>
                <View style={{height:30,width:70,borderRadius:50,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#6f4685'}}>
                    <Ionicons 
                        name="ios-add"
                        size={23}
                        style={{color:'#fff',marginHorizontal:3}}
                    />
                    <Text style={{color:'#fff',fontWeight:'bold'}}>Add</Text>
                </View>
                <Ionicons 
                    name="ios-close"
                    size={20}
                    style={{position:'relative',bottom:10,color:'#aaa'}}
                />
          </View>

        </View>
    )
}