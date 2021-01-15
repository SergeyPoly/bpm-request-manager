import React from 'react';
import PropTypes from 'prop-types';

import {types} from "./types"
import './Button.scss'

const Button = props => {
    const { text, type, classType, additionalClass, handleClick, disabled } = props;
    const disabledClass = disabled ? 'button-disabled' : '';
    const className = `button ${types[classType]} ${additionalClass} ${disabledClass}`;

    return (
        <button
            type={type}
            className={className}
            onClick={handleClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default Button;

Button.defaultProps = {
    additionalClass: '',
    type: 'button',
    disabled: false
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        'button',
        'submit',
        'reset',
    ]),
    classType: PropTypes.oneOf([
        'basic',
        'transparent',
    ]).isRequired,
    additionalClass: PropTypes.string,
    handleClick: PropTypes.func,
    disabled: PropTypes.bool
};
