import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import Loading from '../others/Loading'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chatlist from '../chat/Chatlist';

const Stack = createNativeStackNavigator();
const Chat = () => {
  const[loaded, setLoaded] = useState(true)
  const[token, setToken] = useState('')
  return (
    <>
      {!loaded &&(
        <>
        <Loading/>
        </>
      )}
      {loaded && (
        <>
        <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown:true, contentStyle:{backgroundColor:"#fdf7fd"}}}>
        {/* initial and login screen*/ }
      <Stack.Screen name='Chatlist' component={Chatlist }  />
      </Stack.Navigator>
      </NavigationContainer>
        </>
      )}
    </>
  )
}

export default Chat

const styles = StyleSheet.create({})