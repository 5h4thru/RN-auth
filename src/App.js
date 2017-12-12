import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

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

    // onAuthChanged
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              <Text>Log Out</Text>
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
