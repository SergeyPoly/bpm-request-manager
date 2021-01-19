import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Button from '../../../../shared/components/Button';
import { logoutRequestCreator } from '../../../AuthPage/reducer/authActionCreators';
import { clearData } from '../../../RequestsPage/reducer/requestsActionCreators';

export const LogoutContent = () => {
    const username = useSelector(state => state.auth.username, shallowEqual);
    const profileText = `Користувач: ${username}`;
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(logoutRequestCreator());
        dispatch(clearData())
    };

    return (
        <div>
            <span style={{'paddingRight': '20px'}}>{profileText}</span>
            <Button
                text='Вихід'
                classType='transparent'
                handleClick={handleClick}
            />
        </div>
    );
};
