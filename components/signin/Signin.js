import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { useLoginUserMutation } from '../services/userAuthApi';
import { storeToken } from '../services/AsyncStorageService';
import { Icon } from '@rneui/themed';
import Toast from 'react-native-toast-message';

const Signin = ({navigation}) => {
    const [emailid, setEmailid] = useState("")
    const [password, setPassword] = useState("")
    const [secured, setSecured] = useState(true)
   

    const [loginUser] = useLoginUserMutation()
    const [pressed, setPressed] = useState(false)

    const clearTextInput = () => {
        setEmailid("")      
        setPassword('')
        setPressed(false)
      }
    const toastConfig = {
        warning: ({ text1, props }) => (
          <View style={{ height: 30, width: '100%', backgroundColor: 'orange', padding: 4, }}>
            <Text>{text1}</Text>
            <Text>{props.uuid}</Text>
          </View>
        ),
        done: ({ text1, props }) => (
          <View style={{ height: 30, width: '100%', backgroundColor: '#1affc6', padding: 4, }}>
            <Text>{text1}</Text>
            <Text>{props.uuid}</Text>
          </View>
        ),
      };
      
      const handleFormSubmit = async () => {
        if (emailid && password) {
    
         
            const formData = { emailid, password }
            const res = await loginUser(formData)
            if (res.data.status === "success") {
              await storeToken(res.data.token) // Store Token in Storage
              clearTextInput()
              navigation.reset({
                index:0,
                routes:[{name:'Homelogged'}]
                })
            }
            if (res.data.status === "failed") {
              Toast.show({
                type: 'warning',
                position: 'top',
                topOffset: 0,
                text1: 'phoneno or password is invalid'
              })}
          }
          
          
          
        else {
          Toast.show({
            type: 'warning',
            position: 'top',
            topOffset: 0,
            text1: "All fields are Required"
          })
        }
      }

    return (
    <View style={{marginTop:40, paddingHorizontal:20}}>
    <Toast config={toastConfig} />
    <ScrollView showsVerticalScrollIndicator={false} >
    <View style={{ alignItems:'flex-start'}}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
    <Icon type='antdesign' name='arrowleft' size={36}/>
    </TouchableOpacity>

    </View>
    <View>
        <Image style={{height:300, width:350, resizeMode:'contain', borderRadius:40}}  source={require('../../assets/login.png')} />
    </View>
      <View style={{alignItems:'center', justifyContent:'center', marginTop:20}}>
        <View>
            <Text style={{fontSize:32, fontWeight:'bold', color:'#f1497f'}}>
                Login
            </Text>
        </View>
        <View style={{marginTop:40}}>
        
            <View>
                <TextInput  value={emailid} onChangeText={setEmailid}  disableFullscreenUI={false} importantForAutofill='auto' 
                autoComplete='email' placeholder='Enter your email here' 
                style={{backgroundColor:'#ffe8f2', width:300, height:50, borderRadius:10, alignItems:'center', justifyContent:'center'}}  />
            </View>
            <View style={{flexDirection:'row', justifyContent:"space-between", alignItems:'center'}}>
                <TextInput  value={password} onChangeText={setPassword} disableFullscreenUI={false} importantForAutofill='auto' autoComplete='password' placeholder='Enter your password here' 
                 secureTextEntry={secured}  
                
                style={{backgroundColor:'#ffe8f2',marginTop:20, width:300, height:50, borderRadius:10, alignItems:'center', justifyContent:'center'}}  />
                    <TouchableOpacity style={{alignItems:'center', justifyContent:'center', marginTop:20, marginLeft:10}} onPress={()=>{setSecured((prev)=>!prev)}}>
              <Text style={{color:"#f1497f"}}>
                show 
              </Text>
            </TouchableOpacity>
            </View>
        </View>
       

        <View style={{marginTop:40}}>
      
        <TouchableOpacity  onPress={handleFormSubmit}>
        <View style={{backgroundColor:'#EA4689', height:50, width:300,  borderRadius:30, alignItems:'center', justifyContent:'center', elevation:6, shadowColor:'#FFE8F2'}}>
<Text style={{fontSize:18, fontWeight:'bold', color:'#fdf7fd'}}>
    SignIn
</Text>
            </View>
        </TouchableOpacity>
          
        </View>

      </View>
      <View style={{marginTop:10}}>
        <TouchableOpacity>
          <Text style={{color:"#F1497F", fontWeight:'bold', fontSize:14}}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:30, alignItems:'center', justifyContent:'space-around'}}>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <Text>
                Don't have an account?
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Signup')} >
                <Text style={{color:'#f1497f', fontWeight:'bold'}}>
                    SignUp
            </Text>
                </TouchableOpacity>

        </View>

        </View>
    </ScrollView>
    
    </View>
  )
}

export default Signin

const styles = StyleSheet.create({})