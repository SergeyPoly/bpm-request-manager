import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { toggleAuthPageForm } from '../../reducer/authReducer';
import { AuthForm } from '../../components/AuthForm';
import Button from '../../../../shared/components/Button';

import './AuthPage.scss'

export const AuthPage = () => {
    const reminderActive = useSelector(({auth}) => auth.reminderActive, shallowEqual);
    const dispatch = useDispatch();
    const {t} = useTranslation('common');

    const handleClick = () => dispatch(toggleAuthPageForm());

    return (
        <div className={'auth-page'}>
            <div className={'auth-page__form'}>
                <AuthForm reminderActive={reminderActive}/>
                <Button
                    text={reminderActive ? t('authPage.return') : t('authPage.remind')}
                    classType='transparent'
                    additionalClass={'auth-page__reminder'}
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};
