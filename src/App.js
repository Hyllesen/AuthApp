import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDTdh46q-vDDrK2rVXA2Uai0szKIlEpX78',
      authDomain: 'authapp-c356a.firebaseapp.com',
      databaseURL: 'https://authapp-c356a.firebaseio.com',
      storageBucket: 'authapp-c356a.appspot.com',
      messagingSenderId: '950656819311'
    });
  }

  render() {
    return (
      <View>
        <Header title='Authentication' />
        <LoginForm />
      </View>
    );
  }
}
