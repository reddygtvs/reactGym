import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Create from './Create';
import RoutineDetails from './RoutineDetails';

function App() {
  const source = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
              <p>{ Math.random() * 10 }</p>
              <a href = { source }>Source</a>
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/routines/:id">
              <RoutineDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;