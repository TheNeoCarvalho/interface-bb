import React from 'react';
import {View, Text} from 'react-native';

import {Container, TextRs, TextValue, Box, TextInfo} from './styles';

export default function BoxValue() {
  return (
    <Container>
      <Box>
        <TextRs>R$</TextRs>
        <TextValue>55.215,21</TextValue>
      </Box>
      <TextInfo>Saldo Disponível</TextInfo>
    </Container>
  );
}
