import * as React from 'react';
import { Text, View, StyleSheet,Image,TextInput,Button } from 'react-native';
import {createAppContainer,createSwitchNavigator,} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Loginscreen from './LoginScreen';
import Signup from './SignupScreen';
import HomeScreen from './HomeScreen';
import Alert from './Alert'

export default class App extends React.Component {
  
  render(){
  return (
    <View style={styles.container}>
       <CC/>
    </View>
  );
}
}
const switchnavigatar= createSwitchNavigator({
  Login:{screen:Loginscreen},
  Signup:{screen:Signup},
  Home:{screen:HomeScreen},
  Alert:{screen:Alert}
})
const CC = createAppContainer(switchnavigatar)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: '#fff',
  },
});
