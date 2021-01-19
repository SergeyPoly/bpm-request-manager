import React from "react";
import { useField } from "formik";

import './CustomFormFields.scss';

const base64FileConverter = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
};

export const FormikField = ({ label, options, ...props }) => {
    const {type, name} = props;
    const [field, meta, helpers] = useField(props);
    const labelClassName = type === 'checkbox' ?
        'form-label-secondary' :
        'form-label-primary';
    const fieldClassName = type === 'checkbox' ?
        'form-field-secondary' :
        type === 'file' ?
            'form-field-file' :
            'form-field-primary';
    const labelField = <label className={labelClassName} htmlFor={name}>{label}</label>;
    const currentField = options ?
        <select className={fieldClassName} {...field} {...props}>
            <option value={''}/>
            {options.map(({id, name}) => <option value={id} key={id}>{name}</option>)}
        </select> :
        type === 'file' ?
            <input
                className={fieldClassName}
                id={name}
                {...props}
                onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    const filename = file.name;
                    base64FileConverter(file)
                        .then((result) => {
                            const base64file = result.split(',')[1];
                            const processedFile = {
                                filename,
                                base64file,
                            };
                            return processedFile;
                        })
                        .then((processedFile) => helpers.setValue(processedFile));
                }}
            /> :
            <input
                className={fieldClassName}
                id={name}
                {...field}
                {...props}
            />;
    return (
        <div>
            {type !== 'checkbox' ? labelField : null}
            {currentField}
            {type === 'checkbox' ? labelField : null}
        </div>
    );
};

