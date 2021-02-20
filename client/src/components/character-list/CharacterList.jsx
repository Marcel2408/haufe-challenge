import React from 'react';
import CharacterCard from '../character-card/CharacterCard';
import './CharacterList.scss';

const CharacterList = () => {
  return (
    <main className="section container">
      <ul className="character-list">
        <li className="character-list__item">
          <CharacterCard />
        </li>
        <li className="character-list__item">
          <CharacterCard />
        </li>
        <li className="character-list__item">
          <CharacterCard />
        </li>
        <li className="character-list__item">
          <CharacterCard />
        </li>
      </ul>
    </main>
  );
};

export default CharacterList;
