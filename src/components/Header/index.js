import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {Container, TextHeader, NameHeader, IconHeader} from './styles';

import Icon from 'react-native-vector-icons/Feather';

import logo from '../../assets/logo.png';
import exit from '../../assets/exit.png';

export default function Header() {
  return (
    <Container>
      <IconHeader>
        <Image style={{width: 32, height: 32}} source={logo} />
        <TouchableOpacity>
          <Icon name="log-out" size={24} color={'#fff'} />
        </TouchableOpacity>
      </IconHeader>
      <NameHeader style={{borderBottomWidth: 4, borderColor: '#feed00'}}>
        <TextHeader numberOfLines={1}>Francisco Manoel Carvalho</TextHeader>
      </NameHeader>
    </Container>
  );
}
