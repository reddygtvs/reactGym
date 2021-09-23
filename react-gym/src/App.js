import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const source = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <p>{ Math.random() * 10 }</p>
        <a href = { source }>Source</a>
      </div>
    </div>
  )
}

export default App;