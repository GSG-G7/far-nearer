import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import './style.css';

import { Footer, UnderConstruction } from 'components/utils';
import About from 'components/pages/AboutUs';
import Error from 'components/pages/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={UnderConstruction} />
          <Route exact path="/about" component={About} />
          <Route path="/view-buildings" component={UnderConstruction} />
          <Route component={Error} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
