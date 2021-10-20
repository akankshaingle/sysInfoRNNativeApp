import React from 'react'
// import { Form } from 'formik'
import Form from '../../components/Form';
import { View, Text, Keyboard } from 'react-native'
import { registerFields, registerInitialValues } from './fields';
import Typography from '../../components/Typography';
import { useHeaderHeight } from '@react-navigation/elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../utils/axiosInstance';


const Register = ({ navigation }) => {
    const headerHeight = useHeaderHeight();
    const onSubmit = async (values, actions) => {
        try {
            const { confirmPassword, ...rest } = values;
            const res = await axiosInstance.post('register', rest);
            await AsyncStorage.setItem('@user_info', JSON.stringify(res.data));
            navigation.reset({
                index: 0,
                routes: [{ name: "Home" }]
            });
        }
        catch (error) {
            actions.setErrors({ serverError: error.response.data })
        }
    };
    return (
        <View style={{ marginTop: headerHeight, flex: 1 }}>

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
                onSubmit={onSubmit} />

        </View>
    )
}
export default Register
