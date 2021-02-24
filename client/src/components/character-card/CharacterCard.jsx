/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './CharacterCard.scss';
import { connect } from 'react-redux';
import { ReactComponent as MylistIcon } from '../../assets/svg/mylist.svg';
import { updateMylist } from '../../redux/user/user.actions';

// todo add spinner, bg-col, my list row, style login and signup

const CharacterCard = ({ character, mylist, auth, onUpdateMylist }) => {
  const [isInMylist, setIsInMylist] = useState(false);
  const { id, name, image, status, species, location, origin } = character;
  const toggleClick = () => {
    onUpdateMylist(auth, mylist, id);
  };

  useEffect(() => {
    if (mylist && mylist.includes(id)) {
      setIsInMylist(true);
    } else {
      setIsInMylist(false);
    }
  }, [mylist]);

  return (
    <article className="character-card">
      <MylistIcon style={isInMylist ? { fill: '#c7ab0e' } : null} onClick={toggleClick}>
        <title>Mylist Icon</title>
      </MylistIcon>
      <div className="character-card__img-wrapper">
        <img className="character-card__img" src={image} alt="Ma-Sha" />
      </div>
      <div className="character-card__content-wrapper">
        <div className="character-card__content-section">
          <h2 className="character-card__name">{name}</h2>
        </div>
        <div className="character-card__content-section">
          <div className="character-card__status">
            <span
              className={`character-card__status-icon ${
                status === 'Alive' ? 'alive' : status === 'Dead' ? 'dead' : status
              }`}
            />
            {status} -- {species}
          </div>
        </div>
        <div className="character-card__content-section">
          <p className="title">Last known location:</p>
          <p className="text">{location.name}</p>
        </div>
        <div className="character-card__content-section">
          <p className="title">First seen in:</p>
          <p className="text">{origin.name}</p>
        </div>
      </div>
    </article>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth.authenticated,
    mylist: state.user.mylist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateMylist: (auth, mylist, id) => dispatch(updateMylist(auth, mylist, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCard);
