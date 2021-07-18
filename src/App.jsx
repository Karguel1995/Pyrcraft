import React from 'react';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import MainPage from './components/MainPage/MainPage';
import './App.scss'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <MainPage />
    </div>
  );
}

export default App