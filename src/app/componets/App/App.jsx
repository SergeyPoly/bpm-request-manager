import React from 'react';

import '../../../shared/styles/scss/style.scss';
import { AppRoutes } from '../../routes';
import { Header } from '../../../client/Header/components/Header';
import { DrawerContainer } from '../../../client/RequestsPage/components/DrawerContainer';
import { ModalContainer } from '../../../client/RequestsPage/components/ModalContainer';

export const App = () => {
    return (
        <div className={'container app-wraper'}>
            <div className={'app-header'}>
                <Header/>
            </div>
            <div className={'app-content'}>
                <AppRoutes/>
            </div>
            <DrawerContainer/>
            <ModalContainer/>
        </div>
    );
};
