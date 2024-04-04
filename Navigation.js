import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getToken } from './components/services/AsyncStorageService';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './components/signin/Signin';
import WelcomeScreen from './components/signin/WelcomeScreen';
import RegistrationOption from './components/signin/RegistrationOption';
import Homelogged from './components/loggedin/Homelogged';
import Khalti from './components/payments/Khalti';
import Razorpay from './components/payments/Razorpay';
import Signup from './components/signin/Signup';
import Khaltiwallet from './components/payments/Khaltiwallet';
import Profile from './components/profile/Profile';
import RegistrationOtp from './components/signin/RegistrationOtp';
import Registrationdetail from './components/signin/Registrationdetail';
import RegistrationComplete from './components/signin/RegistrationComplete';
import Editprofile from './components/profile/Editprofile';
import Paymentotp from './components/profile/Paymentotp';
import Suscribe from './components/others/Suscribe';
import Khaltiotp from './components/payments/Khaltiotp';
import Savereels from './components/addPosts/Savereels';
import Stripe from './components/payments/Stripe';

const Stack = createNativeStackNavigator();



const Navigation = () => {


    const[loaded, setLoaded] = useState(false)
    const[token, setToken] = useState('')

    useEffect(() => {
        (async () => {
          const tokene = await getToken() // Getting Token from Storage
          setToken(tokene)
          if(token === null){
            
            setLoaded(true)
          } else{
            
            setLoaded(true)
          }
                   // Store Token in Local State
        })();
      },[!loaded])
  return (
    <>
    {!loaded ? (
        <>
        <View style={{justifyContent:'center', alignItems:'center', height:'100%'}}>
        <ActivityIndicator  size={81} color="#f1497f" />
        <Text style={{color:'#f1497f', fontSize:20}}>
          wait while loading...
        </Text>
        </View>
        </>
    ): (
        <>

{!token  ? (
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false, contentStyle:{backgroundColor:"#fdf7fd"}}}>
        {/* initial and login screen*/ }
      <Stack.Screen name='Welcomescreen' component={WelcomeScreen }  />
      <Stack.Screen name='Registerationoption' component={RegistrationOption}/>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name='Registrationotp' component={RegistrationOtp}/>
         <Stack.Screen name='Registrationdetail' component={Registrationdetail}/>
         <Stack.Screen name='Registrationcomplete' component={RegistrationComplete}/>

        
<Stack.Screen name='Homelogged' component={Homelogged}/>
 {/* payment  screen*/ }
<Stack.Screen name='Khalti' component={Khalti}/>
<Stack.Screen name='Razorpay' component={Razorpay}/>
<Stack.Screen name='Khaltiwallet' component={Khaltiwallet}/>
<Stack.Screen name='Paymentotp' component={Paymentotp}/>
<Stack.Screen name='Khaltiotp' component={Khaltiotp}/>
<Stack.Screen name='Stripe' component={Stripe}/>
 {/* profile  screen*/ }
 <Stack.Screen name='Profile' component={Profile}/>
 <Stack.Screen name='Editprofile' component={Editprofile}/>
{/* suscribe  screen*/ }
<Stack.Screen name='Suscribe' component={Suscribe}/>
{/* savepost  screen*/ }
<Stack.Screen name='Savereels' component={Savereels}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
):(
    <>
    <NavigationContainer theme={{colors:{background:"#fdf7fd"}}}>
      <Stack.Navigator screenOptions={{headerShown:false, contentStyle:{backgroundColor:"#fdf7fd"}}}>
      {/* initial and login screen*/ }
      <Stack.Screen name='Homelogged' component={Homelogged}/>

      <Stack.Screen name='Welcomescreen' component={WelcomeScreen }  />
      <Stack.Screen name='Registerationoption' component={RegistrationOption}/>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name='Signup' component={Signup}/>
      <Stack.Screen name='Registrationotp' component={RegistrationOtp}/>
      <Stack.Screen name='Registrationdetail' component={Registrationdetail}/>
      <Stack.Screen name='Registrationcomplete' component={RegistrationComplete}/>
         

        {/* payment  screen*/ }
      <Stack.Screen name='Khalti' component={Khalti}/>
      <Stack.Screen name='Razorpay' component={Razorpay}/>
      <Stack.Screen name='Khaltiwallet' component={Khaltiwallet}/>
      <Stack.Screen name='Paymentotp' component={Paymentotp}/>
      <Stack.Screen name='Stripe' component={Stripe}/>
       {/* profile  screen*/ }
      <Stack.Screen name='Profile' component={Profile}/>
      <Stack.Screen name='Editprofile' component={Editprofile}/>
     
     {/* suscribe  screen*/ }
<Stack.Screen name='Suscribe' component={Suscribe}/>
     

     {/* savepost  screen*/ }
<Stack.Screen name='Savereels' component={Savereels}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
)}
        </>
    )}

    </>
  )
}

export default Navigation

const styles = StyleSheet.create({})