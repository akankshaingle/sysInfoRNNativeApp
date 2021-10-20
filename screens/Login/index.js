import React from 'react'
// import { Form } from 'formik'
import { View, Text, Keyboard } from 'react-native'
import { fields, loginInitialValues } from './fields';
import Form from '../../components/Form';
import Typography from '../../components/Typography';
import { useHeaderHeight } from '@react-navigation/elements';
import axiosInstance from '../../utils/axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RectButton } from 'react-native-gesture-handler';

// const headerHeight = useHeaderHeight();
const Login = ({ navigation }) => {
    const headerHeight = useHeaderHeight();
    const onSubmit = async (values, actions) => {
        try {
            const { rememberMe, ...rest } = values;
            const res = await axiosInstance.post('login', rest);
            await AsyncStorage.setItem('@user_info', JSON.stringify(res.data));
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });
        } catch (error) {
            actions.setErrors({ serverError: error.response.data });
        }
    };
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
                onSubmit={onSubmit} />
            <Typography style={{
                textAlign: 'center',
                paddingTop: 10,
                top: 0,
                // marginVertical: 290

            }}>Don't Have Account? {` `}
                <Typography
                    onPress={() => { navigation.navigate('Register') }}
                    style={{ color: 'red', textDecorationLine: 'underline' }}>SignUp</Typography>
            </Typography>
            <RectButton
                onPress={() => navigation.navigate('ForgotPassword')}
                style={{
                    marginVertical: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    // backgroundColor: '#F7F7F7',
                    alignItems: 'center'
                }}>
                <View style={{ alignItems: 'center' }}>
                    <Typography style={{
                        fontWeight: '700',
                        color: 'red',
                        fontSize: 14,
                        lineHeight: 14,
                    }}>
                        Forgot Password ?
                    </Typography>
                </View>
            </RectButton>
        </View>
    )
}

export default Login;
