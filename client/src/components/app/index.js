import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from '../pages/AboutUs';

import './style.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/about" render={props => <About />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
