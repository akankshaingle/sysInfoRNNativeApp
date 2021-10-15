import React, { Children } from 'react';
import { Text } from 'react-native';
import styles from './styles';

const Typography = ({ children, variant, style, ...rest }) => {
    return (
        <Text style={[styles[variant], styles.heading, style]} {...rest}>
            {children}
        </Text>
    );
};

export default Typography;
