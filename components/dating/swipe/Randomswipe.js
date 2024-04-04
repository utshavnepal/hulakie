import { Animated, Dimensions, PanResponder, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useRef, useState, useTransition } from 'react'
import { StatusBar } from 'expo-status-bar'
import { users as usersArray } from '../../../data'
import Card from './Card'
import Footer from './Footer'
const {width, height} = Dimensions.get("screen")
const Randomswipe = () => {
    const [user, setUser] = useState(usersArray)
    const [curruser, setCurruser] = useState('')


  // animated value for swipe and tilt
  const swipe = useRef(new Animated.ValueXY()).current;
  const tiltSign = useRef(new Animated.Value(1)).current


  // panresponder config
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: ()=>true,
    onPanResponderMove:(_, {dx, dy, y0})=>{

      swipe.setValue({x:dx, y:dy})
      tiltSign.setValue(y0>(height * 0.9)/2?1:-1)
    },

    onPanResponderRelease:(_,{dx, dy})=>{
     const direction = Math.sign(dx)
  //   console.log(direction)
     const isActionActive = Math.abs(dx) >100;
      
     if (isActionActive){
      // swipe the card off the screen
       Animated.timing(swipe,{
        duration:800,
        toValue:{
          x: direction *500,
          y:dy
        },
        useNativeDriver:true
       
       }).start(removeTopCard) 
//logic for user part
       if (direction >= 1){
        setCurruser(user[0])
        
       // console.log(user[0])
       }
    }else{
      // return the card to the screen orginal position
    Animated.spring(swipe,{
      toValue:{
        x:0,
        y:0
      },
      useNativeDriver:true,
      friction:5
    }).start() 
    }
    }

  })


// remove top cards from users array

const removeTopCard = useCallback(()=>{
setUser((prevState)=>prevState.slice(1));
swipe.setValue({x:0,y:0})
},[swipe]) 

//handle user choice 
const handleChoice = useCallback((direction)=>{
//  console.log(direction)
Animated.timing(swipe.x, {
  toValue: direction*500,
  duration:400,
  useNativeDriver:true
}).start(removeTopCard)

},[removeTopCard, swipe.x])

  useEffect(()=>{
if(!user.length){
    setUser(user)
}
  },[!user.length])
  return (
    <View style={{flex:1, alignItems:'center', backgroundColor:'white'}}>
      
     
      {user.map(({name,image,location,distance,age},index)=>{
        
        const idFirst = index ==0;
        const dragHandlers = idFirst ? panResponder.panHandlers: {};
        return(
            <Card key={index} name={name} image={image} location={location} distance={distance} age={age} 
                isFirst={idFirst}  swipe={swipe} tiltSign={tiltSign} {...dragHandlers}
            />
             
        )
      }).reverse()
     
      }
      <Footer handleChoice={handleChoice}/>
    </View>
  )
}

export default Randomswipe

const styles = StyleSheet.create({})