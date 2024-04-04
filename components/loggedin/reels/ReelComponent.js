import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import {SwiperFlatList} from 'react-native-swiper-flatlist'
import { videoData } from './Database'
import Singlereel from './Singlereel'
const ReelComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleChangeInput = ({index})=>{
   setCurrentIndex(index)
    }
    
  return (
    <View>
        <SwiperFlatList
  vertical={true}
    data={videoData}
    onChangeIndex={handleChangeInput}
    renderItem={({item,index})=>{
     
      return(
        
<Singlereel item={item} index={index} currentIndex={currentIndex} />
      )
        
    }}
    keyExtractor={(item, index)=>index}
  />
    </View>

  )
}

export default ReelComponent

const styles = StyleSheet.create({})