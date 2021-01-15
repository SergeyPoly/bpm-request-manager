import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import './AuthPage.scss'
import { toggleAuthPageForm } from '../../reducer/authActionCreators';
import { AuthForm } from '../AuthForm';
import Button from '../../../../shared/components/Button';

export const AuthPage = () => {
    const reminderActive = useSelector(state => state.auth.reminderActive, shallowEqual);
    const dispatch = useDispatch();

    const handleClick = () => dispatch(toggleAuthPageForm());

    return (
        <div className={'auth-page'}>
            <div className={'auth-page__form'}>
                <AuthForm reminderActive={reminderActive}/>
                <Button
                    text={reminderActive ? 'Повернутись' : 'Забули пароль?'}
                    classType='transparent'
                    additionalClass={'auth-page__reminder'}
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};
