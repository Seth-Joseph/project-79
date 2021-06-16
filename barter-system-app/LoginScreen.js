import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
  Image,
} from 'react-native';
import firebase from 'firebase';
import db from './config'

export default class Loginscreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  userlogin = (email, password) => {
    console.log('here', email, password);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log('auth successful');
        this.props.navigation.navigate('Home');
        return Alert.alert('User added');
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./b.png')} style={styles.b} />
        <Text style={styles.paragraph}>Welcome,</Text>
        <Text style={styles.paragraph1}>Sign in to continue!</Text>
        <TextInput
          style={styles.text}
          placeholder="Email"
          keyboardType="default"
          onChangeText={(text) => {
            this.setState({
              email: text,
            });
          }}
          value={this.state.email}
        />

        <TextInput
          style={styles.text2}
          placeholder="Password"
          secureTextEntry={true}
          keyboardType="default"
          onChangeText={(text) => {
            this.setState({
              password: text,
            });
          }}
          value={this.state.password}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.userlogin(this.state.email, this.state.password);
          }}>
          Login
        </TouchableOpacity>
        <View>
          <Text style={styles.c}>
           I'm a new user.
            <TouchableOpacity style={styles.d} onPress={() => this.props.navigation.navigate('Signup')}> Sign Up</TouchableOpacity>
          </Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: '#FEFEF1',
  },
  paragraph: {
   paddingTop:0,
    paddingLeft:10,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily:'monospace',
    color:'black',
  },
  paragraph1: {
     //paddingTop:20,
    paddingLeft:10,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:'monospace',
    color:'grey',
  },
  button: {
    padding: 10,
    borderColor: '#360A50',
    borderWidth: 1,
    color: 'white',
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
    borderTopColor: '#FEFEF1',
    borderLeftColor: '#FEFEF1',
    borderRightColor: '#FEFEF1',
    borderWidth: 2,
    color: 'black',
    width: 250,
    marginLeft: 40,
    fontWeight:"bold",
    borderRadius:2.5
},
  text2: {
   padding: 10,
    marginTop: 10,
    borderBottomColor: '#360A50',
    borderTopColor: '#FEFEF1',
    borderLeftColor: '#FEFEF1',
    borderRightColor: '#FEFEF1',
    borderWidth: 2,
    color: 'black',
    width: 250,
    marginLeft: 40,
    fontWeight:"bold",
    borderRadius:2.5
  },
  b: {
     width:150,
  height:150,
  marginLeft:90
  },
  c: {
    color: 'grey',
    fontFamily: 'Sans-Serif',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    
  },
  d:{
    color:'#360A50',
    borderWidth:2,
    borderBottomColor:'#360A50',
    borderTopColor:'#FEFEF1',
    borderRightColor:'#FEFEF1',
    borderLeftColor:'#FEFEF1',
    borderRadius:2.5

  },
    
});
