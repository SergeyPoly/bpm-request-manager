import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginPage } from '../../client/login/pages/LoginPage';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
    </Switch>
  );
};
