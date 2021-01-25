import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { toggleModalStatus } from '../../reducer/processesReducer';
import { NewProcessForm } from '../NewProcessForm';

export const ModalContainer = () => {
    const modalVisible = useSelector(({processes}) => processes.modalActive);
    const { name } = useSelector(({processes}) => processes.formOptions);
    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(toggleModalStatus());
    };

    const handleOk = () => {
        dispatch(toggleModalStatus())
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
