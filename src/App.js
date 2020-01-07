import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader.js'
import Circles from './components/Circles.js'
import Lines from './components/Lines.js'

export default function App(){

    return (
      <div className="App">
        <AppHeader/>
        <Circles/>
        <Lines/>
      </div>
    );
  }