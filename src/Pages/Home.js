import React from 'react';

import {Container, Form, Input, List, Submit, Title} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Repository from '../components/Repository';

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
      <List
        keyboardShouldPersistTaps="handled"
        data={[
          {
            id: 1,
            name: 'emerson',
            description: 'lorem ipsum',
            stars: 1234,
            forks: 133,
          },
        ]}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <Repository data={item} />}
      />
    </Container>
  );
}
