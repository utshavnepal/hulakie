import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {store} from './components/store'
import { useDispatch, useSelector, Provider } from 'react-redux'
import Navigation from './Navigation';
import {StripeProvider} from "@stripe/stripe-react-native"
 function App() {
  const [isLoaded, setIsLoaded] = useState(true)
  
  return (
    <>
      { isLoaded && (
        < >
<Navigation />
      </>)}
      { !isLoaded && (
        <>
        <View style={{justifyContent:'center', alignItems:'center', height:'100%'}}>
        <ActivityIndicator  size={81} color="#f1497f" />
        <Text style={{color:'#f1497f', fontSize:20}}>
          wait while loading...
        </Text>
        </View>
       
        </>

      )}
    </>
  );
}

const styles = StyleSheet.create({

});
export default () => {
  return (
    <Provider store={store}>
     <StripeProvider publishableKey='pk_test_51Ncmw4SGulhYHEEclekrXRLjUqxeLoag2LOY27iUHWCwdHR9MPBMOzHDOJuhliKi7abfndajM6roHyWuzFA4ITxS00c09QX6rp'>
     <App />
     </StripeProvider>
     
    </Provider>
  )
}