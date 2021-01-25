import React from 'react';
import { Drawer } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { requestPageFormFieldsRequestCreator } from '../../reducer/processesActionCreators';
import { toggleDrawerStatus } from '../../reducer/processesReducer';

export const DrawerContainer = () => {
    const drawerVisible = useSelector(({processes}) => processes.drawerActive);
    const drawerOptions = useSelector(({processes}) => processes.drawerOptions);
    const dispatch = useDispatch();
    const {t} = useTranslation('common');

    const userProcesses = drawerOptions.map(element => (
            <p
                key={element.key}
                onClick={() => {
                    dispatch(toggleDrawerStatus());
                    dispatch(requestPageFormFieldsRequestCreator(element.key, element.name));
                }}
                style={{'cursor': 'pointer'}}
            >{element.name}</p>
        )
    );

    const onClose = () => {
        dispatch(toggleDrawerStatus());
    };

    return (
        <Drawer
            title={t('requestPage.newRequest')}
            placement="right"
            closable={false}
            onClose={onClose}
            visible={drawerVisible}
        >
            {userProcesses}
        </Drawer>
    );
};
