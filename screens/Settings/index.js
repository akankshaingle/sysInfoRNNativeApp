import React from 'react'
import { View, Text } from 'react-native'
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from '../../components/ImagePicker/index';
// import HomeIcon from './assets/home.svg';
// import SettingsIcon from './assets/settings.svg';


const Settings = ({ navigation }) => {
    const logout = async () => {
        try {
            await AsyncStorage.clear();
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        } catch (error) { }
    };
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, marginVertical: 10 }}>
                <View style={{
                    height: 100,
                    width: 100,
                    backgroundColor: '#d3d3d3',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: 25,
                }}>
                </View>
                <ImagePicker />
            </View>
            <Button style={{ marginVertical: 10 }} title='LOGOUT' onPress={logout} />
        </View>
    )
}

export default Settings;
