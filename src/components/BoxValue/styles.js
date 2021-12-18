import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: #fff;
  height: 80px;
  padding-left: 20px;
`;

export const Box = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TextRs = styled.Text`
  margin-top: 5px;
  margin-right: 5px;
  color: #005aa6;
  font-weight: bold;
  font-size: 15px;
`;

export const TextValue = styled.Text`
  color: #005aa6;
  font-weight: 500;
  font-size: 22px;
`;

export const TextInfo = styled.Text`
  height: 40px;
  margin-top: -10px;
  color: #666;
`;
