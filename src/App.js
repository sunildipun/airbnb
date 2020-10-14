import React from 'react';
import './App.css';

import Header from './components/header/header.component';
import Home from './pages/home/home.component';
import Footer from './components/footer/footer.component';

import {Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
