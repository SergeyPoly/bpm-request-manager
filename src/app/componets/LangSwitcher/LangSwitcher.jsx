import React from 'react';
import Button from '../../../shared/components/Button';

export const LangSwitcher = props => {
    return (
        <div className={'header__lang-switcher'}>
            <Button
                text={'UA'}
                classNames={['header__lang-switch_button']}
            />
            <span className={'header__lang-switcher_dash'}>|</span>
            <Button
                text={'EN'}
                classNames={['header__lang-switch_button']}
            />
        </div>
    );
};
