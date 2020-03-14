import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MessageChannel from '../components/MessageComponent';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LinksScreen() {
  return (

      <View style={{flex:1}}>
        <ScrollView>
          <MessageChannel/>
          <MessageChannel/>
          <MessageChannel/>
          <MessageChannel/>
          <MessageChannel/>
          <MessageChannel/>
          <MessageChannel/>
          <MessageChannel/>
          <MessageChannel/>


        </ScrollView>

      </View>

  );
   
}


