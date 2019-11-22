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
import TabNavigator from './src/screens/TabNavigator';
import DrawerNavigator from './src/screens/navigation/DrawerNavigator';

const App = () => {
  return (
      <DrawerNavigator/>
  );
};

export default App;
