import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import ChartPanel from "./pages/chart-panel";
import CartDashPanel from "./pages/cart-dash-panel";
import NoMatch from "./pages/auth-panel/NoMatch";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={CartDashPanel} />
        <Route exact path="/home" component={ChartPanel} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </HashRouter>
  );
};

export default App;
