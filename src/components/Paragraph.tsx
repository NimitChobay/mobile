import React, {Component, memo } from 'react';
import { StyleSheet, Text } from 'react-native';



  class Paragraph extends Component{
    render(){
        return (
            <Text style={styles.text}>{this.props.children}</Text>
        )
    }

}
const styles = StyleSheet.create({
    text: {
      fontSize: 16,
      lineHeight: 26,
      color: '#567854',
      textAlign: 'center',
      marginBottom: 14,
    },
  });
  
  export default memo(Paragraph);
  