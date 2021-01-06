import React from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import './Header.scss'
import '../../../../shared/styles/scss/style.scss'

import { LangSwitcher } from '../LangSwitcher';
import {
    logoutRequestCreator,
} from '../../../LoginPage/reducer/loginActionCreators';
import { LogoutProfile } from '../LogoutProfile';

export const Header = () => {
    const isAuthorized = useSelector(state => state.login.isAuthorized, shallowEqual);
    const userName = useSelector(state => state.login.userName, shallowEqual);
    const dispatch = useDispatch();
    const handleLogoutClick = () => {dispatch(logoutRequestCreator())};
    const userProfile = `Користувач: ${userName}`;

    const headerContent = isAuthorized ?
        <LogoutProfile
            userProfile={userProfile}
            handleClick={handleLogoutClick}
        /> :
        <LangSwitcher/>;

    return (
        <header className={'header'}>
            {headerContent}
        </header>
    );
};
