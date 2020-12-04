import React from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import './Header.scss'
import '../../../../shared/styles/scss/style.scss'

import { LangSwitcher } from '../LangSwitcher';
import { logoutCreator } from '../../../../app/store/action-creators';
import { LogoutProfile } from '../LogoutProfile';

export const Header = () => {
    const isAuthorized = useSelector(state => state.login.isAuthorized, shallowEqual);
    const userName = useSelector(state => state.login.userName, shallowEqual);
    const dispatch = useDispatch();
    const handleClick = () => {dispatch(logoutCreator())};
    const userProfile = `User: ${userName}`;

    const headerContent = isAuthorized ?
        <LogoutProfile
            userProfile={userProfile}
            handleClick={handleClick}
        /> :
        <LangSwitcher />;

    return (
        <header className={'header'}>
            <div className={'header__content'}>
                {headerContent}
            </div>
        </header>
    );
};
