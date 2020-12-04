import React from 'react';
import {Formik, Form} from "formik";
import {fields} from "./fields";

import {TextInput} from "../../../../shared/components/CustomFormFields/TextInput";
import {SubmitInput} from "../../../../shared/components/CustomFormFields/SubmitInput";

export const ReminderForm = props => {
    const {handleSubmit} = props;

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
        handleSubmit();
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
                    <TextInput {...fields.email} />
                    <SubmitInput {...fields.submit} />
                </div>
            </Form>
        </Formik>
    );
};

