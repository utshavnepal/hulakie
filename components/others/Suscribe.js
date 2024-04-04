import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
const Suscribe = () => {
  return (
    <View style={{backgroundColor:'#fdf7fd', height:'100%'}}>
      <View style={{backgroundColor:'#fac3d8', borderRadius:90, height:130, width:130, position:'absolute', bottom:-100/2, left:-100/2,}}>

</View>
 <View style={{backgroundColor:'#ded2fa', borderRadius:10, height:18, width:18, position:'absolute', top:height/20, left:width/2, right:width/2}}>

</View>
 <View style={{backgroundColor:'#fac3d8', borderRadius:12, height:24, width:24, position:'absolute', top:height/12, left:width/15, right:width/2}}>

</View>
<View style={{backgroundColor:'#ded2fa', borderRadius:40, height:80, width:80, position:'absolute', top:height/20,  right:-width/6}}>

</View>
<View style={{backgroundColor:'#fac3d8', borderRadius:24, height:48, width:48, position:'absolute', top:height/12*2,  right:width/4}}>

</View>

<View style={{backgroundColor:'#ded2fa', borderRadius:9, height:18, width:18, position:'absolute', bottom:height/20,  right:width/6}}>

</View>
<View style={{backgroundColor:'#ded2fa', borderRadius:19, height:38, width:38, position:'absolute', bottom:height/3,  left:width/6}}>

</View>

<View style={{alignItems:'center', justifyContent:'center', height:'100%'}}>
<View style={{alignItems:'center', justifyContent:'center', marginBottom:100,  padding:30, backgroundColor:'#f1497f', borderRadius:30}}>
<Text style={{fontSize:18, fontWeight:'600', color:'white'}}>
  Suscribe To Acess Features
</Text>


    </View>
<TouchableOpacity>
<View style={{alignItems:'center', justifyContent:'center', padding:20, backgroundColor:'#6e47f3', borderRadius:20}}>
    <Text style={{fontSize:18, fontWeight:'bold', color:'white',}}>
  Get Now 
</Text>
    </View>
</TouchableOpacity>
 
</View>
    </View>
  )
}

export default Suscribe

const styles = StyleSheet.create({})