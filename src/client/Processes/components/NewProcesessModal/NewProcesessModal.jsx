import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { toggleNewProcessModalStatus } from '../../reducer/processesReducer';
import { NewProcessForm } from '../NewProcessForm';

export const NewProcesessModal = () => {
    const modalVisible = useSelector(({processes}) => processes.newProcessModalActive);
    const { name } = useSelector(({processes}) => processes.formOptions);
    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(toggleNewProcessModalStatus());
    };

    const handleOk = () => {
        dispatch(toggleNewProcessModalStatus())
    };

    return (
        <Modal
            title={name}
            visible={modalVisible}
            onOk={handleOk}
            centered={true}
            onCancel={handleCancel}
            footer={null}
            width={350}
        >
            <NewProcessForm/>
        </Modal>
    );
};
