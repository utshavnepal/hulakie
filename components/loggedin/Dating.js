import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Swipescreen from '../dating/Swipescreen';

import DatingProfiles from '../dating/DatingProfiles';
import Nearbyuser from '../dating/Nearbyuser';
import Datingnotification from '../dating/Datingnotification';


const Tab = createMaterialTopTabNavigator()
const Dating = () => {
  return (
   <>
    <Tab.Navigator style={{  backgroundColor:'#fdf7fd', paddingTop:30,}}  screenOptions={{fontSize:13, swipeEnabled:false, }} initialRouteName='Swipe'  >
      <Tab.Screen name="Swipe" component={Swipescreen} options={{unmountOnBlur:true}} />
      <Tab.Screen name="Profile" component={DatingProfiles} options={{unmountOnBlur:true}}  />
 <Tab.Screen name='Nearby' component={Nearbyuser} options={{unmountOnBlur:true}} />
 <Tab.Screen name='Match' component={Datingnotification} options={{unmountOnBlur:true}} />

    </Tab.Navigator>
   </>
  )
}

export default Dating

const styles = StyleSheet.create({})