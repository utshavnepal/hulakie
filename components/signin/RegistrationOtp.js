import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Icon } from '@rneui/themed'
const RegistrationOtp = ({navigation, route}) => {
  const emailid = route.params.emailid
  const data = route.params.data
const [otp, setOtp] = useState()
  const otpEntered = async ()=>{
    
  if (Number(otp) === data.Otp){
    setOtp('')
    navigation.navigate('Registrationdetail',{emailid:emailid, data:data})
  }else{
    
    Alert.alert(
      'Warning',
      "enter otp manually",
      [
      { text:"OK"}
      ]
    
    )
  }
}
  return (
    <View style={{backgroundColor:'#fdf7fd', paddingTop:40}}>
    <View style={{ alignItems:'flex-start', margin:10}}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
    <Icon type='antdesign' name='arrowleft' size={36}/>
    </TouchableOpacity>
    </View>
    <View  style={{alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:20, fontWeight:'800', color:'#6e47f3'}}>Enter 4-digits Code</Text>
    </View>
      <View style={{marginTop:30, paddingHorizontal:30, alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:14, color:'#9d9ca1'}}>
            Enter otp code we send to {emailid}. Not found ? try checking in spam folder. 
        </Text>
        
      </View>
      <View >
      <View style={{alignItems:'center', justifyContent:"center", marginTop:40}}>
<View style={{backgroundColor:'#ffe8f2',  height:50, borderRadius:10, alignItems:'center', justifyContent:'center'}}>
                <TextInput  value={otp} onChangeText={(text)=>setOtp(text)} keyboardType='phone-pad' style={{fontSize:30, width:200, alignItems:'center', justifyContent:'center'}}  maxLength={4}    disableFullscreenUI={true}     />
            </View>
</View>
      </View>


      <View style={{ alignItems:'flex-end', marginTop:40, marginHorizontal:30}}>
    <View style={{borderRadius:30, height:60, width:60, backgroundColor:'#f1497f', alignItems:'center', justifyContent:'center'}}>
    <TouchableOpacity onPress={otpEntered}>
    <Icon color={'white'} type='antdesign' name='arrowright' size={36}/>
    </TouchableOpacity>
    </View>
    
    </View>

      <View style={{margin:10}}>
        <TouchableOpacity>
          <Text style={{color:"#F1497F", fontWeight:'bold', fontSize:14}}>
            Resend otp
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RegistrationOtp

const styles = StyleSheet.create({})