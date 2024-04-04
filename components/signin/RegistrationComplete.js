import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Platform  } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useRegisterUserMutation } from '../services/userAuthApi';
import { storeToken } from '../services/AsyncStorageService';
const RegistrationComplete = ({navigation, route}) => {
    const emailid = route.params.emailid
    const gender = route.params.gender
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')
    const [secured, setSecured]=useState(true)
    const [csecured, setCsecured] = useState(true)
    const [date, setDate] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false)
    const [dateofbirth, setDateofbirth] = useState("")

const clearTextInput = () => {
      setName('')
      setDateofbirth("")
      setPassword('')
      setConfirmPassword('')      
}
  
  
const [registerUser] = useRegisterUserMutation()

const data = route.params.data

    const onRegisterpress = async()=>{
try {
  if (password && confirmPassword && name && dateofbirth){
    if (password === confirmPassword){
const email = data.emailid

const today = new Date()
const ram = today.getFullYear()-date.getFullYear()
var m = today.getMonth()-date.getMonth()
if (m<0||(m ===0 && today.getDate()<date.getDate())){
  ram--;
}
if (ram <= 18){
 Alert.alert(
        'Warning',
        "you should be minimum 18 years to register",
        [
        { text:"OK"}
        ]
      
      )
}else{
  const dob =dateofbirth
  const formData = { name, email, password, gender,dob  }
  const res = await registerUser(formData)
  if (res.data.status === "success") {
    await storeToken(res.data.token) 
    // Store Token in Storage
   clearTextInput()
   navigation.reset({
    index:0,
    routes:[{name:'Homelogged'}]
    })
    
  }else{
    Alert.alert(
      'Warning',
      `${res.data.message}`,
      [
      { text:"OK"}
      ]
    
    ) 
  }
}
    }else{
      Alert.alert(
        'Warning',
        "Enter password correctly",
        [
        { text:"OK"}
        ]
      
      )
    }
  }else{
    Alert.alert(
      'Warning',
      "enter name password and confirm password",
      [
      { text:"OK"}
      ]
    
    )
  }
 
} catch (error) {
  Alert.alert(
    'Warning',
    "error occured",
    [
    { text:"OK"}
    ]
  
  )
}
    }

    const toggledatepicker = ()=>{
      setShowPicker(!showPicker)
    }

    const onChange = ({type}, selectedDate)=>{
      if (type === "set"){
        const currentdate = selectedDate
     setDate(currentdate)
        if(Platform.OS ==="android"){
          toggledatepicker()
          setDateofbirth(currentdate.toDateString())
        }
      }else{
        toggledatepicker()
      }
    }
  return (
    <View style={{padding:40, backgroundColor:'#fdf7fd'}}>
      <View style={{marginTop:80}}>
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:24, fontWeight:'bold', color:'#6e47f3'}}> Register</Text>
      </View>
      <View style={{marginTop:30}}>
                <TextInput  value={name} onChangeText={(text)=>setName(text)}  disableFullscreenUI={false} importantForAutofill='auto' 
                autoComplete='name' placeholder='Enter your Name here' 
                style={{backgroundColor:'#ffe8f2', width:300, height:50, borderRadius:10, alignItems:'center', justifyContent:'center'}}  />
            </View>


            <View style={{flexDirection:'row', justifyContent:"space-between", alignItems:'center', }}>
                <TextInput  value={password} onChangeText={(text)=>setPassword(text)} disableFullscreenUI={false} importantForAutofill='auto' autoComplete='password' placeholder='Enter your password here' 
                 secureTextEntry={secured}  
                
                style={{backgroundColor:'#ffe8f2',marginTop:20, width:300, height:50, borderRadius:10, alignItems:'center', justifyContent:'center'}}  />
                    <TouchableOpacity style={{alignItems:'center', justifyContent:'center', marginTop:20, marginLeft:10}} onPress={()=>{setSecured((prev)=>!prev)}}>
              <Text style={{color:"#f1497f"}}>
                show 
              </Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', justifyContent:"space-between", alignItems:'center',}}>
                <TextInput  value={confirmPassword} onChangeText={(text)=>setConfirmPassword(text)} disableFullscreenUI={false} importantForAutofill='auto' autoComplete='password' placeholder='repeat your password here' 
                 secureTextEntry={csecured}  
                
                style={{backgroundColor:'#ffe8f2',marginTop:20, width:300, height:50, borderRadius:10, alignItems:'center', justifyContent:'center'}}  />
                    <TouchableOpacity style={{alignItems:'center', justifyContent:'center', marginTop:20, marginLeft:10}} onPress={()=>{setCsecured((prev)=>!prev)}}>
              <Text style={{color:"#f1497f"}}>
                show 
              </Text>
            </TouchableOpacity>
            </View>
      </View>

{showPicker && (
  <>
  <View style={{marginTop:30}}>
      
      <DateTimePicker 
mode='date'
display='spinner'
value={date}
onChange={onChange}
      />
              
                      </View>
  </>
)}
{!showPicker && (
  <>
  <TouchableOpacity onPress={toggledatepicker}>
    <View style={{marginTop:30}}>
                <TextInput  value={dateofbirth}  editable={false}  
                placeholder='Enter your Birthdate here' 
                style={{backgroundColor:'#ffe8f2', width:300, height:50, borderRadius:10, alignItems:'center', justifyContent:'center'}}  />
            </View>
    </TouchableOpacity>
  </>
)}
  

      <View style={{marginTop:30}}>
      
      <TouchableOpacity onPress={onRegisterpress}>
      <View style={{backgroundColor:'#EA4689',marginTop:30, height:50, width:300,  borderRadius:30, alignItems:'center', justifyContent:'center', elevation:6, shadowColor:'#FFE8F2'}}>
<Text style={{fontSize:18, fontWeight:'bold', color:'#fdf7fd'}}>
  SignUp
</Text>
          </View>
          </TouchableOpacity>
          </View>



    </View>
  )
}

export default RegistrationComplete

const styles = StyleSheet.create({})