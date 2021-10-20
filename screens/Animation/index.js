import React from 'react'
import { View, Text, Animated } from 'react-native'
import { TapGestureHandler } from 'react-native-gesture-handler'
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Animation = () => {
    const eventHandler = () => {

    }
    return (
        <View style={{ flex: 1 }}>
            <TapGestureHandler onGestureEvent={eventHandler}>
                <View
                    style={[
                        {
                            height: 100,
                            width: 100,
                            borderRadius: 50,
                            backgroundColor: 'yellow',
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginVertical: 20,

                        },
                    ]}
                />

            </TapGestureHandler>

        </View>
    )
}

export default Animation
