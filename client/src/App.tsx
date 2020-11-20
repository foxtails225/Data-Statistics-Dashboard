import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import ChartPanel from './components/chart-panel';
import NoMatch from './components/auth-panel/NoMatch';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ChartPanel} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </HashRouter>
  );
};

export default App;
