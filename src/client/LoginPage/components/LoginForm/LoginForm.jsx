import React from 'react';
import {Formik, Form} from "formik";
import {fields} from "./fields";

import {TextInput} from "../../../../shared/components/CustomFormFields/TextInput";
import {SubmitInput} from "../../../../shared/components/CustomFormFields/SubmitInput";
import { ErrorMessage } from '../ErrorMessage';

export const LoginForm = props => {
    const {handleSubmit} = props;

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
        handleSubmit(values);
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
                    <TextInput {...fields.username} />
                    <TextInput {...fields.password} />
                    <ErrorMessage />
                    <SubmitInput {...fields.submit} />
                </div>
            </Form>
        </Formik>
    );
};

