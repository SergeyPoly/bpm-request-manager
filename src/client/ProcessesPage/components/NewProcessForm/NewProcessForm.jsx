import React from 'react';
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from 'react-redux';

import { typeConverter } from "./typeConverter";
import { SubmitInput } from "../../../../shared/components/CustomFormFields/SubmitInput";
import {
    setModalInactive,
    setProcessesFormsFields,
} from '../../reducer/processesActionCreators';
import { FormikField } from '../../../../shared/components/CustomFormFields/FormikField';

export const NewProcessForm = () => {
    const dispatch = useDispatch();
    const formFields = useSelector(store => store.processes.formFields);

    const initialValues = Object.fromEntries(formFields.map(element => element.type === 'boolean' ?
        [ element.id, element.defaultValue ] :
        [ element.id, '' ]));

    const fields = formFields.map(element => <FormikField
        key={element.id}
        type={typeConverter[element.type]}
        name={element.id}
        label={element.label}
        placeholder={element.defaultValue}
        options={element.options}
    />);

    const onSubmit = (values, actions)=> {
        console.log(values);
        dispatch(setModalInactive());
        actions.resetForm({
            values: {},
        })
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
                    <SubmitInput type={"submit"} value={"send"} name={"submit"}/>
                </div>
            </Form>
        </Formik>
    );
};

