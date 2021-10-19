import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'

const Details = ({ route, navigation: { setOptions } }) => {
    const { headerBackTitle, item } = route.params;
    console.warn(item.thumbnailUrl);
    useEffect(() => {
        setOptions({
            headerBackTitle,
        });
    }, [setOptions, headerBackTitle]);
    // console.warn(item.url);
    return (
        <View>
            {/* <Image
                source={{ uri: item.thumbnailUrl }}
                style={{
                    height: 240,
                    flex: 1,
                }}
                resizeMode="cover"
            /> */}

            {/* <Image
                source={{
                    uri: `${item.thumbnailUrl}.png`,

                    'Content-Type': 'image/png',
                }}
                style={{
                    height: 240,
                    flex: 1,
                }}
                resizeMode="cover"
            /> */}

            <Image
                source={{
                    uri: `${item.url}.png`,
                    //   priority: FastImage.priority.normal,
                    'Content-Type': 'image/png',
                }}
                style={{
                    height: 240,
                    // width: screenWidth,
                }}
            // resizeMode={FastImage.resizeMode.cover}
            />
            <Text>Details Page</Text>
        </View>
    )
}

export default Details;
