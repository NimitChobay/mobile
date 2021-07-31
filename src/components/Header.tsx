import React, {Component, memo } from 'react';
import { Image,Text, StyleSheet } from 'react-native';


class Header extends Component{
    render(){
        return (
            <Text style={styles.header}>{this.props.children}</Text>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        fontSize: 26,
        color: '#600EE6',
        fontWeight: 'bold',
        paddingVertical: 14,
      },
  });
  
  export default memo(Header);
  