import { createRef } from 'react';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';


const passwordInputRef = createRef();

export const fields = [
    {
        name: 'username',
        component: Input,
        placeholder: "username",
        keyboardType: "email-address",
        returnKeyType: 'next',
        onSubmitEditing: () => {
            passwordInputRef.current.focus();
        },
        validate: value => {
            if (!value) {
                return 'Required Field';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                return "Invalid email address";
            }
            return '';
        },
    },
    {
        innerRef: passwordInputRef,
        name: 'password',
        component: Input,
        placeholder: "password",
        secureTextEntry: true,
        // onSubmitEditing: handleSubmit,
        validate: value => {
            if (!value) {
                return 'Required Field';
            }
            return '';
        },
    },
    {
        component: Checkbox,
        name: 'rememberMe',
        title: "Remember me?",
        btnstyle: { justifyContent: 'flex-end', },
        validate: value => {
            if (!value) {
                return 'Required Field';
            }
            return '';
        },
    },
];
export const loginInitialValues = {
    username: '',
    password: '',
    rememberMe: false,
}