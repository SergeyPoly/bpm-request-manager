import React from 'react';
import { Formik, Form } from "formik";
import { useDispatch } from 'react-redux';

import { authFormFields } from "./authFormFields";
import { SubmitContainer } from '../../../../shared/components/CustomFormFields/SubmitContainer';
import { ErrorMessage } from '../../../../shared/components/ErrorMessage';
import { loginRequestCreator } from '../../reducer/authActionCreators';
import { FormikField } from '../../../../shared/components/CustomFormFields/FormikField';

export const AuthForm = ({reminderActive}) => {
    const dispatch = useDispatch();
    const authFormData = reminderActive ?
        authFormFields.reminderForm :
        authFormFields.loginForm;

    const initialValues = Object.fromEntries(authFormData.fields.map(element => [ element.name, '' ]));

    const fields = authFormData.fields.map(element => <FormikField
        key={element.id}
        type={element.type}
        name={element.name}
        label={element.label}
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

    const onSubmit = (values)=> {
        dispatch(loginRequestCreator(values))
    };

    const formProps = {
        initialValues,
        validate,
        onSubmit
    };

    return (
        <Formik {...formProps} enableReinitialize>
            <Form>
                <div>
                    {fields}
                    <ErrorMessage />
                    <SubmitContainer text={authFormData.submitText} />
                </div>
            </Form>
        </Formik>
    );
};

