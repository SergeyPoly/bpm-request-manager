import React from 'react';
import PropTypes from 'prop-types';

import './Heading.css'

const Heading = props => {
    const { text, classNames } = props;
    const additionalClasses = classNames.join(' ');

    return (
        <h2 className={`base-heading ${additionalClasses}`} >
            {text}
        </h2>
    );
};

export default Heading;

Heading.propTypes = {
    text: PropTypes.string.isRequired,
    classNames: PropTypes.array,
};

Heading.defaultProps = {
    text: 'Heading',
    classNames: [],
};
