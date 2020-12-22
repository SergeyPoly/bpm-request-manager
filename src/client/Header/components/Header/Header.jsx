import React from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import './Header.scss'
import '../../../../shared/styles/scss/style.scss'

import { LangSwitcher } from '../LangSwitcher';
import {
    logoutRequestCreator,
} from '../../../LoginPage/reducer/loginActionCreators';
import { LogoutProfile } from '../LogoutProfile';
import Button from '../../../../shared/components/Button';
import { setDrawerActive } from '../../../ProcessesPage/reducer/processesActionCreators';

export const Header = () => {
    const isAuthorized = useSelector(state => state.login.isAuthorized, shallowEqual);
    const userName = useSelector(state => state.login.userName, shallowEqual);
    const dispatch = useDispatch();
    const handleLogoutClick = () => {dispatch(logoutRequestCreator())};
    const handleDrawerClick = () => {dispatch(setDrawerActive())};
    const userProfile = `User: ${userName}`;

    const headerContent = isAuthorized ?
        <div className={'header__content--auth'}>
            <Button
                text={'new request'}
                classNames={['form-submit-button']}
                handleClick={handleDrawerClick}
            />
            <LogoutProfile
                userProfile={userProfile}
                handleClick={handleLogoutClick}
            />
        </div> :
        <LangSwitcher />;

    return (
        <header className={'header'}>
            <div className={'header__content'}>
                {headerContent}
            </div>
        </header>
    );
};
