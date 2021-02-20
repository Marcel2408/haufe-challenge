import React from 'react';
import CharacterList from '../character-list/CharacterList';
import Header from '../header/Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <CharacterList />
    </div>
  );
}

export default App;
