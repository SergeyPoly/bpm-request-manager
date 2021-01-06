import React from "react";
import {useField} from "formik";

import './CustomFormFields.scss'

export const FormikField = ({ label, options, ...props }) => {
    const fieldType = props.type;
    const [field] = useField(props);
    const labelClassName = fieldType === 'checkbox' ? 'field-label-secondary' : 'field-label-primary';
    const fieldClassName = fieldType === 'checkbox' ?
        'form-field-secondary' :
        fieldType === 'file' ? 'form-field-third' : 'form-field-primary';
    const labelField = <label className={labelClassName} htmlFor={props.name}>{label}</label>;
    const currentField = options ?
        <select className={fieldClassName} {...field} {...props}>
            <option value={''}/>
            {options.map(({id, name}) => <option value={id} key={id}>{name}</option>)}
        </select> :
        <input className={fieldClassName} id={props.name} {...field} {...props} />;

    return (
        <div>
            {fieldType === 'text' || fieldType === 'number' || fieldType === 'date' || fieldType === 'file' || fieldType === 'select' ? labelField : null}
            {currentField}
            {fieldType === 'checkbox' ? labelField : null}
        </div>
    );
};

