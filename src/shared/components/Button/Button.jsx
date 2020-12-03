import React from 'react';
import PropTypes from 'prop-types';

import './Button.css'

const Button = props => {
    const { text, classNames, handleClick } = props;
    const additionalClasses = classNames.join(' ');

    return (
        <button className={`base-button ${additionalClasses}`} onClick={handleClick}>
            {text}
        </button>
    );
};

export default Button;

Button.propTypes = {
    text: PropTypes.string.isRequired,
    classNames: PropTypes.array,
    handleClick: PropTypes.func,
};

Button.defaultProps = {
    text: 'button',
    classNames: [],
    handleClick: () => {console.log('button clicked')},
};
