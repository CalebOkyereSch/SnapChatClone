    import React, { useState, useEffect } from 'react';
    import { Text, View, TouchableOpacity } from 'react-native';
    import ViewPager from '@react-native-community/viewpager'
    import { Camera } from 'expo-camera';
    import {Ionicons,Entypo,MaterialIcons,Feather} from '@expo/vector-icons';
    import HomeScreen from './screens/HomeScreen';
    import BottomCircle from './components/BottomCircle';
    import HeaderRight from './components/HeaderRight';
    import LinksScreen from './screens/LinksScreen'
    
export default function App(){

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  return (
     
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type}>
              <View style={{position:'absolute' ,zIndex:1,top:10}}>
                <HeaderRight/>
              </View>
                <ViewPager initialPage={1} style={{flex:1}}>

                  {/* Message View */}
                    <View key='1' style={{backgroundColor:'#eee',paddingTop:80}}>
                            <View style={{position:'absolute',top:22,right:10}}>
                              <Entypo 
                                name="new-message"
                                size={26}
                                color="#444 "
                              />
                            </View>


                            <LinksScreen/>
                    </View>


                  {/* Camera View */}
                    <View key='2' style={{backgroundColor:'transparent'}}>

                        <View style={{minHeight:200,justifyContent:'space-evenly',position:'absolute',right:10,top:20,alignItems:'center'}}>

                        <View style={{}}>

                          <TouchableOpacity style={{}} onPress={() => {
                            setType(
                              type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                            );
                          }}>

                                  <Feather 
                                      name="rotate-cw"
                                      size={26}
                                      color="#fff"
                                  />

                            </TouchableOpacity>
                            </View>
                              <View>
                                  <Ionicons 
                                      name="ios-flash"
                                      size={26}
                                      color="#fff"
                                    
                                  />
                              </View>
                              <View>
                                  <Ionicons
                                      name="ios-moon"
                                      size={26}
                                      color="#fff"
                                  />
                              </View>
                              <View>
                                  <MaterialIcons
                                      name="keyboard-arrow-down"
                                      size={26}
                                      color="#fff"
                                  />
                            </View>

                          </View>
                    </View>


                  {/* Status Page */}
                    <View key='3'style={{}}>
                              <HomeScreen/>
                    </View>

                    

                </ViewPager> 
                <View style={{position:'absolute', zIndex:1,bottom:10,width:'100%'}}>
                        <BottomCircle/>
                </View>

            </Camera>
        </View>

  );
}


 {/* <View style={{ flex: 1,backgroundColor: 'transparent', flexDirection: 'row' }}>

              <TouchableOpacity style={{ flex: 0.1,alignSelf: 'flex-end', alignItems: 'center' }} onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>

                

              </TouchableOpacity>
            </View>
          
          
          */}