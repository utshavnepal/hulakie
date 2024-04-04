import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, ScrollView} from 'react-native'
import React, {useState, useEffect} from 'react'
import Loading from '../others/Loading'

const DatingProfiles = () => {
  const [loaded, isLoaded] = useState(true)
  const [intrestdata, setIntrestsdata] = useState([{id:1, name:'travelling',},{id:5, name:'travelling',}, {id:2, name:'sports', }, {id:3, name:'music', }, {id:4, name:'football',}])
  return (
    <View style={{backgroundColor:'#fdf7fd'}}>
      {!loaded && (
        <>
          <Loading/>
        </>
      )}
      {loaded &&(
        <ScrollView>
        <View style={{padding:40, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
<Text style={{color:'#f9417f', fontSize:20, fontWeight:'600'}}>
  name,24
</Text>
<View style={{alignItems:'center', justifyContent:'center'}}>
  <Text style={{fontSize:20, fontWeight:'600'}}>
    256
  </Text>
  <View>
    <Text style={{fontSize:20, fontWeight:'600'}}>
      Match
    </Text>
  </View>
</View>
        </View>

        {/* intrest section */}
        <View style={{padding:10}}>
         <View>
          <Text style={{fontSize:13, fontWeight:'600', color:'#f9417f'}}>
           Intrest
          </Text>
         </View>
         <FlatList 
showsHorizontalScrollIndicator={false}
                  horizontal
                  contentContainerStyle={styles.contentContainer}
                  data={intrestdata}
                  keyExtractor={({item,index})=>index}
                  renderItem={({item,index})=>{
                     return(
                      <View key={index} style={{margin:20, backgroundColor:'#ded2fa', padding:10, alignItems:'center', justifyContent:'center', borderRadius:30 }}>
                        <Text style={{fontSize:12, color:'#f1497f'}}>
                          {item.name}
                        </Text>
                      </View>
                    
                  )}} 
                />

        </View>

            {/* notification section */}
        <View style={{paddingHorizontal:20}}>
        <Text style={{fontSize:13, fontWeight:'600', color:'#f9417f'}}>
           Notification
          </Text>

        </View>
        <View style={{marginTop:18}}>
          {intrestdata.map((item)=>{
            return (
              <View key={item.id} style={{flexDirection:'row', alignItems:'center',
              justifyContent:'flex-start', paddingHorizontal:20 }}>
              <Text style={{letterSpacing:0.3, color:'#f9417f', fontWeight:'600'}}>{item.name}</Text>
                 <View>
                 <Text style={{fontSize:16}}>
                  is  setMatched
                 </Text>
                 </View>
              </View>
            )
          })}
        </View>
        </ScrollView>
      )}
    </View>
  )
}

export default DatingProfiles

const styles = StyleSheet.create({})