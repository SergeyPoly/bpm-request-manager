import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Drawer, Modal } from 'antd';

import '../../../shared/styles/scss/style.scss';
import { AppRoutes } from '../../routes';
import { Header } from '../../../client/Header/components/Header';
import { useDispatch, useSelector } from 'react-redux';
import {
    processesFormFieldsRequestCreator,
    setDrawerInactive, setModalInactive, setProcessesFormTitle,
} from '../../../client/ProcessesPage/reducer/processesActionCreators';
import { NewProcessForm } from '../../../client/ProcessesPage/components/NewProcessForm';

export const App = () => {
    const drawerVisible = useSelector(store => store.processes.drawerActive);
    const modalVisible = useSelector(store => store.processes.modalActive);
    const processesDefinitions = useSelector(store => store.processes.processesDefinitions);
    const formTitle = useSelector(store => store.processes.formTitle);
    const dispatch = useDispatch();

    const userProcesses = processesDefinitions.map(element => (
            <p
                key={element.key}
                onClick={() => {
                    dispatch(setDrawerInactive());
                    dispatch(processesFormFieldsRequestCreator(element.key));
                    dispatch(setProcessesFormTitle({name: element.name, key: element.key}));
                }}
                style={{'cursor': 'pointer'}}
            >{element.name}</p>
        )
    );

    const onClose = () => {
        dispatch(setDrawerInactive());
    };

    const handleCancel = () => {
        dispatch(setModalInactive());
    };

    const handleOk = () => {
        dispatch(setModalInactive())
    };

    return (
        <div className={'container-main'}>
            <Header/>
            <AppRoutes/>
            <Drawer
                title="Новий запит"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={drawerVisible}
            >
                {userProcesses}
            </Drawer>
            <Modal
                title={formTitle}
                visible={modalVisible}
                onOk={handleOk}
                centered={true}
                onCancel={handleCancel}
                footer={null}
                width={350}
            >
                <NewProcessForm/>
            </Modal>
        </div>
    );
};
