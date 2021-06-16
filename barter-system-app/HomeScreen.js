import React from 'react';  
import {StyleSheet, Text, View,Button,TextInput,TouchableOpacity,Image,Alert} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import {} from 'react-navigation';

import Loginscreen from './LoginScreen'
import Signup from './SignupScreen'
import db from './config'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>  
          <Text>Home Screen</Text>  
        </View>  
    );
  }
}
class Exchangescreen extends React.Component {  
  addItem = (itemName,description)=>{
    var userName =this.state.userName
    db.collection("exchange_requests").add({
      "username" : userName,
      "item_name" : itemName,
      "description" : description
    })
    this.setState({
      itemName:'',
      description:''
    })
    return Alert.alert(
      'Item ready to exchange',
      '',
      [
        {text:'Ok',onPress: () => {
          this.props.navigation.navigate('Home')
        }}
      ]
    );
  }
  render() {  
    return (  
        <View style={styles.container}>  
          <Image source={require('./b.png')} style={styles.b} />
        <Text style={styles.paragraph}>Add Item</Text>
        <TextInput
          style={styles.text}
          placeholder="Item Name"
          keyboardType="default"
        />

        <TextInput
          style={styles.text2}
          placeholder="Item Description"
          keyboardType="default"
          multiline={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress = {()=>{this.addItem(this.state.itemName.this.state.description)}} >
          Add Item
        </TouchableOpacity>
        </View>  
    );  
  }  
}  
/*class Warning extends React.Component{
   render() {  
    return (  
        <View style={styles.container}>  
          <Image source={require('./check.png')} style={styles.b} />
        <Text style={styles.paragraph}>All right!</Text>
        <Text style={styles.paragraph}>Your item has been added successfully</Text>


        <TouchableOpacity
          style={styles.button}
          onPress = {()=>{this.props.navigate.navigation('Alert')}} >
          Submit
        </TouchableOpacity>
        </View>  
    );  
  }  
}  
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: '#FEFEF1',
  },
  paragraph: {
    paddingTop: 0,
    paddingLeft: 100,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: 'black',
  },
  button: {
    padding: 10,
    borderColor: '#360A50',
    borderWidth: 1,
    color: '#FEFEF1',
    borderRadius: 20,
    width: 250,
    textAlign: 'center',
    marginLeft: 40,
    marginTop: 20,
    backgroundColor: '#360A50',
    fontFamily: 'sans-serif',
  },
  text: {
    padding: 10,
    marginTop: 10,
    borderBottomColor: '#360A50',
    borderTopColor: '#360A50',
    borderLeftColor: '#360A50',
    borderRightColor: '#360A50',
    borderWidth: 2,
    color: 'black',
    width: 250,
    marginLeft: 40,
    fontWeight:"bold",
    borderRadius:5
  },
  text2: {
    padding: 10,
    marginTop: 10,
    borderBottomColor: '#360A50',
    borderTopColor: '#360A50',
    borderLeftColor: '#360A50',
    borderRightColor: '#360A50',
    borderWidth: 2,
    color: 'black',
    width: 250,
    marginLeft: 40,
    fontWeight:"bold",
    borderRadius:5,
    height:150
  
  },
  b: {
    width: 150,
    height: 150,
    marginLeft: 90,
  }, 
});  
const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: HomeScreen,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                    </View>),  
            }  
        },  
        Exchange: { screen: Exchangescreen,  
            navigationOptions:{  
                tabBarLabel:'Exchange',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}/>  
                    </View>),  
                activeColor: '#360A50',  
                inactiveColor: 'gray',  
                barStyle: { backgroundColor: 'white' },  
            }  
        },  
      
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#360A50',  
      inactiveColor: 'gray',  
      barStyle: { backgroundColor: 'white' }, 
      
    },  
);  
export default createAppContainer(TabNavigator);  
