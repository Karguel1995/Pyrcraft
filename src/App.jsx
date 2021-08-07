import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import MainPage from './components/MainPage/MainPage';
import Gallery from './components/Gallery/Gallery';
import ThanksPage from './components/ThanksPage/ThanksPage'
import './App.scss'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/thanks-page">
            <ThanksPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App