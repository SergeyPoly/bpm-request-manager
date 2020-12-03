import React from 'react';

import Logo from '../../../../shared/components/Logo';
import logoImg from '../../../../assets/images/clipart380488.png'
import Heading from '../../../../shared/components/Heading';
import Button from '../../../../shared/components/Button';
import { LoginForm } from '../../../../app/componets/LoginForm';

export const LoginPage = props => {
    return (
        <div className={'login-page'}>
            <Logo
                href={'/'}
                classNames={['login-page__logo']}
            >
                <img src={logoImg} alt='logo'/>
            </Logo>
            <div className={'login-page__form'}>
                <Heading
                    text={'BPM Request Manager'}
                    classNames={['login-page__heading']}
                />
                <LoginForm/>
                <Button
                    text={'Forgot password?'}
                    classNames={['login-page__reminder_button']}
                />
            </div>
        </div>
    );
};
