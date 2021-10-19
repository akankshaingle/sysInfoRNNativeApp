import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const Details = ({ route, navigation: { setOptions } }) => {
    const { headerBackTitle, item } = route.params;
    useEffect(() => {
        setOptions({
            headerBackTitle,
        });
    }, [setOptions, headerBackTitle]);
    return (
        <View>
            <Text>Details Page</Text>
        </View>
    )
}

export default Details;
