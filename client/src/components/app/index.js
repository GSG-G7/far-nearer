import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import './style.css';

import { Footer } from '../utils';
import About from '../pages/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
