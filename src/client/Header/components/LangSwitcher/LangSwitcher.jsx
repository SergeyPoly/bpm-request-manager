import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../../../shared/components/Button';

export const LangSwitcher = () => {
    const {i18n} = useTranslation('common');

    return (
        <div>
            <Button
                text='UA'
                classType='transparent'
                handleClick={() => i18n.changeLanguage('uk')}
            />
            <span>|</span>
            <Button
                text='EN'
                classType='transparent'
                handleClick={() => i18n.changeLanguage('en')}
            />
        </div>
    );
};
