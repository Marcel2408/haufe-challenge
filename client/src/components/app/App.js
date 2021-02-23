/* eslint-disable react/prop-types */
import React from 'react';
import Header from '../header/Header';
import './App.scss';

const App = ({ children }) => {
  return (
    <div className="App">
      <Header />
      {children}
    </div>
  );
};

export default App;
