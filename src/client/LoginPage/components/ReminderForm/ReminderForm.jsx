import React from 'react';
import { Formik, Form } from "formik";
import { useDispatch } from 'react-redux';

import { reminderFormfields } from "./reminderFormfields";
import { TextInput } from "../../../../shared/components/CustomFormFields/TextInput";
import { SubmitInput } from "../../../../shared/components/CustomFormFields/SubmitInput";
import { ErrorMessage } from '../ErrorMessage';
import { toggleLoginPageForm } from '../../reducer/loginActionCreators';


export const ReminderForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        userName: "",
        email: "",
    };

    const validate = values => {
        const errors = {};
        if (!values.userName) {
            errors.userName = 'required';
        }
        if (!values.email) {
            errors.email = 'required';
        }
        return errors;
    };

    const onSubmit = (values)=> {
        dispatch(toggleLoginPageForm());
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
                    <TextInput {...reminderFormfields.username} />
                    <TextInput {...reminderFormfields.email} />
                    <ErrorMessage />
                    <SubmitInput {...reminderFormfields.submit} />
                </div>
            </Form>
        </Formik>
    );
};

