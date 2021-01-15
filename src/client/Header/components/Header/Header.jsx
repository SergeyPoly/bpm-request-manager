import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';

import './Header.scss'
import '../../../../shared/styles/scss/style.scss'
import { LangSwitcher } from '../LangSwitcher';
import { LogoutContent } from '../LogoutContent';

export const Header = () => {
    const isAuthorized = useSelector(state => state.auth.isAuthorized, shallowEqual);

    const headerContent = isAuthorized ?
        <LogoutContent/> :
        <LangSwitcher/>;

    return (
        <header className={'header'}>
            {headerContent}
        </header>
    );
};
