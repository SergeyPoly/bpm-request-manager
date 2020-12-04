import React from 'react';
import {Formik, Form} from "formik";
import {fields} from "./fields";

import {TextInput} from "../../../../shared/components/CustomFormFields/TextInput";
import {SubmitInput} from "../../../../shared/components/CustomFormFields/SubmitInput";

export const LoginForm = props => {
    const {handleSubmit} = props;

    const initialValues = {
        userName: "",
        password: "",
    };

    const validate = values => {
        const errors = {};
        if (!values.userName) {
            errors.userName = 'required';
        }
        if (!values.password) {
            errors.password = 'required';
        }
        return errors;
    };

    const onSubmit = (values)=> {
        handleSubmit();
        // console.log(values);
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
                    <TextInput {...fields.userName} />
                    <TextInput {...fields.password} />
                    <SubmitInput {...fields.submit} />
                </div>
            </Form>
        </Formik>
    );
};

