import React from 'react';
import {View, Text,Image, SafeAreaView} from 'react-native';
import { Card, ListItem, Button, Icon,Divider } from 'react-native-elements'
const WalletScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
<Card>
  <Text> Deposite Rs. 50 or higher and get 30% cashback in BigWin (upto 30Rs).</Text>

</Card>

<Card wrapperStyle={{flexDirection:'row',flex:1,justifyContent:'space-evenly'}}>

<Card wrapperStyle={{flexDirection:'column',flex:1}}>
<Text>10 Rs</Text>
</Card>

<Card wrapperStyle={{flexDirection:'column',flex:1}}>
<Text> 20 Rs</Text>
</Card>
<Card wrapperStyle={{flexDirection:'column',flex:1}}>
<Text> 30 Rs</Text>
</Card>


</Card>

    </SafeAreaView>
  );
};

export default WalletScreen;