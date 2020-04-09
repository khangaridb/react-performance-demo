import { Switch, Route, BrowserRouter as Router, useRouteMatch } from 'react-router-dom';
import React from 'react';
import Virtualize from './Virtualize';
import Virtualized from './Virtualized';
import NotVirtalized from './NotVirtualized';

const VirtualizeRouter = () => {
  const { path } = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route exact path={path}>
          <Virtualize />
        </Route>
        <Route exact path={`${path}/virtualized`}>
          <Virtualized />
        </Route>
        <Route exact path={`${path}/not-virtualized`}>
          <NotVirtalized />
        </Route>
      </Switch>
    </Router>
  );
};

export default VirtualizeRouter;
