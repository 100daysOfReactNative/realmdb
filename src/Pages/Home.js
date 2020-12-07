import React from 'react';

import {Container, Title, Form, Input, Submit} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

export default function Home() {
  return (
    <Container>
      <Title>Repos</Title>
      <Form>
        <Input />
        <Submit>
          <Icon name="add" sice={22} color="#fff" />
        </Submit>
      </Form>
    </Container>
  );
}
