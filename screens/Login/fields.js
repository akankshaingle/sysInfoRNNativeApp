import { createRef } from 'react';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';


const passwordInputRef = createRef();

export const fields = [
    {
        name: 'email',
        autoCapitalize: 'none',
        component: Input,
        placeholder: "email",
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
    },
];
export const loginInitialValues = {
    email: '',
    password: '',
    rememberMe: false,
}