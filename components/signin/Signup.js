import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Icon } from '@rneui/themed';
import axios from 'axios';

const Signup = ({navigation}) => {
  const [emailid, setEmailid] = useState('')

  const emailSetup = async ()=>{
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    if(reg.test(emailid) ===false){
       console.log('false')
    }else{
await axios.post("http://192.168.1.104:5000/user/userenquiry",{emailid})
.then((res)=>{
  if(res.status ===200){

    navigation.navigate('Registrationotp',{emailid:emailid, data:res.data.message})
    // 
  }
  if (res.status === 202){
    
    if (res.data.status === "failed"){
      //error warning msg here
      navigation.navigate('Registrationotp',{emailid:emailid, data:res.data.message})
     
    }
  }
})
.catch((err)=>{

Alert.alert(
  'Warning',
  err.response.data.key,
  [
  { text:"OK"}
  ]

)
})

    }
  }
  return (
    <View style={{paddingTop:40}}>
      <ScrollView>
      <View style={{padding:10, alignItems:'flex-start'}}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
    <Icon type='antdesign' name='arrowleft' size={36}/>
    
    </TouchableOpacity>
    </View>
<View style={{marginTop:40, alignItems:'center', justifyContent:'center'}}>
  <View style={{padding:10}}>
    <Text style={{color:'#171821', fontWeight:'bold', fontSize:32}}>
      Enter your Email
    </Text>
  </View>
  <View style={{ padding:20}}>
    <Text style={{color:'#9d9ca1', fontSize:16}}>
      Please enter your Email id. we will send you a 4 digit verification code to verify your account.
    </Text>
  </View>
</View>



<View style={{alignItems:'center', justifyContent:"center", marginTop:40}}>
<View>
                <TextInput   value={emailid} onChangeText={setEmailid}  disableFullscreenUI={true} importantForAutofill='auto' autoComplete='email' placeholder='Enter your email here' style={{backgroundColor:'#ffe8f2', width:300, height:50, borderRadius:10, alignItems:'center', justifyContent:'center'}}  />
            </View>
</View>
  <View style={{marginTop:40, alignItems:'center', justifyContent:'center'}}>
      
      <TouchableOpacity onPress={emailSetup} >
      <View style={{backgroundColor:'#EA4689', height:50, width:300,  borderRadius:30, alignItems:'center', justifyContent:'center', elevation:6, shadowColor:'#FFE8F2'}}>
<Text style={{fontSize:18, fontWeight:'bold', color:'#fdf7fd'}}>
  Continue
</Text>
          </View>
      </TouchableOpacity>
        
      </View>

<View style={{marginTop:40, alignItems:'center', justifyContent:'space-around'}}>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <Text >
                  Have an account?
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Signin')} >
                <Text style={{color:'#f1497f', fontWeight:'bold'}}>
                    Signin 
            </Text>
                </TouchableOpacity>

        </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})