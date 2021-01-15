import React from 'react';
import { Modal } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { toggleModalStatus } from '../../reducer/requestsActionCreators';
import { NewProcessForm } from '../NewProcessForm';

export const ModalContainer = () => {
    const modalVisible = useSelector(store => store.requests.modalActive);
    const { name } = useSelector(store => store.requests.formOptions);
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
