import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { TextInput } from 'react-native-paper'
import { Icon } from '@rneui/themed';
import { useDispatch } from 'react-redux';
import { StackActions } from '@react-navigation/native';
const Savereels = ({navigation, route}) => {
    const [description, setDescription] = useState("")
    const[requestrunning, setRequestRunning] = useState(false)
const dispatch = useDispatch()
    const handleSavePost = ()=>{
setRequestRunning(true)
// dispatch to 1st screen
navigation.dispatch(StackActions.popToTop())
    }
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
        maxLength={180}
        style={styles.inputText} 
        onChange={(text)=>setDescription(text)}
        multiline
            placeholder='describe your vedios'
        />
        <Image
            source={{uri:route.params.source}}
            style={styles.mediaPreview}
        />
      </View>
<View style={styles.spacer}></View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity 
      style={styles.cancilButton}
      onPress={()=>navigation.goBack()}>
      
      <Icon
        name='cross'
        type='entypo'
        color='black'
        size={24}
        

      />
      <Text style={styles.cancilbtnText}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.postButton}
      onPress={()=>handleSavePost()}>
      
      <Icon
        name='upload'
        type='entypo'
        color='#f1497f'
        size={24}
        

      />
      <Text style={styles.uploadbtnText}>upload</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Savereels

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:50,
        backgroundColor:'#fdf7fd'
      },
      inputText:{
        paddingVertical:10, 
        marginRight:10,
        flex:1,
        padding:10,
        backgroundColor:'#fdf7fd'
      },
      formContainer:{
        margin:20,
        flexDirection:'row'
      },
      mediaPreview:{
        aspectRatio:9/16,
        backgroundColor:'black',
        padding:10,
        width:60,
        height:60

      },
      buttonContainer:{
        flexDirection:'row',
        margin:20
      },
      cancilButton:{
alignItems:'center',
flex:1,
borderColor:"lightgray",
borderWidth:1,
flexDirection:'row',
paddingVertical:10,
paddingHorizontal:20,
justifyContent:'center',
borderRadius:4,
marginRight:10
      },
      postButton:{
        alignItems:'center',
        flex:1,
        borderColor:"#f1497f",
        borderWidth:1,
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:20,
        justifyContent:'center',
        borderRadius:4,
        marginRight:10
              },
      cancilbtnText:{
         fontWeight:'bold',
         color:'black',
         fontSize:16,
         marginLeft:5
      },
      spacer:{
        flex:1
      },
      uploadbtnText:{
        fontWeight:'bold',
        color:'#f1497f',
        fontSize:16,
        marginLeft:5
     },
})