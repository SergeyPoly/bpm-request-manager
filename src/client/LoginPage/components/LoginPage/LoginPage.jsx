import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import './LoginPage.scss'
import { toggleLoginPageForm } from '../../reducer/loginActionCreators';
import { LoginForm } from '../LoginForm';
import { ReminderForm } from '../ReminderForm';
import SpanButton from '../../../../shared/components/SpanButton';

export const LoginPage = () => {
    const reminderFormActive = useSelector(state => state.login.reminderFormActive, shallowEqual);
    const dispatch = useDispatch();

    const handleClick = () => dispatch(toggleLoginPageForm());

    const currentForm = !reminderFormActive ?
        <LoginForm /> :
        <ReminderForm />;

    return (
        <div className={'login-page'}>
            <div className={'login-page__form'}>
                {currentForm}
                <SpanButton
                    text={!reminderFormActive ? 'Forgot password?' : 'Back'}
                    classNames={['login-page__reminder_button']}
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};
