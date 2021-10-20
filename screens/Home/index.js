import axios from 'axios'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, Text, ScrollView, Image, FlatList, TouchableHighlight, Animated } from 'react-native'
import Typography from '../../components/Typography';
import { RectButton } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import { StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
    const [data, setData] = useState([]);

    const loadData = useCallback(
        async () => {
            try {
                const res = await axios.get(
                    'https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10',
                );
                setData(res.data);
            } catch (error) {

            }
        },
        [],
    )


    useEffect(() => {
        loadData();
    }, [loadData]);

    const renderItem = ({ item }) => {
        return (
            <RectButton
                onPress={() => navigation.navigate('DetailsPage', { headerBackTitle: 'Home', item })}
                key={item.id}
                style={{
                    height: 200,
                    aspectRatio: 3 / 2,
                    borderRadius: 10,
                }}
            >
                <Image
                    source={{ uri: `${item.url}.png`, }}
                    style={{
                        flex: 1,
                        borderRadius: 10,
                    }}
                    resizeMode='cover' />
                <View
                    style={{
                        position: 'absolute',
                        alignSelf: 'flex-end',
                        bottom: 0,
                        left: 0,
                        flex: 1,
                        height: 60,
                        backgroundColor: '#3d3d3d',
                        opacity: 0.6,
                        borderBottomEndRadius: 10,
                        borderBottomStartRadius: 10,
                    }}>
                    <Typography variant="body1" style={{ padding: 8, color: '#fff' }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
                        dolores.
                    </Typography>
                </View>
            </RectButton>
        );
    };
    const keyExtractor = (item) => `${item.id}`

    const FadeAnimation = useRef(new Animated.Value(0)).current;

    const FadeIn = () => {
        Animated.timing(FadeAnimation, {
            toValue: 1,
            duration: 5000,
        }).start();

    }

    const FadeOut = () => {
        Animated.timing(FadeAnimation, {
            toValue: 0,
            duration: 5000,
        }).start();
    }


    return (
        <ScrollView style={{ flex: 1 }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                contentContainerStyle={{ padding: 20 }}
                pagingEnabled
                snapToAlignment="center"
                decelerationRate="fast"
                snapToInterval={330}
            />

            <Animated.View
                style={[
                    {
                        height: 100,
                        width: 100,
                        borderRadius: 50,
                        backgroundColor: 'yellow',
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: FadeAnimation,
                    },
                ]}
            >

                <Text >Fading View!</Text>
            </Animated.View>
            <View>
                <Button
                    title="Show Ball"
                    onPress={FadeIn}

                />
                <Button
                    title="Hide Ball"
                    onPress={FadeOut}
                />
                <Button
                    title="Go to Animation page-1"
                    onPress={() => { navigation.navigate('AnimationPage') }}

                />
                <Button
                    title="Go to Animation page-2"
                    onPress={() => { navigation.navigate('AnimationPage') }}
                />

            </View>

        </ScrollView >
    )
}

export default Home;


// import React, { useRef } from 'react';
// import { Animated, Text, View, StyleSheet, Button } from 'react-native';

// export default function App() {
//     const fadeAnim = useRef(new Animated.Value(0)).current;

//     const fadeIn = () => {
//         Animated.timing(fadeAnim, {
//             toValue: 1,
//             duration: 5000,
//         }).start();
//     };

//     const fadeOut = () => {
//         Animated.timing(fadeAnim, {
//             toValue: 0,
//             duration: 5000,
//         }).start();
//     };

//     return (
//         <View style={styles.container}>
//             <Animated.View
//                 style={[
//                     styles.fadingContainer,
//                     {
//                         opacity: fadeAnim, // Bind opacity to animated value
//                     },
//                 ]}>
//                 <Text style={styles.fadingText}>Fading View!</Text>
//             </Animated.View>
//             <View style={styles.buttonRow}>
//                 <Button title="Fade In" onPress={fadeIn} />
//                 <Button title="Fade Out" onPress={fadeOut} />
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     fadingContainer: {
//         paddingVertical: 8,
//         paddingHorizontal: 16,
//         backgroundColor: 'powderblue',
//     },
//     fadingText: {
//         fontSize: 28,
//         textAlign: 'center',
//         margin: 10,
//     },
//     buttonRow: {
//         flexDirection: 'row',
//         // marginVertical: 16,
//         marginHorizontal: 20,
//         alignItems: 'center',
//         paddingHorizontal: 16,
//         justifyContent: 'center',
//     },

// });

