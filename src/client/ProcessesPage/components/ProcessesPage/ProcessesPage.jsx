import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import './ProcessesPage.scss'
import {
    processesDefinitionsRequestCreator,
    processesIdRequestCreator,
    processesTasksRequestCreator, setDrawerActive,
} from '../../reducer/processesActionCreators';
import { TableContainer } from '../TableContainer';

export const ProcessesPage = () => {
    const processesId = useSelector(state => state.processes.processesId, shallowEqual);
    const visible = useSelector(store => store.processes.drawerActive);
    const dispatch = useDispatch();
    const hiddenClass = visible ? 'hidden' : '';
    const handleDrawerClick = () => {dispatch(setDrawerActive())};

    useEffect(() => {
        dispatch(processesIdRequestCreator());
        dispatch(processesDefinitionsRequestCreator())
    }, []);

    useEffect(() => {
        if (processesId.length) {
            dispatch(processesTasksRequestCreator(processesId))
        }
    }, [processesId]);

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
