/* eslint-disable react/prop-types */
import React from 'react';
import './CharacterCard.scss';

const CharacterCard = ({ name, status, species, image, location, origin }) => {
  return (
    <article className="character-card">
      <div className="character-card__img-wrapper">
        <img className="character-card__img" src={image} alt="Ma-Sha" />
      </div>
      <div className="character-card__content-wrapper">
        <div className="character-card__content-section">
          <h2 className="character-card__name">{name}</h2>
        </div>
        <div className="character-card__content-section">
          <div className="character-card__status">
            <span className="character-card__status-icon dead" />
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

export default CharacterCard;
