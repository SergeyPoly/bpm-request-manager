import React from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

import Heading from '../../../shared/components/Heading';
import Button from '../../../shared/components/Button';
import { LangSwitcher } from '../LangSwitcher';
import { logoutCreator } from '../../store/action-creators';

export const Header = () => {
    const isAuthorized = useSelector(state => state.login.isAuth, shallowEqual);
    const dispatch = useDispatch();
    const headerHeading = isAuthorized ?
        <Heading
            text={'BPM Request Manager'}
            classNames={['header__heading']}
        /> : null;
    const headerLogoutButton = isAuthorized ?
        <Button
            text={'log out'}
            classNames={['header__logout_button']}
            handleClick={() => dispatch(logoutCreator())}
        /> : null;

    return (
        <header className={'header'}>
            {headerHeading}
            {headerLogoutButton}
            <LangSwitcher/>
        </header>
    );
};
