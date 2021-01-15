import React from 'react';
import { Drawer } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import {
    requestPageFormFieldsRequestCreator,
    toggleDrawerStatus,
} from '../../reducer/requestsActionCreators';

export const DrawerContainer = () => {
    const drawerVisible = useSelector(store => store.requests.drawerActive);
    const drawerOptions = useSelector(store => store.requests.drawerOptions);
    const dispatch = useDispatch();

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
            title="Новий запит"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={drawerVisible}
        >
            {userProcesses}
        </Drawer>
    );
};
