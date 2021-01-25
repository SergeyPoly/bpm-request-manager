import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';

import { AuthPage } from '../../client/Auth/pages/AuthPage';
import { ProcessesPage } from '../../client/Processes/pages/ProcessesPage';

export const AppRoutes = () => {
    const isAuthorized = useSelector(({auth}) => auth.isAuthorized, shallowEqual);

    return (
        <Switch>
            <Route
                exact path="/"
                render={() => !isAuthorized ?
                    <AuthPage/> :
                    <ProcessesPage/>
                }/>
        </Switch>
    );
};
