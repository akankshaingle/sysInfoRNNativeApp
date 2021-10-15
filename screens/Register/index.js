import React from 'react'
// import { Form } from 'formik'
import Form from '../../components/Form';
import { View, Text, Keyboard } from 'react-native'
import { registerFields, registerInitialValues } from './fields';
import Typography from '../../components/Typography';
import { useHeaderHeight } from '@react-navigation/elements';

const Register = () => {
    const headerHeight = useHeaderHeight();
    return (
        <View style={{ marginTop: headerHeight, flex: 1 }}>
            {/* <Typography
                variant='h1'
                style={{ marginVertical: 5, textAlign: 'center' }}>
                REGISTER
            </Typography> */}
            <Form
                validate={(values) => {
                    let errors = {};
                    if (values.password !== values.confirmPassword) {
                        errors.confirmPassword = 'Confirm password should match with password';
                    }
                    return errors;
                }}
                btnProps={{ title: 'REGISTER' }}
                fields={registerFields}
                initialValues={registerInitialValues}
                onSubmit={value => {
                    console.warn(value);
                    Keyboard.dismiss();
                }} />
        </View>
    )
}

export default Register
