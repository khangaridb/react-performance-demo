import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './modules/Home';
import Webassembly from './modules/wasm/Webassembly';
import Virtualize from './modules/virtualize/router';
import Memo from './modules/memo/Memo';
import Webworkers from './modules/webworkers/Webworkers';

const App = () => {
  return (
    <Switch>
      <Route exact path="/memo">
        <Memo />
      </Route>
      <Route path="/virtualize">
        <Virtualize />
      </Route>
      <Route exact path="/wasm">
        <Webassembly />
      </Route>
      <Route exact path="/webworkers">
        <Webworkers />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
