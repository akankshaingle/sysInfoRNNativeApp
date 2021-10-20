import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Typography from '../Typography';
import styles from './styles';

const Button = ({ title, ...rest }) => {
    return (
        <TouchableHighlight {...rest}>
            <View style={styles.btn}>
                <Typography variant='btnText'>{title}</Typography>
                {/* <Text style={{ color: 'white', fontSize: 16 }} >Login</Text> */}
            </View>
        </TouchableHighlight>
    )
}
export default Button;
