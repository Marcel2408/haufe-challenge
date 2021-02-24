import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => (
  <div className="not-found">
    <h1 className="not-found__title">Ooops!</h1>
    <h2>Looks like you are trapped in the 404 hell...</h2>
    <Link class="btn" to="/list">
      Character list
    </Link>
  </div>
);

export default NotFound;
