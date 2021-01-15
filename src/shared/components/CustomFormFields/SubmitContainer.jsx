import { useFormikContext } from "formik";
import React from "react";
import Button from '../Button';

export const SubmitContainer = ({text}) => {
    const {errors, touched} = useFormikContext();
    let errorBool = Boolean(Object.keys(errors).length);
    let touchBool = Boolean(!Object.keys(touched).length);

    return (
        <div className={'form-submit-container'}>
            <Button
                text={text}
                classType='basic'
                type={'submit'}
                disabled={errorBool || touchBool}
            />
        </div>
    )
};
