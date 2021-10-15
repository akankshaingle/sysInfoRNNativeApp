import React from 'react'
// import { Form } from 'formik'
import { View, Text, Keyboard } from 'react-native'
import { fields, loginInitialValues } from './fields';
import Form from '../../components/Form';
import Typography from '../../components/Typography';
import { useHeaderHeight } from '@react-navigation/elements';


// const headerHeight = useHeaderHeight();
const Login = ({ navigation }) => {
    const headerHeight = useHeaderHeight();
    return (
        <View style={{ marginTop: headerHeight, flex: 1 }}>
            {/* <Typography
                variant='h1'
                style={{ marginVertical: 5, textAlign: 'center' }}>
                LOGIN
            </Typography> */}
            <Form
                btnProps={{ title: 'LOGIN' }}
                fields={fields}
                initialValues={loginInitialValues}
                onSubmit={value => {
                    console.warn(value);
                    Keyboard.dismiss();
                }} />
            <Typography style={{
                textAlign: 'center',
                paddingTop: 10,
                top: 0,
                // marginVertical: 290

            }}>Don't Have Account? {` `}
                <Typography
                    onPress={() => { navigation.navigate('Register') }}
                    style={{ color: 'red', textDecorationLine: 'underline' }}> SignUp</Typography>
            </Typography>
        </View>
    )
}

export default Login;
