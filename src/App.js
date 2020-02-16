import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import 'react-native-gesture-handler';

import MainStack from './MainStack';

import Header from './components/Header';

function App() {
  return (
    <>
      <StatusBar backgroundColor="#003664" barStyle="dark-light" />
      <MainStack />
      <SafeAreaView />
    </>
  );
}

export default App;
