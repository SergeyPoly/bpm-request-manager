import React from 'react';
import { Formik, Form } from "formik";
import { useDispatch } from 'react-redux';

import { loginFormFields } from "./loginFormFields";
import { TextInput } from "../../../../shared/components/CustomFormFields/TextInput";
import { SubmitInput } from "../../../../shared/components/CustomFormFields/SubmitInput";
import { ErrorMessage } from '../ErrorMessage';
import { loginRequestCreator } from '../../reducer/loginActionCreators';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        username: "",
        password: "",
    };

    const validate = values => {
        const errors = {};
        if (!values.username) {
            errors.username = 'required';
        }
        if (!values.password) {
            errors.password = 'required';
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
        <Formik {...formProps}>
            <Form>
                <div>
                    <TextInput {...loginFormFields.username} />
                    <TextInput {...loginFormFields.password} />
                    <ErrorMessage />
                    <SubmitInput {...loginFormFields.submit} />
                </div>
            </Form>
        </Formik>
    );
};

