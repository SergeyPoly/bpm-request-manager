import React from 'react';
import PropTypes from 'prop-types';

import './Logo.css';

const Logo = props => {
    const { classNames, href, children } = props;
    const additionalClasses = classNames.join(' ');

    return (
        <div className={`base-logo ${additionalClasses}`}>
            <a href={href}>
                {children}
            </a>
        </div>
    );
};

Logo.propTypes = {
    href: PropTypes.string.isRequired,
    classNames: PropTypes.array,
    children: PropTypes.node.isRequired,
};

Logo.defaultProps = {
    href: '/',
    classNames: [],
    children: 'Your logo should be here!'
};

export default Logo;
