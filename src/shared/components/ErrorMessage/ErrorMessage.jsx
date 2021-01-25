import React from 'react';
import PropTypes from 'prop-types';

import './ErrorMessage.scss'

export const ErrorMessage = ({text}) => {

    return (
        <div className={'error-message'}>
            <span>{text}</span>
        </div>
    );
};

ErrorMessage.propTypes = {
    text: PropTypes.string.isRequired,
};
