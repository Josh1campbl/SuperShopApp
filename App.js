import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import firebase from 'firebase/app'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

import WelcomeScreen from './components/screens/WelcomeScreen';
import HomeScreen from './components/screens/HomeScreen';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const firebaseConfig = {
  apiKey: "AIzaSyCVukLm4v5Jh6QrEm7i3GVD4YvJ_ne3nuA",
  authDomain: "supertest-d50a2.firebaseapp.com",
  projectId: "supertest-d50a2",
  storageBucket: "supertest-d50a2.appspot.com",
  messagingSenderId: "237042370323",
  appId: "1:237042370323:web:59df6d309460c50063fce6",
  measurementId: "G-7QHKT0GK75"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

const Stack = createNativeStackNavigator();

export class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }

  render(){
    const { loggedIn, loaded } = this.state
    if(!loaded){
      return(
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>Loading</Text>
        </View>
      );
    }

    if(!loggedIn){
      return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
      );
    }
    return (
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={{ headerShown: false}} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
      
    );
  }
}

export default App;