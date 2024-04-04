import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'

import Loading from '../others/Loading'
import Suscribe from '../others/Suscribe'
import Nousers from './nearby/Nousers'


const height = Dimensions.get('screen').height
const width = Dimensions.get("screen").width
const Nearbyuser = ({navigation}) => {
  const [loading, setLoading] = useState(true)
  const [suscribed, setSuscribed] = useState(true)
  const [match, setMatched] = useState(true)
  const [profiledata,setProfiledata] = useState([{name:"rame", distance:"2.1", _id:1 },{name:"ram", distance:"2.1", _id:4 }, {name:"hari", distance:"2.4", _id:3 }, {name:"ramu", distance:"2.0", _id:2 }])
  useEffect(()=>{
    setTimeout(()=>{
setSuscribed(true)
    },10000)
  })
  
const onaccepted = ({item, index})=>{
const filteredData = profiledata.filter(items=>items._id !== item._id)
setProfiledata(filteredData)
if (profiledata.length === 0){
  setMatched(false)
}  
}

   const ignorepressed =({item,index})=>{


const filteredData = profiledata.filter(items=>items._id !== item._id)
setProfiledata(filteredData)
if (profiledata.length === 0){
  setMatched(false)
}

   }
  return (
    <View style={{backgroundColor:'#fdf7fd'}}>
{!loading && (
  <>
    <Loading/>
  </>
)}
{loading && (
  <>
{!suscribed && (
  <>
  <Suscribe/>
  </>
)}
{suscribed&&(
  <>
  {!match && (
    <>
    <Nousers/>
    </>
  )}
  {match && (
    <View style={{ marginHorizontal:20, height:'100%'}}>
    <View>
    <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center', marginVertical:20}}>
      {profiledata.length} people found in your area
    </Text>
    </View>
    
<FlatList
showsVerticalScrollIndicator={false}
  data={profiledata}
  extraData={profiledata}
  keyExtractor={(item, index)=>index}
  renderItem={({item,index})=>{
    return (
      <View key={index} style={{marginHorizontal:width*0.10, padding:30, backgroundColor:'#fbe2ed',marginVertical:12, borderRadius:20 }}>
      <View >
      <Text style={{fontSize:20, fontWeight:'500', textAlign:'center'}}>
        {item.name}
      </Text>
      </View>
      <View>
      <Text style={{fontSize:18, textAlign:'center'}}>
       distance: {item.distance} km
      </Text>
      </View>
 
<View style={{marginTop:20, flexDirection:'row',  justifyContent:'space-between'}}>
<TouchableOpacity onPress={()=>onaccepted({item,index})} style={{width:100, height:36, alignItems:'center', justifyContent:'center', borderRadius:10, backgroundColor:'#f1497f' }}>
<Text style={{fontSize:18, fontWeight:'400', color:'white'}}>Match</Text>
</TouchableOpacity>
 <TouchableOpacity onPress={()=>ignorepressed({item,index})}
  style={{width:100, height:36, alignItems:'center', justifyContent:'center', borderRadius:10, backgroundColor:'#6e47f3' }}>
<Text style={{fontSize:18, fontWeight:'400', color:'white'}}>Ignore</Text>
</TouchableOpacity> 
</View>

      </View>
    )
  }}
/>
    </View>
  )}
  </>
)}


  </>
)}
    </View>
  )
}

export default Nearbyuser

const styles = StyleSheet.create({})