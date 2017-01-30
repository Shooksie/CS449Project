import React from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import Game from './components/Game';

const App = () => {
  return (
      <View style={{ backgroundColor: '#bbbbc3' }}>
        <Header headerText="Umpire Buddy" />
        <Game />
      </View>
  );
};

export default App;
