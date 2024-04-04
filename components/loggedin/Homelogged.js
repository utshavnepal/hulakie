import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dating from './Dating';
import Home from './Home';
import Addposts from './Addposts';
import Reels from './Reels';
import Chat from './Chat';

const Tab = createMaterialBottomTabNavigator();

const Homelogged = () => {
  
  return (

    
    < >
       <Tab.Navigator
      initialRouteName="Home"
      activeColor="#F1497F"
      barStyle={{ backgroundColor: '#FFE8F2' }}
      inactiveColor='#9d9ca1'      
    >
      <Tab.Screen
        name="Dating"
        component={Dating}
        options={{
          tabBarLabel: ' Find a Date',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="search-web" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Addposts"
        component={Addposts}
        options={{
          tabBarLabel: 'Add posts',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-box" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarLabel: 'Shorts',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="play-box" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen
        name="Chats"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    </>
  )
}

export default Homelogged

const styles = StyleSheet.create({})