import React from 'react';
import Box from '@material-ui/core/Box';
import { Formik, Form } from 'formik';

const CustomForm = (props) => {

    const { validate, initialValues, onSubmit, children } = props


    return (
        <Box>
            <Formik
                initialValues={initialValues}
                validate={values => validate(values)}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        onSubmit(values);
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting, values }) => (
                    <Form>
                        <Box>
                            {children}
                        </Box>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default CustomForm;