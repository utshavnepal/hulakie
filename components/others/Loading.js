import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={{height:'100%', backgroundColor:'#fdf7fd'}}>
  <View style={{backgroundColor:'#fac3d8', borderRadius:90, height:130, width:130, position:'absolute', top:-100/3, left:-100/3,}}>

  </View>
  <View style={{position:'absolute', top:0, right:0, left:0, bottom:10, alignItems:'center', justifyContent:'center'}}>
  <ActivityIndicator size={60} color="#f1497f" style={{marginBottom:10}} />
  <View style={{alignItems:'center', justifyContent:'center',   padding:30, backgroundColor:'#f1497f', borderRadius:30}}>
<Text style={{fontSize:18, fontWeight:'600', color:'white'}}>
  Wait while loading
</Text>


    </View>
  </View>
 
    <View style={{backgroundColor:'#ded2fa', borderRadius:90, height:130, width:130, position:'absolute', bottom:-100/3, right:-100/3,}}>

</View>
  </View>
  )
}

export default Loading

const styles = StyleSheet.create({})