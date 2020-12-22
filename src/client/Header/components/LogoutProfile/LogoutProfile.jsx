import React from 'react';

import Button from '../../../../shared/components/Button';

export const LogoutProfile = props => {
    const { userProfile, handleClick} = props;

    return (
        <div>
            <span className={'header__profile-text'}>{userProfile}</span>
            <Button
                text={'log out'}
                classNames={['header__logout_button']}
                handleClick={handleClick}
            />
        </div>
    );
};
