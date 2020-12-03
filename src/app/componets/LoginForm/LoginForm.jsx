import React from 'react';
import {Formik, Form} from "formik";
import {fields} from "./fields";
import { useDispatch } from 'react-redux';

import {TextInput} from "./CustomFormFields/TextInput";
import {SubmitInput} from "./CustomFormFields/SubmitInput";
import { loginCreator } from '../../store/action-creators';

export const LoginForm = () => {

    const dispatch = useDispatch();

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
        dispatch(loginCreator());
        console.log(values);
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

