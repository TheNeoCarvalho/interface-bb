import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import {Container, Logo, Exit, Box} from './styles';
import Header from '../../components/Header';
import BoxValue from '../../components/BoxValue';

import logo from '../../assets/logo.png';
import exit from '../../assets/exit.png';

function HomeScreen() {
  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Container>
          <Header />
          <Box>
            <BoxValue />
            <BoxValue />
          </Box>
        </Container>
      </ScrollView>
    </>
  );
}

export default HomeScreen;

HomeScreen.navigationOptions = {
  headerLeft: <Logo source={logo} />,
  headerRight: (
    <TouchableOpacity>
      <Exit source={exit} />
    </TouchableOpacity>
  ),
  headerTitle: null,
};
