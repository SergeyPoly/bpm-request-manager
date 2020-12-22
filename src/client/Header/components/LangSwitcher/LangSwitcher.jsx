import React from 'react';
import SpanButton from '../../../../shared/components/SpanButton';

export const LangSwitcher = props => {
    return (
        <div className={'header__lang-switch'}>
            <SpanButton
                text={'UA'}
                classNames={['header__lang-switch_button']}
            />
            <span>|</span>
            <SpanButton
                text={'EN'}
                classNames={['header__lang-switch_button']}
            />
        </div>
    );
};
