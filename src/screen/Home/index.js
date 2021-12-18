import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import {Container, Logo, Exit, Box} from './styles';
import Header from '../../components/Header';
import BoxValue from '../../components/BoxValue';

function HomeScreen() {
  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Container>
          <Header />
          <Box>
            <BoxValue value="58.221,83" text="Saldo disponível" />
            <BoxValue value="-28,00" text="Agendando até 05/jan" />
          </Box>
        </Container>
      </ScrollView>
    </>
  );
}

export default HomeScreen;
