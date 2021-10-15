import { createRef } from 'react';
import Input from '../../components/Input';

const passwordRef = createRef();
const confirmPasswordRef = createRef();

export const forgotPasswordFields = [
    {
        innerRef: emailRef,
        name: 'email',
        component: Input,
        placeholder: "email",
        keyboardType: "email-address",
        returnKeyType: 'next',
        onSubmitEditing: () => {
            passwordRef.current.focus();
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
        innerRef: passwordRef,
        name: 'password',
        component: Input,
        placeholder: "password",
        returnKeyType: 'next',
        secureTextEntry: true,
        onSubmitEditing: () => {
            confirmPasswordRef.current.focus();
        },
        // onSubmitEditing: handleSubmit,
        validate: value => {
            if (!value) {
                return 'Required Field';
            }
            return '';
        },
    },
    {
        innerRef: confirmPasswordRef,
        name: 'confirmPassword',
        component: Input,
        placeholder: "Confirm Password",
        secureTextEntry: true,
        // onSubmitEditing: handleSubmit,
        validate: value => {
            if (!value) {
                return 'Required Field';
            }
            return '';
        },
    },
    // {
    //     component: Checkbox,
    //     name: 'rememberMe',
    //     title: "Remember me?",
    //     btnstyle: { justifyContent: 'flex-end', },
    //     validate: value => {
    //         if (!value) {
    //             return 'Required Field';
    //         }
    //         return '';
    //     },
    // },
];
export const forgotPasswordInitialValues = {
    email: '',
    password: '',
    confirmPassword: '',
}