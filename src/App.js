import React from 'react'

import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ItemMain from './components/ShopItem/ItemMain';
import Login from './components/Login/Login.jsx';

import {Route, Redirect} from "react-router-dom";

function App() {
  return (
      <body>
        <Header />
        <Route exact path="/"><Redirect to="/home" /></Route>
        <Route path='/home' render={ () => <Main /> }/>
        <Route path='/item' render={ () => <ItemMain /> }/>
        <Route path='/login' render={ () => <Login /> }/>
        <Footer />
      </body>
  );
}

export default App;
