import React, { useRef, useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import ImagePicker from '../../components/ImagePicker';
import { TouchableHighlight } from 'react-native';
import Typography from '../../components/Typography';
import ImagePicker from '../../components/ImagePicker/index.android';
// import ChevronRightIcon from '../../assets/chevron_right.png';
import { RectButton } from 'react-native-gesture-handler';



const Settings = ({ navigation }) => {

    const imagePickerRef = useRef(null);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const res = await AsyncStorage.getItem('@user_info');
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
                <RectButton style={{
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

                </RectButton>
                {/* {userInfo && <Typography>{userInfo.firstname}</Typography>} */}
                {userInfo && (
                    <Typography
                        style={{ textAlign: 'center', marginTop: 10 }}
                        variant='h2'>{`${userInfo.firstName} ${userInfo.lastName}`}
                    </Typography>
                )}
                <RectButton
                    onPress={() => navigation.navigate('ChangePassword')}
                    style={{
                        marginVertical: 20,
                        paddingHorizontal: 10,
                        paddingVertical: 20,
                        backgroundColor: '#F7F7F7',
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Typography variant="h3" style={{ flex: 1 }}>
                            Change Password
                        </Typography>
                        {/* <ChevronRightIcon height={24} width={24} fill="#2D2D2D" /> */}
                        <Image
                            source={require('../../assets/chevron_right.png')}
                            style={{ height: 24, width: 24 }}
                        />

                    </View>
                </RectButton>
            </View>
            <Button style={{ marginVertical: 10 }} title='LOGOUT' onPress={logout} />
        </View>
    )
}

export default Settings;
