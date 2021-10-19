import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, ScrollView, Image, FlatList, TouchableHighlight } from 'react-native'
import Typography from '../../components/Typography';
import { RectButton } from 'react-native-gesture-handler';

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
                onPress={() => navigation.navigate('DetailsPage', { headerBackTitle: 'Home' })}
                key={item.id}
                style={{
                    height: 200,
                    aspectRatio: 3 / 2,
                    borderRadius: 10,
                }}
            >
                <Image
                    source={{ uri: item.thumbnailUrl }}
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
        </ScrollView>
    )
}

export default Home;
