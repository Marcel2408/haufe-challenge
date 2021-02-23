/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import requestCharacters from '../../redux/character/character.actions';
import CharacterCard from '../character-card/CharacterCard';
import requireAuth from '../HOC/requireAuth';
import './CharacterList.scss';

const CharacterList = ({ auth, characters, isPending, onRequestCharacters }) => {
  useEffect(() => {
    onRequestCharacters(auth);
  }, []);

  return (
    <main className="section container">
      {isPending ? (
        <h1>Loading</h1>
      ) : (
        <>
          <ul className="character-list">
            {characters &&
              characters.slice(0, 10).map(({ id, ...otherCharacterProps }) => (
                <li key={id} className="character-list__item">
                  <CharacterCard {...otherCharacterProps} />
                </li>
              ))}
          </ul>
          <ul className="character-list">
            {characters &&
              characters.slice(10).map(({ id, ...otherCharacterProps }) => (
                <li key={id} className="character-list__item">
                  <CharacterCard {...otherCharacterProps} />
                </li>
              ))}
          </ul>
        </>
      )}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth.authenticated,
    characters: state.characters.characters,
    isPending: state.characters.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestCharacters: (auth) => dispatch(requestCharacters(auth)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(requireAuth(CharacterList));
