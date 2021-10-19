// import React, { Children } from 'react';
// import { Text } from 'react-native';
// import styles from './styles';

// const Typography = ({ children, variant, style, ...rest }) => {
//     return (
//         <Text style={[styles[variant], styles.heading, style]} {...rest}>
//             {children}
//         </Text>
//     );
// };

// export default Typography;


import React, { Children } from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { useTheme } from '@react-navigation/native';

const Typography = ({ children, variant, style, ...rest }) => {
    const { colors } = useTheme();
    return (
        <Text style={[styles[variant], { color: colors.text }, style]} {...rest}>
            {children}
        </Text>
    );
};

export default Typography;
