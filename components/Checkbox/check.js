import React, { useState } from "react";
import { StyleSheet, Text, View, CheckBox } from 'react-native';
import Typography from "../Typography";
import styles from "./styles";

const Checkbox = ({
    field: { value, name },
    form: { setFieldValue },
    title, btnstyle, textstyle, onChange }) => {
    const [isselected, setisselected] = useState(value);
    return (
        <View style={[styles.box, btnstyle, textstyle]}>
            <CheckBox
                value={isselected}
                // onValueChange={setisselected}
                onValueChange={() => {
                    setisselected(val => {
                        setFieldValue(name, !val);
                        return !val;
                    });
                }}
            ></CheckBox>
            <Typography variant="checkboxText" style={[btnstyle, textstyle]}>{title}</Typography>
        </View>
    )
}

export default Checkbox;

