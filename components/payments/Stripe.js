import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import {StripeProvider, CardField, useConfirmPayment, useStripe} from "@stripe/stripe-react-native"
import axios from 'axios';

const Stripe = () => {
    const stripe = useStripe()
  const [name, setName] = useState("");
const [cardDetails, setCardDetails] = useState([])

const fetchPaymentIntentClientSecret = async()=>{
    await axios.post("http://192.168.1.100:5000/stripe/create-paymentintent",
    JSON.stringify({name:name}),
     {
        
    headers:{
        "Content-Type": "application/json"
    }
}).then((res)=>{
    console.log(res)
    
    
}).catch((error)=>{
    console.log(error)
    
    
})
}

const handlepress = async ()=>{
  try {
    if (!name){
        return Alert.alert("please enter your name")
    }
    fetchPaymentIntentClientSecret()
  } catch (error) {
    Alert.alert("Something went wrong try again later")
  }
}
return (
   
<View style={styles.container}>
    <TextInput 
        autoCapitalize='none'
        placeholder="name"
        keyboardType="name-phone-pad"
        value={name}
        onChangeText={setName}
        style={styles.input}
    />
    
    <Button
    
        title='pay 100 rs only'
        onPress={handlepress}
        
    />
</View>
 
  )
}

export default Stripe

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        margin:20
    },
    input:{
        backgroundColor:"#efefefef",
        borderRadius:8,
        fontSize:20,
        height:50,
        padding:10
    }, 
    card:{
        backgroundColor:'#efefefef',
        
    },
    cardContainer:{
        height:50,
         marginVertical:30
    }
})