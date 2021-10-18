import React, { useRef, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from '../../components/ImagePicker/index';
import { TouchableHighlight } from 'react-native';
import Typography from '../../components/Typography';
// import HomeIcon from './assets/home.svg';
// import SettingsIcon from './assets/settings.svg';


const Settings = ({ navigation }) => {

    const imagePickerRef = useRef(null);
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const res = AsyncStorage.getItem('@user_info');
                const resObj = JSON.parse(res);
                setUserInfo(resObj.user);
            } catch (error) {

            }
        }
        getUserInfo();
    }, []);

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
        // <View style={{ flex: 1 }}>
        //     <View style={{ flex: 1, marginVertical: 10 }}>
        //         <View style={{
        //             height: 100,
        //             width: 100,
        //             backgroundColor: '#d3d3d3',
        //             borderRadius: 50,
        //             justifyContent: 'center',
        //             alignSelf: 'center',
        //             marginTop: 25,
        //         }}>
        //             <ImagePicker />
        //         </View>

        //     </View>
        //     <Button style={{ marginVertical: 10 }} title='LOGOUT' onPress={logout} />
        // </View>
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, marginVertical: 10 }}>
                <TouchableHighlight style={{
                    height: 100,
                    width: 100,
                    backgroundColor: '#d3d3d3',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: 25,
                }}
                    onPress={() => {
                        imagePickerRef.current.toggleImagePicker();
                    }}
                >
                    <ImagePicker ref={imagePickerRef} />
                    {/* <Typography>{userInfo.firstName}</Typography> */}
                </TouchableHighlight>

            </View>
            <Button style={{ marginVertical: 10 }} title='LOGOUT' onPress={logout} />
        </View>
    )
}

export default Settings;
