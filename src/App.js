import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    // firebase initialization
    firebase.initializeApp({
      apiKey: 'AIzaSyAcDws85CvJKE0CVdAfO1tJ2BhyCc4LUoU',
      authDomain: 'rn-auth-72785.firebaseapp.com',
      databaseURL: 'https://rn-auth-72785.firebaseio.com',
      projectId: 'rn-auth-72785',
      storageBucket: 'rn-auth-72785.appspot.com',
      messagingSenderId: '938410903984'
    });
  }

  render() {
    return (
      <View>
        <Text>An App</Text>
        <Header headerText="Authentication" />
      </View>
    );
  }
}

export default App;
