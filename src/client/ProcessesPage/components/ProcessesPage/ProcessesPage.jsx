import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import './ProcessesPage.scss'
import {
    processesIdRequestCreator,
    processesTasksRequestCreator,
} from '../../reducer/processesActionCreators';
import { TableContainer } from '../TableContainer';

export const ProcessesPage = () => {
    const processesId = useSelector(state => state.processes.processesId, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(processesIdRequestCreator())
    }, []);

    useEffect(() => {
        if (processesId.length) {
            dispatch(processesTasksRequestCreator(processesId))
        }
    }, [processesId]);

    return (
        <div className={'processes-page'}>
            <TableContainer/>
        </div>
    );
};
