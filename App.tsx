import 'react-native-gesture-handler';

import React,{Component} from 'react';
import { StyleSheet, Text, View,Button ,Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WebView from 'react-native-webview';

import LoginScreen from './src/Screens/LoginScreen';
import DrawerNavigationRoutes from './src/Screens/DrawerNavigatorRoutes'
import SplashScreen from './src/Screens/splashScreen';
import TermsAndConditions from './src/Screens/TermsAndCondition';



var Stack = createStackNavigator();

 const App= ()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Terms">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen  name="SplashScreen" component={SplashScreen}   options={{headerShown: false}}
        />
         <Stack.Screen  name="Terms" component={TermsAndConditions}   options={{headerShown: false}}
        />
         
      <Stack.Screen name="Login" component={LoginScreen}  options={{ title: 'Login',headerShown: false }} />
      <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
        </Stack.Navigator>
        </NavigationContainer>
  );
}

export default App;
  
  function GooglePage({route, navigation}) {

    var { itemId, otherParam } = route.params;
  
    return (
      <View style = {styles.container}>
         <WebView
         source = {{ uri:
         'https://m.fog.com/game/snake-3310-html5' }}
         />
        
      </View>
      
    );
  }  
function DetailsScreen({route, navigation }) {

  var { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
      title="Go to Details... again"
      onPress={() => navigation.push('Details',route.params)}
    />
   
    <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    <Button title="Go back" onPress={() => navigation.goBack()} />

    <Button
      title="Go back to first screen in stack"
      onPress={() => navigation.popToTop()}
    />
    </View>
  );
}   


 
var styles = StyleSheet.create({
  container: {
     height: 700,
  }
})
