import React from 'react';
import PropTypes from 'prop-types';

import './SpanButton.css'

const SpanButton = props => {
    const { text, classNames, handleClick } = props;
    const additionalClasses = classNames.join(' ');

    return (
        <span className={`base-span-button ${additionalClasses}`} onClick={handleClick}>
            {text}
        </span>
    );
};

export default SpanButton;

SpanButton.propTypes = {
    text: PropTypes.string.isRequired,
    classNames: PropTypes.array,
    handleClick: PropTypes.func,
};

SpanButton.defaultProps = {
    text: 'span-button',
    classNames: [],
    handleClick: () => {console.log('span-button clicked')},
};
