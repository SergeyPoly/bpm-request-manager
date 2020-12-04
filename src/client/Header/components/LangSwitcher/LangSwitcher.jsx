import React from 'react';
import Button from '../../../../shared/components/Button';

export const LangSwitcher = props => {
    return (
        <>
            <Button
                text={'UA'}
                classNames={['header__lang-switch_button']}
            />
            <span>|</span>
            <Button
                text={'EN'}
                classNames={['header__lang-switch_button']}
            />
        </>
    );
};
