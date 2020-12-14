import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';

import './ProcessesPage.scss'
import {
    processesIdRequestCreator,
    processesTasksRequestCreator,
} from '../../reducer/processesActionCreators';
import { columns, pagination } from './tableOptions'

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

    const status = dataSource.map(({status}) => status);
    const uniStatus = Array.from(new Set(status));
    const filterStatus = uniStatus.map(element => ({text: element, value: element}));

    const name = dataSource.map(({name}) => name);
    const uniName = Array.from(new Set(name));
    const filterName = uniName.map(element => ({text: element, value: element}));

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
            filters: filterStatus,
            onFilter: (value, record) => record.status.indexOf(value) === 0,
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
            filters: filterName,
            onFilter: (value, record) => record.name.indexOf(value) === 0,
        },
    ];

    return (
        <div className={'processes-page'}>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={pagination}
                size="middle"
            />
        </div>
    );
};
