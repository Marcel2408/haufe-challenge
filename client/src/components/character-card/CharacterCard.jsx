import React from 'react';
import './CharacterCard.scss';

const CharacterCard = () => {
  return (
    <article className="character-card">
      <div className="character-card__img-wrapper">
        <img
          className="character-card__img"
          src="https://rickandmortyapi.com/api/character/avatar/211.jpeg"
          alt="Ma-Sha"
        />
      </div>
      <div className="character-card__content-wrapper">
        <div className="character-card__content-section">
          <h2 className="character-card__name">Character Name</h2>
        </div>
        <div className="character-card__content-section">
          <div className="character-card__status">
            <span className="character-card__status-icon" />
            Alive -- Alien
          </div>
        </div>
        <div className="character-card__content-section">
          <p className="title">Last known location:</p>
          <p className="text">Gazorpazorp</p>
        </div>
        <div className="character-card__content-section">
          <p className="title">First seen in:</p>
          <p className="text">a chapter</p>
        </div>
      </div>
    </article>
  );
};

export default CharacterCard;
