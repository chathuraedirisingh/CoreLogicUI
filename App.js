import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SignIn from './src/screens/SignIn';
import HomePage from './src/screens/Home';

const App = () => {
  return (
      <HomePage/>
  );
};

export default App;
