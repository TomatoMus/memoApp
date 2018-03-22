// import React from 'react';
// import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

import ENV from './env.json';

const config = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.AUTH_DOMAIN,
  databaseURL: ENV.DB_URL,
  projectId: ENV.PROJECT_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.SENDER_ID,
};
firebase.initializeApp(config);

const App = StackNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  Home: { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit: { screen: MemoEditScreen },
}, {
  navigationOptions: {
    headerTitle: "memot",
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerTitleStyle: {
      color: '#fff',
    },
    headerStyle: {
      backgroundColor: '#265366',
    }
  },
});

export default App;
