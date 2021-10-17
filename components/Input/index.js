import React, { forwardRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import Typography from "../Typography";
import styles from './styles';

const Input = ({
    field: { value, name },
    form: { handleChange, handleBlur, touched, errors },
    innerRef,
    ...rest }) => {
    return (
        <View>
            <TextInput

                ref={innerRef}
                style={styles.Input}
                name={name}
                value={value}
                onChangeText={handleChange(name)}
                onBlur={handleBlur(name)}
                {...rest}
            />
            {touched[name] && errors[name] && (
                <Typography variant="errorText">{errors[name]}</Typography>
            )}
        </View>
    );
};
export default Input;
