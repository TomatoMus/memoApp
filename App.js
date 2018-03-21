// import React from 'react';
// import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const App = StackNavigator({
  Home: { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit: { screen: MemoEditScreen },
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
}, {
  navigationOptions: {
    headerTitle: "memot",
    headerTitleStyle: {
      color: '#fff',
    },
    headerStyle: {
      backgroundColor: '#265366',
    }
  },
});

export default App;
