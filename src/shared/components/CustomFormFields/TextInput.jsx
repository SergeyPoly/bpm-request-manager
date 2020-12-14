import React from "react";
import {useField} from "formik";

export const TextInput = ({ label, ...props }) => {
    const [field] = useField(props);
    return (
        <div>
            <label className={'form-field-label'} htmlFor={props.name}>{label}</label>
            <input className={'form-field'} id={props.name} {...field} {...props} />
        </div>
    );
};
