import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React,{useState, useEffect} from 'react'
import { Icon } from '@rneui/themed'
{/* credit for they them goes to salina who game me bisexual idea */}

const Registrationdetail = ({navigation, route}) => {
    const emailid = route.params.emailid
    const data = route.params.data


    const items =[{id:1, gender:'Male', iconname:'male'},{id:2, gender:'Female',iconname:'female'}, {id:3, gender:'bigender', iconname:"torsos-male-female"}]


const onGenderPress=(item)=>{

const gender = item.gender

navigation.navigate('Registrationcomplete',{gender:gender, data:data, emailid:emailid})
}

const ItemsDisplayed = ({items})=>{
return (
    <View style={{padding:10, margin:10, borderRadius:18, borderWidth:3, borderColor:'#6e47f3'}}>
    <TouchableOpacity onPress={()=>onGenderPress(items)}>
    <View style={{width:80, alignItems:'center', justifyContent:'center'}}>
    <Icon type='foundation' name={items.iconname} size={90} color={'#f1497f'}/>
    <Text style={{fontSize:16, color:'#f1497f', fontWeight:'800'}}>
            {items.gender}
        </Text>
    </View>
       
    </TouchableOpacity>
    </View>
)
}

return (
    <View style={{paddingTop:40, backgroundColor:'#fdf7fd'}}>
      <View style={{ alignItems:'flex-start', margin:10}}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
    <Icon type='antdesign' name='arrowleft' size={36}/>
    </TouchableOpacity>
    </View>
      
      <View>
        <View style={{alignItems:'center', justifyContent:'space-between'}}>
   <Text style={{fontSize:24, fontWeight:'800',color:'#6e47f3', padding:50}}>
    Enter your gender
   </Text>

<FlatList
    horizontal
    data={items}
    keyExtractor={(item, index)=>item.id}
    renderItem={({item, index})=> <ItemsDisplayed items={item} />}


/>
        </View>

      </View>



    </View>
  )
}

export default Registrationdetail

const styles = StyleSheet.create({})