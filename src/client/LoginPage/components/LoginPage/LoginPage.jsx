import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// import axios from "axios";

import Button from '../../../../shared/components/Button';
import { LoginForm } from '../LoginForm';
import './LoginPage.scss'
import {
    loginCreator,
    toggleReminderCreator,
} from '../../../../app/store/action-creators';
import { ReminderForm } from '../ReminderForm';

export const LoginPage = () => {
    const forgetPassword = useSelector(state => state.login.forgetPassword, shallowEqual);
    const dispatch = useDispatch();
    // const handleSubmit = async () => {
    //     try {
    //         const response = await axios.post("https://bpm.codot.pro/engine-rest/identity/verify", {
    //             username: "testUser",
    //             password: "testPassword"
    //         });
    //         console.log('Returned data:', response);
    //     } catch (e) {
    //         console.log(`Axios request failed: ${e}`);
    // }};
    const handleSubmit = !forgetPassword ?
        () => dispatch(loginCreator()) :
        () => dispatch(toggleReminderCreator());
    const handleClick = () => dispatch(toggleReminderCreator());

    const currentForm = !forgetPassword ?
        <LoginForm handleSubmit={handleSubmit} /> :
        <ReminderForm handleSubmit={handleSubmit} />;

    return (
        <div className={'login-page'}>
            <div className={'login-page__form'}>
                {currentForm}
                <Button
                    text={!forgetPassword ?'Forgot password?' : 'Back'}
                    classNames={['login-page__reminder_button']}
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};
