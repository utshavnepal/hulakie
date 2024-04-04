import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';

const RegistrationOption = ({navigation}) => {
  return (
    <View style={{marginTop:30, paddingHorizontal:20}}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{justifyContent:'center', alignItems:'center',paddingLeft:30 }}>
    <Image style={{height:400,  width:400, resizeMode:'contain'}} source={require('../../assets/regoptions.png')}/>
    </View>
   
     <View>
     <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:36, fontWeight:'bold'}}>
            Let's meet new 
        </Text>
      </View>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:36, fontWeight:'bold'}}>
            people around us. 
        </Text>
      </View>

     </View>


     <View style={{marginTop:20}}>
     <View style={{alignItems:'center', justifyContent:'center',marginTop:20}}>
<TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
<View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'#f1497f', height:50, width:300, borderRadius:20, elevation:26, shadowColor:'#FFE8F2'}}>
    <Icon name='login' type='antdesign' color='#fdf7fd' style={{marginLeft:20}}/>
    <View style={{marginRight:50}}>
    <Text style={{fontSize:20, fontWeight:'bold', color:'#fdf7fd'}}>
    Login
    </Text>
    </View>
</View>

</TouchableOpacity>


        </View>





        <View style={{alignItems:'center', justifyContent:'center',marginTop:20}}>
<TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
<View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'white', height:50, width:300, borderRadius:20, elevation:26, shadowColor:'#FFE8F2', borderWidth:3, borderColor:'#ffe8f2'}}>
    <Icon name='login' type='antdesign' color='#f1497f' style={{marginLeft:20}}/>
    <View style={{marginRight:20}}>
    <Text style={{fontSize:20, fontWeight:'bold', color:'#f1497f'}}>
    Register
    </Text>
    </View>
</View>
</TouchableOpacity>


        </View>






        <View style={{alignItems:'center', justifyContent:'center',marginTop:20}}>
<TouchableOpacity onPress={()=> navigation.reset({
                index:0,
                routes:[{name:'Homelogged'}]
                })}>
<View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'white', height:50, width:300, borderRadius:20, elevation:26, shadowColor:'#FFE8F2', borderWidth:3, borderColor:'#ffe8f2'}}>
    <Icon name='login' type='antdesign' color='#f1497f' style={{marginLeft:20}}/>
    <View style={{marginRight:20}}>
    <Text style={{fontSize:20, fontWeight:'bold', color:'#f1497f'}}>
    Continue with Google
    </Text>
    </View>
</View>
</TouchableOpacity>


        </View>

     </View>
    </ScrollView>


    </View>
  )
}

export default RegistrationOption

const styles = StyleSheet.create({})