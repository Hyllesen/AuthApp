import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {

  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDTdh46q-vDDrK2rVXA2Uai0szKIlEpX78',
      authDomain: 'authapp-c356a.firebaseapp.com',
      databaseURL: 'https://authapp-c356a.firebaseio.com',
      storageBucket: 'authapp-c356a.appspot.com',
      messagingSenderId: '950656819311'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button>
          Log out
        </Button>
      );
    }

    return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header title='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}
