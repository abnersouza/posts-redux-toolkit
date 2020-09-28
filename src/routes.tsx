import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Posts from "./pages/Posts";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Posts} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
