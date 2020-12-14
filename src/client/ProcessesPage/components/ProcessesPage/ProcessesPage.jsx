import React, { useEffect } from 'react';
import { Table } from 'antd';

import './ProcessesPage.scss'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
    processesIdRequestCreator,
    processesTasksRequestCreator,
} from '../../reducer/processesActionCreators';

export const ProcessesPage = () => {
    const processesId = useSelector(state => state.processes.processesId, shallowEqual);
    const dataSource = useSelector(state => state.processes.tasks, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(processesIdRequestCreator())
    }, []);

    useEffect(() => {
        if (processesId.length) {
            dispatch(processesTasksRequestCreator(processesId))
        }
    }, [processesId]);

    const columns = [
        {
            title: 'Номер',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Створено',
            dataIndex: 'created',
            key: 'created',
        },
        {
            title: 'Назва',
            dataIndex: 'name',
            key: 'name',
        },
    ];

    const pagination = {
        position: ['bottomCenter']
    };

    return (
        <div className={'processes-page'}>
            <Table dataSource={dataSource} columns={columns} pagination={pagination} />
        </div>
    );
};
