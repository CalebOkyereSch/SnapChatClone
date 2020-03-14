import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';
import QuickAddComponent from '../components/QuickAddComponent';
import StatusImage from '../components/StatusImage';
import SubscriptionComponent from '../components/SubscriptionComponent';
import ForYouComponent from '../components/ForYouDisplay';
import ForYouDisplay from '../components/ForYouDisplay';
// import * as WebBrowser from 'expo-web-browser';
import BottomCircle from '../components/BottomCircle';

// import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={{flex:1,backgroundColor:'#eee',paddingTop:80}}>
      <View style={{flex:10}}>  
      <View style={{marginRight:10,position:'absolute',top:-55,right:5}}>
                    <Ionicons
                        name="ios-more"
                        size={36}
                        style={{color:"#999"}}
                    />
            </View>
           
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Friends status view */}
        <View style={{}}>
          <View style={{}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Friends</Text>
          </View >
          <ScrollView horizontal style={{height:110}} showsHorizontalScrollIndicator={false}>
            <StatusImage />
            <StatusImage />
            <StatusImage />
            <StatusImage />
            <StatusImage />
          </ScrollView>

        </View>

        {/* Quick Add View */}
        <View>
          <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Text style={{fontSize:20, fontWeight:'bold'}}>Quick Add</Text>
              <Ionicons 
                name="ios-arrow-forward"
                size={15}
                style={{marginLeft:10}}
              />
            </View>
            <View>
              <Text style={{fontWeight:'bold', color:'#aaa'}}>Hide</Text>
            </View>
          </View>
          
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{height:100,alignItems:'center',flexDirection:'row'}}>
              <QuickAddComponent />
              <QuickAddComponent />
              <QuickAddComponent />
              <QuickAddComponent />
              <QuickAddComponent />
              <QuickAddComponent />
              </View>
            </ScrollView>
          
        </View>

        {/* Subscriptions */}

        <View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Subscriptions</Text>
            <Ionicons
              name="ios-arrow-forward"
              size={15}
              style={{marginLeft:5, marginTop:3}}
            />
          </View>
        </View>
        <View style={{height:200}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{alignItems:'center',flexDirection:'row'}}>
             <SubscriptionComponent />
             <SubscriptionComponent />
             <SubscriptionComponent />
             <SubscriptionComponent />
             <SubscriptionComponent />
             </View>
          </ScrollView>
        </View>
        {/* For You  */}
        <View>
          <View>
            <Text style={{fontSize:20, fontWeight:'bold'}} >For You</Text>
          </View>
        </View>
        <View>
              <ForYouDisplay/>
              <ForYouDisplay/>
              <ForYouDisplay/>
              <ForYouDisplay/>
              <ForYouDisplay/>
        </View>
        
      </ScrollView>
      </View>
      

     
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
