import React from 'react';
import './App.css';

function App() {
  const title = "Welcome to the react Gym"
  const source = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>{ Math.random() * 10 }</p>
        <a href = { source }>Source</a>
      </div>
    </div>
  )
}

export default App;