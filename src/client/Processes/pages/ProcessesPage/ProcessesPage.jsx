import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
    drawerOptionsRequestCreator,
    processesIdRequestCreator,
} from '../../reducer/processesActionCreators';
import { toggleDrawerStatus } from '../../reducer/processesReducer';
import { TableContainer } from '../../components/TableContainer';

import './ProcessesPage.scss'

export const ProcessesPage = () => {
    const visible = useSelector(({processes}) => processes.drawerActive, shallowEqual);
    const {t} = useTranslation('common');
    const dispatch = useDispatch();
    const hiddenClass = visible ? 'hidden' : '';
    const handleDrawerClick = () => {dispatch(toggleDrawerStatus())};

    useEffect(() => {
        dispatch(processesIdRequestCreator());
        dispatch(drawerOptionsRequestCreator())
    }, []);

    return (
        <div className={'processes-page'}>
            <TableContainer/>
            <div
                className={`processes-page__new-request ${hiddenClass}`}
                onClick={handleDrawerClick}
            >
                <span>{t('requestPage.newRequest')}</span>
            </div>
        </div>
    );
};
