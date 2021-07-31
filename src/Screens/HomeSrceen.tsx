// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const HomeScreen = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, padding: 16}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                marginBottom: 16,
              }}>
              Welcome to Home Srceen
              {'\n\n'}
              This is the Home Screen
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              color: 'grey',
            }}>
            Welcome Here
          </Text>
         
        </View>
      </SafeAreaView>
    );
  };
  
  export default HomeScreen;