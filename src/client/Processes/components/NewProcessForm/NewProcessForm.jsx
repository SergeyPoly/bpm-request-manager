import React from 'react';
import { Formik, Form} from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { useTranslation } from 'react-i18next';

import { typeConverter, typeReassigner } from "./typeConverter";
import { SubmitContainer } from '../../../../shared/components/SubmitContainer/SubmitContainer';
import { startNewProcessRequestCreator } from '../../reducer/processesActionCreators';
import { toggleModalStatus } from '../../reducer/processesReducer';
import { FormikField } from '../../../../shared/components/FormikField/FormikField';

export const NewProcessForm = () => {
    const dispatch = useDispatch();
    const { formFields, key } = useSelector(({processes}) => processes.formOptions);
    const {t} = useTranslation('common');

    const initialValues = Object.fromEntries(formFields.map(({type, id, defaultValue}) => type === 'boolean' ?
        [ id, defaultValue ] :
        [ id, '' ]));
    const fieldTypes = Object.fromEntries(formFields.map(({id, type}) => [ id, typeReassigner(type) ]));

    const fields = formFields.map(element => <FormikField
        key={v4()}
        type={typeConverter(element.type)}
        name={element.id}
        label={element.label}
        placeholder={element.defaultValue}
        options={element.options}
    />);

    const validate = values => {
        const errors = {};
        for (let key in values) {
            if (!values[key] && fieldTypes[key] !== 'boolean') {
                errors[key] = 'required';
            }
        }
        return errors;
    };

    const onSubmit = (values, actions) => {
        const processedData = {};
        for (const key in values) {
            processedData[key] = { value: values[key], type: fieldTypes[key] };
        }
        for (const key in processedData) {
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
        validate,
        onSubmit,
    };

    return (
        <Formik {...formProps} enableReinitialize>
            <Form>
                <div>
                    {fields}
                    <SubmitContainer text={t('requestPage.send')}/>
                </div>
            </Form>
        </Formik>
    );
};

