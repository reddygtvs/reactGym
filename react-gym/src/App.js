import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

function App() {
  const source = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/">
              <Home />
              <p>{ Math.random() * 10 }</p>
              <a href = { source }>Source</a>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;