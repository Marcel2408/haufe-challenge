/* eslint-disable react/prop-types */
import React from 'react';
import CharacterCard from '../character-card/CharacterCard';
import './CharacterRow.scss';

const CharacterRow = ({ title, list }) => {
  return (
    <>
      <h3 className="character-row__title">{title}</h3>
      <ul className="character-row">
        {list.map((character) => (
          <li key={character.id} className="character-row__item">
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CharacterRow;
