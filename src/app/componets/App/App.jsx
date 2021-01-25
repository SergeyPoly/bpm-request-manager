import React from 'react';

import { AppRoutes } from '../../routes';
import { Header } from '../../../client/Header/components/Header';
import { DrawerContainer } from '../../../client/Processes/components/DrawerContainer';
import { ModalContainer } from '../../../client/Processes/components/ModalContainer';

import '../../../shared/styles/scss/style.scss';

export const App = () => {
    return (
        <div className={'container app-wrapper'}>
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
