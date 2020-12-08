import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import {Container, Description, Name, Stat, StatCount, Stats} from './styles';

export default function Repository({data}) {
  return (
    <Container>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>
      <Stats>
        <Stat>
          <Icon name={'grade'} size={16} color="#333" />
          <StatCount>{data.stars}</StatCount>
        </Stat>
        <Stat>
          <Icon name={'mediation'} size={16} color="#333" />
          <StatCount>{data.forks}</StatCount>
        </Stat>
      </Stats>
    </Container>
  );
}
