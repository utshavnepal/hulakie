import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Video, ResizeMode } from 'expo-av';
import Ionic from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useIsFocused } from '@react-navigation/native';
const Singlereel = ({item,index, currentIndex}) => {
  const [status, setStatus] = React.useState({});
  const [mute, setMute] = useState(true)
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height
  const videoRef = useRef(null)
  

  const isFocused = useIsFocused()
  useEffect(()=>{
    videoRef.current.pauseAsync()
  },[!isFocused])

  const onBuffer = buffer =>{
    console.log(buffer)
  }
  const onError = err =>{
    console.log('err',err)
  }

  return (
    <View style={{width:width, height:height, position:'relative'}}>
      
      
      <TouchableOpacity activeOpacity={0.9} 
       style={{height:'100%', width:'100%', position:'absolute'}} onPress={()=>status.isPlaying ? 
      videoRef.current.pauseAsync():videoRef.current.playAsync()
      
      }>

<Video
key={index}
        ref={videoRef}
        style={{height:'100%', width:'100%', position:'absolute'}}
        source={item.video}
        useNativeControls= {false}
        shouldPlay={true}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        isMuted={index===currentIndex?false:true}
        
        
      />

      </TouchableOpacity>
      <Ionic name='volume-mute' style={{fontSize:status.isPlaying?0:20, color:'white', position:'absolute',
      top:height/2.3, left: width/2.3, backgroundColor:'rgba(52,52,52,0.9)', borderRadius:100,
      padding:status.isPlaying?0:10
      }} />


    <View style={{ position:'absolute', width:width, zIndex:1, bottom:80, padding:10}} >
      <View style={{}} >
        <TouchableOpacity style={{width:150}} >
        <View style={{width:100, flexDirection:'row', alignItems:'center'}}>
          <View style={{width:32, height:32, borderRadius:100, backgroundColor:'white', margin:10}}>
          <Image  source={item.profileicon} style={{width:'100%', height:'100%', resizeMode:'cover', borderRadius:100}} />
          </View>
          <Text style={{color:'white', fontSize:16, }}>{item.title}</Text>
        </View>
          
        </TouchableOpacity>
        <Text style={{color:'white',fontSize:14, marginHorizontal:10}}>
          {item.description}
        </Text>
      <View style={{flexDirection:'row', padding:10}}>
        <Ionic name='ios-musical-note' style={{
          color:'white',
          fontSize:16
        }} />
        <Text style={{color:'white'}}>Orginal Audio</Text>
      </View>
      </View>

    </View>

<View style={{position:'absolute', bottom:80, right:0, alignItems:'center', flexDirection:'column'}}>
<TouchableOpacity style={{padding:10}}>
  <AntDesign name='hearto' style={{color:'white', fontSize:25}}/>
</TouchableOpacity>
</View>


    </View>
  )
}

export default Singlereel

const styles = StyleSheet.create({})