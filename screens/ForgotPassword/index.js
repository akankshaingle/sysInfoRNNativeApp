import React from 'react'
import { View, Text, Keyboard } from 'react-native'
import { forgotPasswordFields, forgotPasswordInitialValues } from './fields';
import Form from '../../components/Form';
import Typography from '../../components/Typography';
import { useHeaderHeight } from '@react-navigation/elements';
const ForgotPassword = () => {
    const headerHeight = useHeaderHeight();
    return (
        <View style={{ marginTop: headerHeight, flex: 1 }}>
            {/* <Typography
                variant='h1'
                style={{ marginVertical: 5, textAlign: 'center' }}>
                FORGOT PASSWORD
            </Typography> */}
            <Form
                btnProps={{ title: 'SUBMIT' }}
                fields={forgotPasswordFields}
                initialValues={forgotPasswordInitialValues}
                onSubmit={value => {
                    console.warn(value);
                    Keyboard.dismiss();
                }} />

        </View>
    )
}
export default ForgotPassword;
