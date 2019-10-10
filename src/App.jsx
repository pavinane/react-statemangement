import React from 'react';
import Counter from './Counter';
import Toogle from './Toggle';
import Click from './Click';
import Gallery from './Gallery';
import './App.css';


const App = () => (
  <div className="app">
    <Counter />
    <Toogle />
    <Click/>
    <Gallery/>
  </div>
);
export default App;
