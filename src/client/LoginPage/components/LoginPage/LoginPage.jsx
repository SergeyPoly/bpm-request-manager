import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { LoginForm } from '../LoginForm';
import './LoginPage.scss'
import { toggleReminderCreator } from '../../../../app/store/action-creators';
import { ReminderForm } from '../ReminderForm';
import { getUserThunkCreator } from '../../services/axios';
import SpanButton from '../../../../shared/components/SpanButton';

export const LoginPage = () => {
    const forgetPassword = useSelector(state => state.login.forgetPassword, shallowEqual);
    const dispatch = useDispatch();

    const handleSubmit = !forgetPassword ?
        (values) => dispatch(getUserThunkCreator(values)) :
        () => dispatch(toggleReminderCreator());
    const handleClick = () => dispatch(toggleReminderCreator());

    const currentForm = !forgetPassword ?
        <LoginForm handleSubmit={handleSubmit} /> :
        <ReminderForm handleSubmit={handleSubmit} />;

    return (
        <div className={'login-page'}>
            <div className={'login-page__form'}>
                {currentForm}
                <SpanButton
                    text={!forgetPassword ?'Forgot password?' : 'Back'}
                    classNames={['login-page__reminder_button']}
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};
