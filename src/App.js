import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import  './App.css';

function App() {

  return (
    <div className="App-container">
      <Header />
      <Tasks/>
    </div>
  );
}

export default App;
