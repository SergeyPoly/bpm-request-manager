import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import './ErrorMessage.scss'

export const ErrorMessage = () => {
    const errorMessage = useSelector(state => state.auth.errorMessage, shallowEqual);

    return (
        <div className={'error-message'}>
            <span>{errorMessage}</span>
        </div>
    );
};

