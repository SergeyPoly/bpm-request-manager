import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';

import { AuthPage } from '../../client/AuthPage/components/AuthPage';
import { RequestsPage } from '../../client/RequestsPage/components/RequestsPage';

export const AppRoutes = () => {
    const isAuthorized = useSelector(state => state.auth.isAuthorized, shallowEqual);

    return (
        <Switch>
            <Route
                exact path="/"
                render={() => !isAuthorized ?
                    <AuthPage/> :
                    <RequestsPage/>
                }/>
        </Switch>
    );
};
