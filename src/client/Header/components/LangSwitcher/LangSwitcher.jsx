import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../../../shared/components/Button';
import { setCurrentLanguage } from '../../reducer/headerActionCreators';


export const LangSwitcher = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <Button
                text='UA'
                classType='transparent'
                handleClick={() => dispatch(setCurrentLanguage('ua'))}
            />
            <span>|</span>
            <Button
                text='EN'
                classType='transparent'
                handleClick={() => dispatch(setCurrentLanguage('en'))}
            />
        </div>
    );
};
