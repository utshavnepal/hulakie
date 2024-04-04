import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native'
import React, {useState, useEffect} from 'react'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Icon } from '@rneui/themed';
const Editprofile = ({navigation}) => {
const [name, setName] = useState('Ram')
const [username, setUsername] = useState('Shyam')
const [aboutme, setAboutme] = useState('')
const [gender, setGender] = useState('')
const [birthday, setBirthday] = useState('')
const[emailid, setEmailid] = useState('')
const [showPicker, setShowPicker] = useState(false)



  return (
    <View style={{paddingTop:40, backgroundColor:'#fdf7fd'}}>
    <ScrollView>
    <View style={{flexDirection:"row", alignItems:'center', justifyContent:"flex-start", marginLeft:10}}>
    <Icon type='antdesign' name='arrowleft' size={24} onPress={()=>navigation.goBack()}/>
      <Text style={{fontSize:16, fontWeight:'400', color:'#171821'}}>Edit Profile</Text>
      </View>

<View style={{alignItems:'center', justifyContent:'center', }}>
<View style={{alignItems:'center',padding:10, justifyContent:'center', width:150, height:150, borderRadius:80, borderWidth:2, borderColor:'#f1497f'}}>
<Image source={require('../../assets/khaltilogo.png')} style={{resizeMode:'contain', width:120, height:120, borderRadius:60}} />

</View>

</View>


<View style={{marginTop:30, marginHorizontal:30}}>
<Text style={{fontWeight:'500', fontSize:15}}>Name</Text>
<TextInput style={{borderBottomWidth:2, borderBottomColor:'#9d9ca1', fontSize:20, color:'#9d9ca1' }}  placeholder={name} value={name} 
  importantForAutofill='auto' autoComplete='name'  onChangeText={setName}
 />
</View>


<View style={{marginTop:30, marginHorizontal:30}}>
<Text style={{fontWeight:'500', fontSize:15}}>Username</Text>
<TextInput style={{borderBottomWidth:2, borderBottomColor:'#9d9ca1', fontSize:20, color:'#9d9ca1' }} placeholder={username} value={username} 
 importantForAutofill='auto' autoComplete='additional-name'  onChangeText={setUsername}
 />
</View>

<View style={{marginTop:30, marginHorizontal:30}}>
<Text style={{fontWeight:'500', fontSize:15}}>emailid</Text>
<TextInput style={{borderBottomWidth:2, borderBottomColor:'#9d9ca1', fontSize:20, color:'#9d9ca1' }} placeholder={emailid} value={emailid} 
 importantForAutofill='auto' autoComplete='additional-name'  onChangeText={setEmailid}
 />

</View>
<View style={{marginTop:30, marginHorizontal:30}}>
<Text style={{fontWeight:'500', fontSize:15}}>Gender</Text>
<TextInput style={{borderBottomWidth:2, borderBottomColor:'#9d9ca1', fontSize:20, color:'#9d9ca1' }} placeholder={gender} value={gender} 
 importantForAutofill='auto' autoComplete='additional-name'  onChangeText={setGender}
 />
</View>
<View style={{marginTop:30, marginHorizontal:30}}>
<Text style={{fontWeight:'500', fontSize:15}}>aboutme</Text>
<TextInput multiline={true} style={{borderBottomWidth:2, borderBottomColor:'#9d9ca1', fontSize:20, color:'#9d9ca1' }}  placeholder={aboutme} value={aboutme} 
 importantForAutofill='auto' autoComplete='additional-name'  onChangeText={setAboutme}
 />
</View>
<View style={{marginTop:30, marginHorizontal:30}}>
<Text style={{fontWeight:'500', fontSize:15}}>Date of birth</Text>
<TextInput style={{borderBottomWidth:2, borderBottomColor:'#9d9ca1', fontSize:20, color:'#9d9ca1' }} placeholder={birthday} value={birthday} 
 importantForAutofill='auto' autoComplete='additional-name'  onChangeText={setBirthday}
 />
</View>

<View style={{height:70, width:70, borderRadius:35, backgroundColor:'#f1497f', alignItems:'center', justifyContent:'center', position:'absolute', bottom:10, right:20}}>
<Text style={{fontSize:15, fontWeight:'600', color:'#ffebf2'}}>
  Save
</Text>
</View>
<KeyboardAvoidingView>

</KeyboardAvoidingView>



    </ScrollView>
      


    </View>
    
  )
}

export default Editprofile

const styles = StyleSheet.create({})