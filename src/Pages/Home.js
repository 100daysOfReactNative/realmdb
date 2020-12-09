import React, {useEffect, useState} from 'react';

import {Container, Form, Input, List, Submit, Title} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Repository from '../components/Repository';
import getRealm from '../services/realm';
import api from '../services/api';

Icon.loadFont();

export default function Home() {
  const [input, setInput] = useState('');

  async function saveRepository(repository) {
    const data = {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
    };

    const realm = await getRealm();
    realm.write(() => {
      realm.create('RepositorySchema', data);
    });
  }

  async function handleAddRepository() {
    try {
      const response = await api.get(`/repos/${input}`);
      await saveRepository(response.data);
      setInput('');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {}, []);

  return (
    <Container>
      <Title>Repos</Title>
      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositorio"
          value={input}
          onChangeText={setInput}
        />
        <Submit onPress={handleAddRepository}>
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
