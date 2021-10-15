import React from 'react'
// import { Form } from 'formik'
import { View, Text, Keyboard } from 'react-native'
import { forgotPasswordFields, forgotPasswordInitialValues } from './fields';
import Form from '../../components/Form';
import Typography from '../../components/Typography';
const ForgotPassword = () => {
    return (
        <View>
            <Typography
                variant='h1'
                style={{ marginVertical: 5, textAlign: 'center' }}>
                RESET PASSWORD
            </Typography>
            <Form
                btnProps={{ title: 'SUBMIT' }}
                fields={forgotPasswordFields}
                initialValues={forgotPasswordInitialValues}
                onSubmit={value => {
                    console.warn(value);
                    Keyboard.dismiss();
                }} />
            {/* <Typography style={{
                textAlign: 'center',
                paddingTop: 10,
                top: 0,
                // marginVertical: 290

            }}>Don't Have Account? {` `}
                <Typography style={{ color: 'red', textDecorationLine: 'underline' }}> SignUp</Typography>
            </Typography> */}
        </View>
    )
}

export default ForgotPassword;
