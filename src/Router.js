import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./Components/App/App";
import PastTrials from "./Components/PastTrials";
import NotFound from "./Components/NotFound";

const Router = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/PastTrials" component={PastTrials} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
);

export default Router;