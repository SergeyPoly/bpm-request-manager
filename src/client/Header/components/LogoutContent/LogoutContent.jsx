import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Button from '../../../../shared/components/Button';
import { logoutRequestCreator } from '../../../Auth/reducer/authActionCreators';
import { clearData } from '../../../Processes/reducer/processesReducer';

export const LogoutContent = () => {
    const username = useSelector(({auth}) => auth.username, shallowEqual);
    const {t} = useTranslation('common');
    const dispatch = useDispatch();
    const profileText = `${t('header.user')}: ${username}`;

    const handleClick = () => {
        dispatch(logoutRequestCreator());
        dispatch(clearData())
    };

    return (
        <div>
            <span style={{'paddingRight': '20px'}}>{profileText}</span>
            <Button
                text={t('header.logout')}
                classType='transparent'
                handleClick={handleClick}
            />
        </div>
    );
};
