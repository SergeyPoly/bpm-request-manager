import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';

import { LangSwitcher } from '../LangSwitcher';
import { LogoutContent } from '../LogoutContent';

import './Header.scss'

export const Header = () => {
    const isAuthorized = useSelector(({auth}) => auth.isAuthorized, shallowEqual);

    const headerContent = isAuthorized ?
        <LogoutContent/> :
        <LangSwitcher/>;

    return (
        <header className={'header'}>
            {headerContent}
        </header>
    );
};
