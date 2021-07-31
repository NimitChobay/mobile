import React, { Component, memo } from 'react';
import {  ImageBackground,  StyleSheet,  KeyboardAvoidingView,} from 'react-native';

class Background extends Component{

    render(){
        return (
        <ImageBackground
            source={require('../assets/background_dot.png')}
            resizeMode="repeat"
            style={styles.background}
        >
            <KeyboardAvoidingView style={styles.container} behavior="padding">
      {this.props.children}
    </KeyboardAvoidingView>

        </ImageBackground>
        )
    }
}
 
var styles = StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
    },
    container: {
      flex: 1,
      padding: 20,
      width: '100%',
      maxWidth: 340,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export default memo(Background);
