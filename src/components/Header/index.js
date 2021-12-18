import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import {
  Container,
  TextHeader,
  NameHeader,
  IconHeader,
  Logo,
  Buttons,
} from './styles';

import Icon from 'react-native-vector-icons/Feather';

import logo from '../../assets/logo.png';
import exit from '../../assets/exit.png';

export default function Header() {
  return (
    <Container>
      <IconHeader>
        <Logo>
          <Image style={{width: 32, height: 32}} source={logo} />
        </Logo>
        <Buttons>
          <TouchableOpacity style={{paddingRight: 10}}>
            <Icon name="message-circle" size={24} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity style={{paddingRight: 5}}>
            <Icon name="log-out" size={24} color={'#fff'} />
          </TouchableOpacity>
        </Buttons>
      </IconHeader>
      <NameHeader style={{borderBottomWidth: 4, borderColor: '#feed00'}}>
        <TextHeader numberOfLines={1}>Francisco Manoel Carvalho</TextHeader>
      </NameHeader>
    </Container>
  );
}
