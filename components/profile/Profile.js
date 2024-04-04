import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Icon } from '@rneui/themed';
const Profile = ({navigation}) => {
  const [loading, setLoading] = useState(false)
  const[openintrestmodal, setOpenintrestmodal] = useState(false)
  const [intrestdata, setIntrestsdata] = useState([{id:1, name:'travelling',},{id:5, name:'travelling',}, {id:2, name:'sports', }, {id:3, name:'music', }, {id:4, name:'football',}])
  

  function randommodel (){
    return (
      <Modal transparent={true} visible={openintrestmodal} animationType='fade' >
<View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#ffebf2'}}>
<Text>
  Intrests
</Text>
</View>
      </Modal>
    )
  }
  
  
  return (
    <View style={{backgroundColor:'#fdf7fd', paddingTop:30}}>
     <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
   <TouchableOpacity onPress={()=>navigation.goBack()}>
   <View style={{position:'relative', padding:10,  alignItems:'flex-start'}}>
        <Icon type='antdesign' name='arrowleft' size={36} borderRadius={5}  color={"#171821"}/>
        </View>
   </TouchableOpacity>
   
     <View style={{margin:10, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      
     <View style={{margin:10,padding:20, width:107, borderRadius:106, borderWidth:1,  borderColor:'#9d9ca1', alignItems:'center', justifyContent:'center'}} >
        
        <Image style={{resizeMode:'contain', width:100, height:100, borderRadius:50  }} source={require('../../assets/sigscreen.png')}/>
     </View>

<View style={{padding:20}}>
<View style={{alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'#171821'}}>
              J.seka parker
            </Text>
          </View>
       
       <View style={{padding:10, }}>
       <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
            <View style={{alignItems:'center', justifyContent:'center'}}>
           
            <View style={{padding:10}}>
             <Text style={{fontSize:8, fontWeight:'700', color:'#171821'}}>100</Text>   
            </View>
            <View>
             <Text style={{fontSize:10, fontWeight:'500', color:'#171821'}}>Posts</Text>
            </View>


            </View>
            <View style={{alignItems:'center', justifyContent:'center'}}>
           
            <View style={{padding:10}}>
             <Text style={{fontSize:8, fontWeight:'700', color:'#171821'}}>100</Text>   
            </View>
            <View>
             <Text style={{fontSize:10, fontWeight:'500', color:'#171821'}}>Followers</Text>
            </View>


            </View>
            <View style={{alignItems:'center', justifyContent:'center'}}>
           
            <View style={{padding:10}}>
             <Text style={{fontSize:8, fontWeight:'700', color:'#171821'}}>100</Text>   
            </View>
            <View>
             <Text style={{fontSize:10,  fontWeight:'500', color:'#171821'}}>Following</Text>
            </View>


            </View>
       </View>
    
</View>
    
          </View>
     </View>
        




        <View>
        
        


{/*edit and share profile*/}
<View style={{marginTop:20, flexDirection:'row', alignItems:'center', justifyContent:"space-between",padding:10}}>
<TouchableOpacity onPress={()=>navigation.navigate('Editprofile')}>
<View style={{backgroundColor:'#f1497f', borderRadius:10, margin:10, height:50, width:150, alignItems:'center', justifyContent:'center'}}>
  <Text style={{color:'#ffe8f2', fontSize:16, fontWeight:'bold'}}>
    Edit Profile
  </Text>
</View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('Editprofile')}>
<View style={{backgroundColor:'#f1497f', borderRadius:10, margin:10, height:50, width:150, alignItems:'center', justifyContent:'center'}}>
  <Text style={{color:'#ffe8f2', fontSize:16, fontWeight:'bold'}}>
    Share Profile
  </Text>
</View>
</TouchableOpacity>

</View>


{/* about gender birthday and intrests */}
           <View style={{paddingHorizontal:40}}>
            <View style={{paddingHorizontal:20, padding:15,}}>
            <View style={{alignItems:'flex-start', justifyContent:'flex-start', paddingBottom:4}}>
              <Text style={{fontSize:16, color:'#f1497f', fontWeight:'600'}}>
                About me
              </Text>
            </View>
            <View>

            <Text style={{fontSize:13, letterSpacing:1,}}>
                hello myself rajesh kutropali, i am here delightful to share with you my expirence,
                about my future. hello guyz
              </Text>
            </View>
             
            </View>
           </View>


           <View>
            <View style={{marginTop:30,alignItems:'flex-start', justifyContent:'center',paddingBottom:5, paddingHorizontal:20}}>
              <Text style={{fontSize:16, fontWeight:'600', color:'#f1497f'}}>
                Intrests
              </Text>
              <>
               
                </>
            </View>
           </View>

        </View>
<View style={{ }}>
<FlatList 
showsHorizontalScrollIndicator={false}
                  horizontal
                  contentContainerStyle={styles.contentContainer}
                  data={intrestdata}
                  keyExtractor={(item,index)=>index}
                  renderItem={({item,index})=>{
                     return(
                      //replace key item.id
                      <View key={item} style={{margin:20, backgroundColor:'#ded2fa', padding:10, alignItems:'center', justifyContent:'center', borderRadius:30 }}>
                        <Text style={{fontSize:12, color:'#f1497f'}}>
                          {item.name}
                        </Text>
                      </View>
                    
                  )}} 
                />

<View>
<TouchableOpacity onPress={(prev)=>setOpenintrestmodal(!prev)}>
<Text>
    add intrest
  </Text>
</TouchableOpacity>
 {randommodel()}
</View>
</View>
      
{/* photos */}
<View style={{margin:16}}>
  <Text style={{color:'#f1497f', fontSize:15, fontWeight:'600'}}>
medias
  </Text>
</View>

      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  contentContainer:{
    flexGrow:1, justifyContent:'center'
  }
})