import React from 'react';
import {View, Text} from 'react-native';

import {Container, TextRs, TextValue, Box, TextInfo} from './styles';

export default function BoxValue({text, value = '0,00'}) {
  return (
    <Container>
      <Box>
        <TextRs>R$</TextRs>
        <TextValue>{value}</TextValue>
      </Box>
      <TextInfo>{text}</TextInfo>
    </Container>
  );
}
