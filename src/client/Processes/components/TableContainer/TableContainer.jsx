import React, {useState} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Table, Input, Button, Space } from 'antd';
import 'antd/dist/antd.css';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { processStepsRequestCreator } from '../../reducer/processesActionCreators';

export const TableContainer = () => {
    const dataSource = useSelector(({processes}) => processes.tableData, shallowEqual);
    const loading = useSelector(({processes}) => processes.tableLoading, shallowEqual);
    const {t} = useTranslation('common');
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    let searchInput = null;

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
            title: t('requestPage.tableColNumber'),
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
            title: t('requestPage.tableColStatus'),
            dataIndex: 'status',
            key: 'status',
            filters: filterStatus,
            className: 'table_text',
            onFilter: (value, record) => record.status.indexOf(value) === 0,
        },
        {
            title: t('requestPage.tableColCreated'),
            dataIndex: 'created',
            key: 'created',
            className: 'table_text',
            defaultSortOrder: 'descend',
            sorter: (a, b) => {
                const getDate = (date) => {
                    const dateParts = date.split('.');
                    return new Date(dateParts[2], dateParts[1]-1, dateParts[0]);
                };
                let dateA = getDate(a.created);
                let dateB = getDate(b.created);
                return(dateA - dateB)
            }
        },
        {
            title: t('requestPage.tableColRequest'),
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
            pagination={{position: ['bottomCenter']}}
            size="middle"
            loading={loading}
            onRow={({processKey, status}, rowIndex) => {
                return {
                    onClick: event => {
                        dispatch(processStepsRequestCreator(processKey, status))
                    },
                };
            }}
            rowClassName={(record, index) => 'custom-row-style'}
        />
    );
};
