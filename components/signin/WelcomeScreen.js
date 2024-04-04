import { ScrollView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'



const Width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{marginTop:30, paddingHorizontal:20}}>
   <ScrollView>
    <View style={{ borderRadius:20}}>
        <Image style={{height:500, width:350, resizeMode:'contain'}} source={require('../../assets/regprofile.png')}/>
    </View>
    <View style={{ alignItems:'center', marginTop:10}}>
<View >
    <Text style={{fontSize:28, fontWeight:'bold'}}>
        Explore someone new
    </Text>
</View>
<View style={{ alignItems:'center', marginTop:10}}>
    <Text style={{fontSize:16, color:'#9d9ca1'}}>Interact with people </Text>
    <View>
        <Text  style={{fontSize:16, color:'#9d9ca1'}}>
            around us
        </Text>
    </View>
</View>

    </View>



    <View style={{alignItems:'center',  marginTop:100}}>
    <TouchableOpacity onPress={()=>navigation.navigate('Registerationoption')}>
        <View style={{backgroundColor:'#EA4689', height:50, width:150, borderRadius:30, alignItems:'center', justifyContent:'center', elevation:6, shadowColor:'#FFE8F2'}}>
            
                <Text style={{fontSize:18, fontWeight:'bold', color:'#fdf7fd'}}>
                    Continue
                </Text>
           
        </View>
        </TouchableOpacity>
    </View>
   </ScrollView>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})