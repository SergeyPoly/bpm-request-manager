import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from "formik";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { authFormFields } from "./authFormFields";
import { SubmitContainer } from '../../../../shared/components/SubmitContainer/SubmitContainer';
import { ErrorMessage } from '../../../../shared/components/ErrorMessage';
import { fetchLoginRequest } from '../../reducer/authActionCreators';
import { FormikField } from '../../../../shared/components/FormikField/FormikField';

export const AuthForm = ({reminderActive}) => {
    const dispatch = useDispatch();
    const errorStatus = useSelector(({auth}) => auth.errorStatus, shallowEqual);
    const {t} = useTranslation('common');
    const authFormData = reminderActive ?
        authFormFields.reminderForm :
        authFormFields.loginForm;
    const submitText = reminderActive ?
        t('authPage.remind') :
        t('authPage.login');
    const errorText = !errorStatus ?
        '' :
        (errorStatus === 401) ?
            t('authPage.loginError') :
            `${t('authPage.serverError')}: ${errorStatus}`;

    const initialValues = Object.fromEntries(authFormData.fields.map(element => [ element.name, '' ]));

    const fields = authFormData.fields.map(element => <FormikField
        key={element.id}
        type={element.type}
        name={element.name}
        required
        label={t(`authPage.${element.name}`)}
    />);

    const onSubmit = (values)=> {
        if (reminderActive) {
            console.log(values);
            console.log("login: testUser, password: testPassword");
        } else {
            dispatch(fetchLoginRequest(values));
        }
    };

    const formProps = {
        initialValues,
        onSubmit
    };

    return (
        <Formik {...formProps} enableReinitialize>
            <Form>
                <div>
                    {fields}
                    <ErrorMessage text={errorText} />
                    <SubmitContainer text={submitText} />
                </div>
            </Form>
        </Formik>
    );
};

AuthForm.propTypes = {
    reminderActive: PropTypes.bool.isRequired
};
