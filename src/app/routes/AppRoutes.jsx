import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginPage } from '../../client/LoginPage/components/LoginPage';
import { ProcessesPage } from '../../client/ProcessesPage/components/ProcessesPage';
import { shallowEqual, useSelector } from 'react-redux';

export const AppRoutes = () => {
    const isAuthorized = useSelector(state => state.login.isAuthorized, shallowEqual);
    return (
        <Switch>
            <Route
                exact path="/"
                render={() => !isAuthorized ?
                    <LoginPage/> :
                    <ProcessesPage/>
                }/>
                {/*render={() => !isAuthorized ?*/}
                {/*    <ProcessesPage/> :*/}
                {/*    <LoginPage/> */}
                {/*}/>*/}
        </Switch>
    );
};
