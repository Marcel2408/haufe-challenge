import React from 'react';
import './CharacterList.scss';

const CharacterList = () => {
  return (
    <main className="container">
      <ul className="character-list">
        <li className="character-list__item">1st item</li>
        <li className="character-list__item">2nd item</li>
        <li className="character-list__item">3rd item</li>
        <li className="character-list__item">4th item</li>
      </ul>
    </main>
  );
};

export default CharacterList;
