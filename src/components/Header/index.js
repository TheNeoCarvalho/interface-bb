import React from 'react';
import {View, Text} from 'react-native';

import {Container, TextHeader, NameHeader} from './styles';

export default function Header() {
  return (
    <Container>
      <NameHeader style={{borderBottomWidth: 4, borderColor: '#feed00'}}>
        <TextHeader numberOfLines={1}>Francisco Manoel Carvalho</TextHeader>
      </NameHeader>
    </Container>
  );
}
