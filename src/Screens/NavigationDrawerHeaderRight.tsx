import React from 'react';
import {View,Text, Image, TouchableOpacity} from 'react-native';
import { Avatar, Badge, Icon, withBadge ,Chip} from 'react-native-elements'


const NavigationDrawerHeaderRight = (props) => {
 
    return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity>
      <Chip
    title="Right Icon Chip"
    icon={{
    name: "close",
    type: "font-awesome",
    size: 20,
    color: "white",
    }}
    iconRight
/>
      <Badge value="99+" status="error" />
      </TouchableOpacity>

      
    </View>
  );
};
export default NavigationDrawerHeaderRight;