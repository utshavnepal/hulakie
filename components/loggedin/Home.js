import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/themed';
import { users } from '../../data';
import { LinearGradient } from 'expo-linear-gradient'
const Home = () => {
    const navigation = useNavigation()
  return (
    <View style={{paddingTop:40, backgroundColor:'#fdf7fd'}}>
    <ScrollView>
    <View style={{flexDirection:'row', alignItems:'flex-end', margin:10, justifyContent:'flex-end'}}>
      <TouchableOpacity style={{margin:10}} >
      <Icon type='antdesign' name='bells' size={36} borderRadius={5}  color={"#171821"}/>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:10}}  onPress={()=>navigation.getParent().navigate('Profile')}>
      <Icon type='antdesign' name='user' size={36} borderRadius={5} color={"#171821"}/>
      </TouchableOpacity>
    </View>





    <View style={{flex:1}}>

    <ScrollView style={{flex:1}} horizontal showsHorizontalScrollIndicator={false} >
    {users.map(({name,image,id},index)=>(
       <View key={index} style={{width:85, padding:5}}>
        <LinearGradient colors={["#bc2a8d","#e95950","#fccc63"]}
        style={{padding:2, borderRadius:50, }}
         >
        <Image source={image} style={styles.userImage} />
        </LinearGradient>
        <Text style={{textAlign:'center', fontSize:12, textTransform:'lowercase', marginTop:5}}>{name}</Text>
       </View>
    ))}
    </ScrollView>



    </View>




    </ScrollView>
    
   


    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  userImage:{
    height:70, width:70,
    borderRadius:50,
    borderColor:'white',
    borderWidth:4,
}
})