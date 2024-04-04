import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const Nousers = () => {
  return (
    <View style={{backgroundColor:'#fdf7fd', height:'100%'}}>
 <View style={{backgroundColor:'#fac3d8', borderRadius:90, height:130, width:130, position:'absolute', bottom:-100/2, left:-100/2,}}>

</View>
 <View style={{backgroundColor:'#ded2fa', borderRadius:10, height:18, width:18, position:'absolute', top:height/5, left:2,}}>

</View>
 <View style={{backgroundColor:'#fac3d8', borderRadius:12, height:24, width:24, position:'absolute', top:height/14, left:width/15, right:width/2}}>

</View>
<View style={{backgroundColor:'#ded2fa', borderRadius:50, height:100, width:100, position:'absolute', top:height/16,  right:-width/5}}>

</View>
<View style={{backgroundColor:'#fac3d8', borderRadius:15, height:30, width:30, position:'absolute', top:height/9,  right:width/4}}>

</View>

<View style={{backgroundColor:'#ded2fa', borderRadius:9, height:18, width:18, position:'absolute', bottom:height/30,  right:width/6}}>

</View>
<View style={{backgroundColor:'#ded2fa', borderRadius:19, height:38, width:38, position:'absolute', bottom:height/10,  left:width/6}}>

</View>
<View style={{backgroundColor:'#ded2fa', borderRadius:100, height:150, width:150, position:'absolute', bottom:height/5*2,   right:width/2, }}>

</View>
<View style={{backgroundColor:'#fac3d8', borderRadius:100, height:150, width:150, position:'absolute', top:height/5*2,   left:width/2, }}>

</View>
<View style={{alignItems:'center', justifyContent:'center', height:'100%'}}>
<View style={{ alignItems:'center', justifyContent:'center',   padding:30, backgroundColor:'#f1497f', borderRadius:30}}>
<View style={{alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
<Icon type='foundation' name='alert' size={36} color='white'/>
<Text style={{fontSize:18, fontWeight:'bold', color:'white', paddingHorizontal:20}}>
  OOPS!!
</Text>
</View>

<View style={{alignItems:'center', justifyContent:'center'}}>
<Text style={{fontSize:18, fontWeight:'400', color:'white', paddingHorizontal:20, width:250, marginTop:10, textAlign:'center'}}>
  No match found in your area. Continue browsing, People may be online anytime soon !!
</Text> 
</View>



    </View>
    </View>
    </View>
  )
}

export default Nousers

const styles = StyleSheet.create({})