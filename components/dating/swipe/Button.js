import { Animated, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React,{useCallback, useRef, useState} from 'react'
import {FontAwesome} from '@expo/vector-icons'
const Button = ({name, size, color,style,onPress}) => {
   const scale = useRef(new Animated.Value(1)).current;

   const animatedScale = useCallback((newvalue)=>{
    
Animated.spring(scale,{
    toValue:newvalue,
    triction:4,
    useNativeDriver:true
}).start()
    
   },[scale])
  return (
   <TouchableWithoutFeedback onPressIn={()=>animatedScale(0.4)}
   onPressOut={()=>{
    animatedScale(1)
    onPress()
   }}
   delayPressIn={0}
   delayPressOut={100}
   >
    <Animated.View style={{height:60, width:60, backgroundColor:'white', 
    elevation:5, borderRadius:40, justifyContent:'center', alignItems:'center', 
    borderColor:color, borderWidth:1.2, transform:[{scale}],
    ...style 
    
    }}>
        <FontAwesome name={name} size={size} color={color} />
    </Animated.View>
   </TouchableWithoutFeedback>
  )
}

export default Button

const styles = StyleSheet.create({})