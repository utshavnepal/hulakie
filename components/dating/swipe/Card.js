import { StyleSheet, Text, View, Image, Dimensions, Animated } from 'react-native'
import React, { Fragment, useCallback } from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import Choice from './Choice'
const {width, height} = Dimensions.get('screen')
const Card = ({name,location,age,distance,image, isFirst, swipe, tiltSign, ...rest}) => {

  const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
    inputRange:[-100,0,100],
    outputRange:['8deg', '0deg','-8deg']
  })


const animatedCardStyle = {
  transform:[...swipe.getTranslateTransform(),{rotate}]
}

const likeOpacity = swipe.x.interpolate({
  inputRange:[25,100],
  outputRange:[0,1],
  extrapolate: "clamp"
})

// opacity animation for nope 

const nopeOpacity = swipe.x.interpolate({
  inputRange:[-100,-25],
  outputRange:[1,0],
  extrapolate: "clamp"
})



const renderChoice = useCallback(()=>{
    return(
        <Fragment>
<Animated.View style={[styles.choiceContainer,
 styles.likeContainer,
 {opacity:likeOpacity}

]}>
<Choice type='like'/>
</Animated.View>
<Animated.View style={[styles.choiceContainer,
 styles.nopeContainer,
 {opacity:nopeOpacity}
 ]}>
<Choice type='nope'/>
</Animated.View>            
        </Fragment>
    )
},[likeOpacity,nopeOpacity])


  return (
    <Animated.View style={[styles.container,
    isFirst && animatedCardStyle
    
    ]}{...rest}>
     <Image source={image} style={styles.image}/>
     <LinearGradient  colors ={['transparent', 'rgba(0,0,0,.9)']} style={styles.gradient}>
          <View style={styles.userContainer}>
           <Text style={styles.name}>{name}, {age}</Text>
           <Text style={styles.location}>Live in {location}</Text>
           <Text style={styles.distance}>{distance}</Text>
          </View>
         
     </LinearGradient>
     {isFirst && renderChoice()}
    </Animated.View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
position:'absolute',
top:25
    },
    image:{
width:width*0.8,
height:height*0.6,
borderRadius:20
    },
    gradient:{
     position:'absolute',
     bottom:0,
     left:0,
     right:0,
     height:200,
     borderBottomRightRadius:20,
     borderBottomLeftRadius:20
    },
    userContainer:{
      position:'absolute',
      bottom:24,
      left:24
    },
    name:{
     fontSize:30,
     color:'white',
     fontWeight:'400'
    },
    location:{
  fontSize:18,
  color:'white',
  fontWeight:'300'
    },
    distance:{
        fontSize:18,
        color:'white',
        fontWeight:'300'
    },
    choiceContainer:{
       position:'absolute',
       top:100
    },
    likeContainer:{
       left:45,
       transform:[{rotate:'-30deg'}]
    },
    nopeContainer:{
        right:45,
        transform:[{rotate:'30deg'}]
    }
})