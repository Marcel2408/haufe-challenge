/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import requestCharacters from '../../redux/character/character.actions';
import CharacterCard from '../character-card/CharacterCard';
import requireAuth from '../HOC/requireAuth';
import './CharacterList.scss';

const CharacterList = ({ auth, characters, isPending, mylist, onRequestCharacters }) => {
  useEffect(() => {
    if (!characters.length) {
      onRequestCharacters(auth);
    }
  }, []);

  return (
    <main className="section container">
      {isPending ? (
        <h1>Is Loading</h1>
      ) : (
        <>
          {characters.length && mylist.length && (
            <ul className="character-list">
              {mylist.map((id) => {
                const charInMylist = characters.find((char) => char.id === id);
                return (
                  <li key={charInMylist.id} className="character-list__item">
                    <CharacterCard character={charInMylist} />
                  </li>
                );
              })}
            </ul>
          )}
          <ul className="character-list">
            {characters.length &&
              characters.slice(0, 10).map((character) => (
                <li key={character.id} className="character-list__item">
                  <CharacterCard character={character} />
                </li>
              ))}
          </ul>
          <ul className="character-list">
            {characters.length &&
              characters.slice(10).map((character) => (
                <li key={character.id} className="character-list__item">
                  <CharacterCard character={character} />
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
    mylist: state.user.mylist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestCharacters: (auth) => dispatch(requestCharacters(auth)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(requireAuth(CharacterList));
