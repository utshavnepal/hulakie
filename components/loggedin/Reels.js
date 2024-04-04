import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import Feather  from 'react-native-vector-icons/Feather'
import ReelComponent from './reels/ReelComponent';
export default function Reels() {

  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height
  return (
    <View style={{width:width, height:height, backgroundColor:'black'}}>
    <View style={{position:"absolute", top:0, left:0, right:0, flexDirection:'row', justifyContent:'space-between', zIndex:1, padding:10, paddingVertical:20}}>
      <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>
        Reels
      </Text>
      <Feather name='camera' style={{fontSize:25, color:'white'}}/>
    </View>

 
      <ReelComponent/>
   
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
