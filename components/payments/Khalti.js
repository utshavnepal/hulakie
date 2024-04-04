import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const Khalti = ({navigation}) => {



  return (
    <View style={{paddingTop:40}}>
      <View style={{padding:10, alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:24, fontWeight:'bold', color:'#6e47fe'}}>
          Choose your payment  options
        </Text>
      </View>


      <View style={{marginTop:20, borderWidth:1, borderColor:'#9d9ca1'}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Khaltiwallet')}>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', padding:10}}>
<View>
  <Image source={require('../../assets/khaltilogo.png')} style={{height:80, width:80, resizeMode:'contain'}} />
</View>
<View>
<Text style={{fontSize:16, fontWeight:'bold', color:'#6e47fe'}}>
  Pay with Khalti (without app)
</Text>
</View>
</View>
      </TouchableOpacity>

      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate("Stripe")}>
          <Text>
            Stripe
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Khalti

const styles = StyleSheet.create({})