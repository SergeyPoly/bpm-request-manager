import React from 'react';
import { Formik, Form} from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';

import { typeConverter } from "./typeConverter";
import { SubmitContainer } from '../../../../shared/components/CustomFormFields/SubmitContainer';
import {
    startNewProcessRequestCreator,
    toggleModalStatus,
} from '../../reducer/requestsActionCreators';
import { FormikField } from '../../../../shared/components/CustomFormFields/FormikField';

export const NewProcessForm = () => {
    const dispatch = useDispatch();
    const { formFields, key } = useSelector(store => store.requests.formOptions);

    const initialValues = Object.fromEntries(formFields.map(element => element.type === 'boolean' ?
        [ element.id, element.defaultValue ] :
        [ element.id, '' ]));

    const fieldTypes = Object.fromEntries(formFields.map(element => element.type === 'long' ?
        [ element.id, 'double' ] :
        element.type === 'enum' ?
            [ element.id, 'string' ]:
            [ element.id, element.type ]));

    const fields = formFields.map(element => <FormikField
        key={v4()}
        type={typeConverter[element.type]}
        name={element.id}
        label={element.label}
        placeholder={element.defaultValue}
        options={element.options}
    />);

    const validate = values => {
        const errors = {};
        for (let key in values) {
            if (!values[key]) {
                errors[key] = 'required';
            }
        }
        return errors;
    };

    const onSubmit = (values, actions) => {
        let processedData = {};
        for (let key in values) {
            processedData[key] = { value: values[key], type: fieldTypes[key] };
        }
        for (let key in processedData) {
            if (processedData[key].type === 'date') {
                let date = new Date(processedData[key].value);
                let offset = date.getTimezoneOffset() / (-60);
                let timezone = offset >= 10 ? `+${offset}00` : `+0${offset}00`;
                processedData[key].value = date.toISOString().replace('Z', timezone);
            }
            if (processedData[key].type === 'file') {
                processedData[key] = {
                    value: processedData[key].value.base64file,
                    type: 'file',
                    valueInfo: {
                        filename: processedData[key].value.filename,
                        encoding: 'Base64',
                    },
                }
            }
        }
        dispatch(startNewProcessRequestCreator(key, processedData));
        dispatch(toggleModalStatus());
        actions.resetForm({
            values: {},
        })
    };

    const formProps = {
        initialValues,
        onSubmit,
        validate
    };

    return (
        <Formik {...formProps} enableReinitialize>
            <Form>
                <div>
                    {fields}
                    <SubmitContainer text="Створити"/>
                </div>
            </Form>
        </Formik>
    );
};

