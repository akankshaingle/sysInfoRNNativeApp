import { createRef } from 'react';
import Input from '../../components/Input';

const emailRef = createRef();
const lastNameRef = createRef();
const ageRef = createRef();
const passwordRef = createRef();
const confirmPasswordRef = createRef();

export const registerFields = [
    {
        name: 'firstName',
        component: Input,
        placeholder: "First Name",
        returnKeyType: 'next',
        onSubmitEditing: () => {
            lastNameRef.current.focus();
        },
        validate: value => {
            if (!value) {
                return 'Required Field';
            }
            return '';
        },
    },
    {
        innerRef: lastNameRef,
        name: 'lastName',
        component: Input,
        placeholder: "Last Name",
        returnKeyType: 'next',
        onSubmitEditing: () => {
            ageRef.current.focus();
        },
        validate: value => {
            if (!value) {
                return 'Required Field';
            }
            return '';
        },
    },
    {
        innerRef: ageRef,
        name: 'age',
        component: Input,
        placeholder: "age",
        returnKeyType: 'next',
        keyboardType: "number-pad",
        maxLength: 3,
        onSubmitEditing: () => {
            emailRef.current.focus();
        },
        validate: value => {
            if (!value) {
                return 'Required Field';
            }
            if (value < 1 || value > 100) {
                return 'Value should be between 0 and 100';
            }
            return '';
        },
    },
    {
        innerRef: emailRef,
        name: 'email',
        component: Input,
        placeholder: "email",
        autoCapitalize: 'none',
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
            if (value.length < 5) {
                return 'Minimum length must be greater then 5';
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
export const registerInitialValues = {
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
}