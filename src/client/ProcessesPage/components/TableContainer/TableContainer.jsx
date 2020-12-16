import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { Table, Input, Button, Space } from 'antd';
import 'antd/dist/antd.css';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

import { pagination } from './options';

export const TableContainer = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    let searchInput;

    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => searchInput.select(), 100);
            }
        },
        render: text =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);

    };

    const handleReset = clearFilters => {
        clearFilters();
        setSearchText('');
    };

    const dataSource = useSelector(state => state.processes.tasks, shallowEqual);
    const getFilter = (data, key) => {
        const filterElements = data.map(element => element[key]);
        const uniFilterElements = Array.from(new Set(filterElements));
        return (
            uniFilterElements.map(element => ({text: element, value: element}))
        );
    };
    const filterStatus = getFilter(dataSource, 'status');
    const filterName = getFilter(dataSource, 'name');
    const {filterDropdown, filterIcon, onFilter, onFilterDropdownVisibleChange, render} = getColumnSearchProps('number');

    const columns = [
        {
            title: 'Номер',
            dataIndex: 'number',
            key: 'number',
            className: 'table_text',
            filterDropdown,
            filterIcon,
            onFilter,
            onFilterDropdownVisibleChange,
            render
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            filters: filterStatus,
            className: 'table_text',
            onFilter: (value, record) => record.status.indexOf(value) === 0,
        },
        {
            title: 'Створено',
            dataIndex: 'created',
            key: 'created',
            className: 'table_text'
        },
        {
            title: 'Запит',
            dataIndex: 'name',
            key: 'name',
            filters: filterName,
            className: 'table_text',
            onFilter: (value, record) => record.name.indexOf(value) === 0,
        },
    ];

    return (
        <Table
            dataSource={dataSource}
            columns={columns}
            pagination={pagination}
            size="middle"
        />
    );
};
