import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import Typography from './components/Typography';
import Input from './components/Input';
import Button from './components/Button';
import { ActivityIndicator, errors, Platform, Keyboard, KeyboardAvoidingView, Alert, StyleSheet, Text, View, Image, ImageBackground, TextInput, SafeAreaView, TouchableHighlight } from 'react-native';
import Checkbox from './components/Checkbox';
import commonStyles from './commonStyles';
import { Formik, Field } from 'formik';
// import { fields, loginInitialValues } from './loginFields';
// import { registerFields, registerInitialValues } from './registerFields';
import Form from './components/Form';
import Login from './screens/Login';
import Register from './screens/Register';
import ForgotPassword from './screens/ForgotPassword';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const passwordInputRef = useRef(null)

    useEffect(() => {
        const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
            setIsKeyboardVisible(true);
        });
        const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
            setIsKeyboardVisible(false);
        });
        return () => {
            keyboardDidShow.remove();
            keyboardDidHide.remove();
        }
    });
    return (
        <View style={[commonStyles.flex], {}}>
            <StatusBar />
            <KeyboardAvoidingView>
                <Image
                    source={{
                        uri: 'https://reactjs.org/logo-og.png',
                    }}
                    style={{
                        width: isKeyboardVisible ? 50 : 100,
                        height: isKeyboardVisible ? 50 : 100,
                        marginVertical: 20,
                        alignSelf: 'center',
                        borderRadius: 50,
                    }}
                    resizeMode='cover' />

                {/* <Typography
          variant='h1'
          style={{ marginVertical: 5, textAlign: 'center' }}>
          LOGIN
        </Typography> */}

                {/* <Form
          fields={fields}
          initialValues={loginInitialValues}
          onSubmit={value => {
            console.warn(value);
            Keyboard.dismiss();
          }} /> */}
                {/* <Form
          fields={registerFields}
          initialValues={registerInitialValues}
          onSubmit={value => {
            console.warn(value);
            Keyboard.dismiss();
          }} /> */}
                {/* <Login /> */}
                {/* <Register /> */}
                <ForgotPassword />

                {/* <Text style={{
          textAlign: 'center',
          paddingTop: 10,
          top: 0,
          // marginVertical: 290

        }}>Don't Have Account? {` `}
          <Text style={{ color: 'red', textDecorationLine: 'underline' }}> SignUp</Text>
        </Text> */}
            </KeyboardAvoidingView>

        </View >
    );
}

const styles = StyleSheet.create({
    // container: {

    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    // horizontal: {
    //   flexDirection: "column",
    // }
});
export default App;