import React from 'react';
import Home from './Pages/Home';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Home />
    </>
  );
}
