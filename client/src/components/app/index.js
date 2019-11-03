import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './style.css';
import { Navbar } from 'components/utils';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello From React</h1> */}
      <Router>
        <Switch>
          <Route>
            <Navbar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
