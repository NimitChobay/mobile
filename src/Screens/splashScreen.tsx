// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  ActivityIndicator,
  View,
  StyleSheet, 
  Image,Text
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen=({navigation})=> {
  
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
  const [imgloaded, setImgloaded] = useState(false);
  
  useEffect(() => {
    if(true){
      setTimeout(() => {
        setAnimating(false);
        //Check if user_id is set or not
        //If not then send for Authentication
        //else send to Home Screen
        
        AsyncStorage.getItem('user_id').then((value) =>
          navigation.replace(
            value === null ? 'Terms' : 'DrawerNavigationRoutes'
          ),
        );
      }, 1000);  
    }
  }, []);


    return (
      <View style={styles.container}>
      <Image
        source={require('../assets/logogame.png')}
        style={styles.img}
        onLoad={() => setImgloaded(true)}
      />
      <Text style={styles.appname}>
            Big Win
      </Text>
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
    
   
        
     
    );
  };
  export default SplashScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#307ecc',
    },
    img:{
      width: '10%', 
      resizeMode: 'contain', 
      margin: 10
    },
    appname:{
      color: '#114998',
      fontSize: 30,
      fontWeight: 'bold',
    },
    activityIndicator: {
      alignItems: 'center',
      height: 60,
    },
  });