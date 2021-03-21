import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { toggleStepsModalStatus } from '../../reducer/processesReducer';
import { ProcessSteps } from '../ProcessSteps';

export const StepsModal = () => {
    const modalVisible = useSelector(({processes}) => processes.stepsModalActive);
    const dispatch = useDispatch();
    const {t} = useTranslation('common');

    const handleCancel = () => {
        dispatch(toggleStepsModalStatus());
    };

    const handleOk = () => {
        dispatch(toggleStepsModalStatus())
    };

    return (
        <Modal
            title={t('requestPage.status')}
            visible={modalVisible}
            onOk={handleOk}
            centered={true}
            onCancel={handleCancel}
            footer={null}
            width={350}
        >
            <ProcessSteps/>
        </Modal>
    );
};
