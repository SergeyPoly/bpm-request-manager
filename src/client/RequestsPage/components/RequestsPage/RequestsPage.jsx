import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import './RequestsPage.scss'
import {
    drawerOptionsRequestCreator,
    processesIdRequestCreator,
    toggleDrawerStatus,
} from '../../reducer/requestsActionCreators';
import { TableContainer } from '../TableContainer';

export const RequestsPage = () => {
    const visible = useSelector(store => store.requests.drawerActive, shallowEqual);
    const dispatch = useDispatch();
    const hiddenClass = visible ? 'hidden' : '';
    const handleDrawerClick = () => {dispatch(toggleDrawerStatus())};

    useEffect(() => {
        dispatch(processesIdRequestCreator());
        dispatch(drawerOptionsRequestCreator())
    }, []);

    return (
        <div className={'processes-page'}>
            <TableContainer/>
            <div
                className={`processes-page__new-request ${hiddenClass}`}
                onClick={handleDrawerClick}
            >
                <span>Новий запит</span>
            </div>
        </div>
    );
};
