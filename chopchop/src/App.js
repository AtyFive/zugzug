import './App.css';
import React from 'react';
import AppBody from './components/AppBody';

import Header from './components/Header';
import './App.css';
import './index.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app__body">
        <AppBody />
      </div>
      <p className = 'copyright'>Copyright @Kakadoon</p>
    </div>
  );
}
//commnet

export default App;
