import React from 'react';
import './App.css';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import Home from './pages/home/home.component';
import SearchPage from './pages/searchPage/searchPage.component';

import {Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <SearchPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
