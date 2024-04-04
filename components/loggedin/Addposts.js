import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Camera} from "expo-camera"
import { Audio } from 'expo-av'
import * as ImagePicker from "expo-image-picker"
import * as MediaLibary from "expo-media-library"
import { Icon } from '@rneui/themed';
import { useIsFocused } from '@react-navigation/native'
const Addposts = ({navigation}) => {

const [hasCameraPermissions, setHasCameraPermissions] = useState(false)
const [hasAudioPermissions, setHasAudioPermissions] = useState(false)
const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false)
const [galeeryitems, setGalleryitems] = useState([])
const [cameraref, setCameraref] = useState(null)
const [cameratype, setCameraType] = useState(Camera.Constants.Type.back)
const[ cameraflash, setCameraFlash] = useState(Camera.Constants.FlashMode.off)
const [iscameraready, setIscameraReady] = useState(false)



const isfocused = useIsFocused()



useEffect(()=>{
    (async()=>{
      const cameraStatus = await Camera.requestCameraPermissionsAsync()
      if (cameraStatus.status == "granted"){
        setHasCameraPermissions(true)
      }
      const audioStatus = await Audio.requestPermissionsAsync()
      
      if(audioStatus.status =="granted"){
      setHasAudioPermissions(true)
    }
    
     
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if(galleryStatus.status == "granted"){
        setHasGalleryPermissions(true)
      }
  
      
      if(galleryStatus.status=="granted"){
        const userGalleryMedia = await MediaLibary.getAssetsAsync({sortBy:["creationTime"], mediaType:["video"]})
           setGalleryitems(userGalleryMedia.assets)
      }
    })()

  },[])


  const recordVedio = async ()=>{
    
    if(cameraref){
      try {
        const options = {maxDuration:60, quality: Camera.Constants.VideoQuality["480"]}

        const vedioRecordPromise = await cameraref.recordAsync(options)
        console.log('gello')
        if(vedioRecordPromise){
          const data = await vedioRecordPromise;
          const source = data.uri
          navigation.getParent().navigate('Savereels',{source})

        }
      } catch (error) {
        console.warn(error)
      }
    }
  }
  
  const stopVedio = async ()=>{
    if(cameraref){
    cameraref.stopRecording()
    }
  }
  const pickFromGallery = async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing:true,
      aspect:[16,9],
      quality:1,

    })
    if(!result.canceled){
      navigation.getParent().navigate('Savereels',{source:result.assets[0].uri})
      // todo pass vedio uri into safe component
    }
  }
  if(!hasCameraPermissions || !hasGalleryPermissions || !hasAudioPermissions){
    return(
      <View style={{height:"100%", width:"100%"}}>
<Text>
  give camera media and audio permissions
</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {isfocused ? 
      <Camera
        ref={ref=>setCameraref(ref)}
        style={styles.camera}
         ratio={"16:9"}
         type={cameratype}
  flashMode={cameraflash}
  onCameraReady={()=>setIscameraReady(true)}
      />
      :null}

<View style={styles.sidebarcontainer}>
<TouchableOpacity 
onPress={()=>setCameraType(cameratype===Camera.Constants.Type.back ? Camera.Constants.Type.front :Camera.Constants.Type.back)}
style={styles.sideBarbuttom}>
<Icon
        name='retweet'
        type='antdesign'
        color='white'
        size={24}
        

      />
      <Text style={styles.icontext}>
Flip
      </Text>
</TouchableOpacity>
<TouchableOpacity style={styles.sideBarbuttom}
onPress={()=>setCameraFlash(cameraflash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.torch :Camera.Constants.FlashMode.off)}
>
<Icon
        name='flash'
        type='entypo'
        color='white'
        size={24}
        

      />
      <Text style={styles.icontext}>
Flash
      </Text>
</TouchableOpacity>
</View>

<View style={styles.sidebarcontainer}>

</View>
      <View style={styles.bottomBarContainer}>
      <View style={{flex:1}}></View>
<View style={styles.recotdButtonContainer}>
<TouchableOpacity
disabled={!iscameraready}
 onLongPress={()=>recordVedio()}
  style={styles.recordButton}
  onPressOut={()=>stopVedio()}
/>
</View>

<View style={{flex:1}}>
<TouchableOpacity 
onPress={()=>pickFromGallery()}
style={styles.galleryBtn}
>
{galeeryitems[0]== undefined ?
<>

</>:
<Image style={styles.galleryButton}
source={{uri:galeeryitems[0].uri}} />
}
</TouchableOpacity>

</View>
      </View>
    </View>
  )
}

export default Addposts

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:30
  },
  camera:{
    flex:1,
    backgroundColor:"black",
    aspectRatio:9/16
  },
  bottomBarContainer:{
    position:'absolute',
    alignItems:'center',
    bottom:0,
    flexDirection:'row',
    marginBottom:30
  },
  recotdButtonContainer:{
    flex:1,
    marginHorizontal:30
  },
  recordButton:{
    flex:1,
    borderWidth:4,
    borderColor:'#ff404087',
    backgroundColor:"#ff4040",
    borderRadius:100,
    height:80,
    width:80,
    alignSelf:'center'
  },
  galleryBtn:{
    flex:1,
    borderWidth:2,
    borderColor:'white',
    borderRadius:10,
    overflow:"hidden",
width:60, 
height:75
  },
  galleryButton:{
    width:60,
    height:75
  },
  sidebarcontainer:{
    flex:1,
    top:60,
    right:0,
    position:'absolute',
    marginHorizontal:20
  },
  icontext:{
    color:"white",
    fontSize:12,
    marginTop:5
  },
  sideBarbuttom:{
    flex:1,
    alignItems:'center', 
    marginBottom:25
}
})