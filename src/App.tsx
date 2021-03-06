import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Etusivu from './features/etusivu/Etusivu'
import Kirjautuminen from './features/kirjautuminen/Kirjautuminen'
import Reseptit from './features/reseptit/Reseptit'
import './App.css';
import Header from './features/header/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/reseptiarkisto">
            <Reseptit />
          </Route>
          <Route path="/kirjautuminen">
            <Kirjautuminen />
          </Route>
          <Route path="/">
            <Etusivu />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
