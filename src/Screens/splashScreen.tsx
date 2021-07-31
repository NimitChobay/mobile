
import React from 'react';
import { StyleSheet,Button, Text, View,Modal,TouchableOpacity} from 'react-native';
import Background from '../components/Background';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';



export default function SplashScreen({route, navigation}) {
  
    return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen}    options={{ title: 'Welcome' }} />
      <Stack.Screen name="Login" component={LoginScreen}    options={{ title: 'Login' }} />
      
            <Stack.Screen name="Home" component={HomeScreen}  />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="GooglePage" component={GooglePage} />
        </Stack.Navigator>
        </NavigationContainer>
        
     
    );
  };

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
     
      marginTop: 50,
    }
  });