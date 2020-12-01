import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ExamplePage } from '../../client/example/pages/ExamplePage';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ExamplePage />
      </Route>
      <Route exact path="/foo">
        <p>BAR</p>
      </Route>
    </Switch>
  );
};
