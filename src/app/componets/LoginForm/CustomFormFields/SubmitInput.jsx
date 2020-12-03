import {useField, useFormikContext} from "formik";
import React from "react";

export const SubmitInput = ({...props}) => {
    const {errors, touched} = useFormikContext();
    const [field] = useField(props);
    let errorBool = Boolean(Object.keys(errors).length);
    let touchBool = Boolean(!Object.keys(touched).length);

    return (
        <div className={'form-submit-button-container'}>
            <input
                className={'form-submit-button'}
                style={errorBool || touchBool ? {cursor: "not-allowed"} : {cursor: "pointer"}}
                disabled={errorBool || touchBool}
                {...field}
                {...props}
            />
        </div>
    )
};
