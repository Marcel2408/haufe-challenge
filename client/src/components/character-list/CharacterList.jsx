/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import requestCharacters from '../../redux/character/character.actions';
import CharacterRow from '../character-row/CharacterRow';
import requireAuth from '../../HOC/requireAuth';
import Spinner from '../spinner/Spinner';
import './CharacterList.scss';

const CharacterList = () => {
  const auth = useSelector((state) => state.auth.authenticated);
  const characters = useSelector((state) => state.characters.characters);
  const isPending = useSelector((state) => state.characters.isPending);
  const mylist = useSelector((state) => state.user.mylist);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!characters.length) {
      dispatch(requestCharacters(auth));
    }
  }, []);

  return (
    <main className="section container">
      {isPending ? (
        <Spinner />
      ) : (
        <>
          {characters.length && mylist.length ? (
            <CharacterRow
              title="My List"
              list={mylist.map((id) => characters.find((char) => char.id === id))}
            />
          ) : null}
          <CharacterRow title="Characters List" list={characters.slice(0, characters.length / 2)} />
          <CharacterRow title="More Characters.." list={characters.slice(characters.length / 2)} />
        </>
      )}
    </main>
  );
};

export default requireAuth(CharacterList);
