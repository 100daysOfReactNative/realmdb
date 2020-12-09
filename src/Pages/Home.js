import React, {useEffect, useState} from 'react';

import {Container, Form, Input, List, Submit, Title} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Repository from '../components/Repository';
import getRealm from '../services/realm';
import api from '../services/api';
import {Keyboard} from 'react-native';
import axios from 'axios';

Icon.loadFont();

export default function Home() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function loadRepositories() {
      const realm = await getRealm();

      const data = realm.objects('Repository').sorted('stars', true);

      setRepositories(data);
    }
    loadRepositories();
  }, []);

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
      realm.create('Repository', data, 'modified');
    });

    return data;
  }

  async function handleAddRepository() {
    try {
      const response = await api.get(`/repos/${input}`);

      await saveRepository(response.data);

      setInput('');
      setError(false);
      Keyboard.dismiss();
    } catch (err) {
      setError(true);
    }
  }

  return (
    <Container>
      <Title>Repos</Title>
      <Form>
        <Input
          value={input}
          error={error}
          onChangeText={setInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório..."
        />
        <Submit onPress={handleAddRepository}>
          <Icon name="add" sice={22} color="#fff" />
        </Submit>
      </Form>
      <List
        keyboardShouldPersistTaps="handled"
        data={repositories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <Repository data={item} />}
      />
    </Container>
  );
}
