import React from 'react'
import { Field, Formik } from 'formik'
import Button from '../Button'
import { View } from 'react-native'
import Typography from '../Typography';

const Form = ({ fields, btnProps, ...rest }) => {
    return (
        <Formik {...rest}>
            {({ handleSubmit, errors }) => (
                <View>
                    {errors.serverError && (<Typography variant='errorText' style={{
                        textAlign: 'center',
                        fontWeight: '600',
                        padding: 10,
                        fontSize: 18,
                    }}>{errors.serverError}</Typography>)}
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
