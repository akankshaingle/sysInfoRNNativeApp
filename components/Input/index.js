import React, { forwardRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import Typography from "../Typography";
import styles from './styles';
import { useTheme } from '@react-navigation/native';



const Input = ({
    field: { value, name },
    form: { handleChange, handleBlur, touched, errors },
    innerRef,
    ...rest }) => {
    const { colors } = useTheme();
    return (
        <View>
            <TextInput

                ref={innerRef}
                style={[styles.Input, { color: colors.text }]}
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
