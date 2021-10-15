import React from 'react'
import { Field, Formik } from 'formik'
import Button from '../Button'
import { View } from 'react-native'

const Form = ({ fields, btnProps, ...rest }) => {
    return (
        <Formik {...rest}>
            {({ handleSubmit }) => (
                <View>
                    {
                        fields.map(x => (<Field key={x.name} {...x} />))
                    }
                    <Button  {...btnProps} onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    );
};

export default Form;
