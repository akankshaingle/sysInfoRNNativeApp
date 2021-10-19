import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Modal } from 'react-native';
// import { TouchableHighlight } from 'react-native-gesture-handler';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Button from '../Button';
import { TouchableHighlight } from 'react-native';
import Typography from '../Typography';
import styles from './styles'
import { PureComponent } from 'react';
import { RectButton } from 'react-native-gesture-handler';

export const ImagePickerModelView = ({ onPress }) => {

    return (
        <View>
            {/* <Modal visible={true}
                animationType="fade"
                transparent={true} > */}
            {/* <View style={styles.centeredView}> */}
            <View style={styles.modalView}>
                <View style={styles.modalText}>
                    <Typography variant='h1'>Select Avtar</Typography>
                </View>
                <RectButton onPress={(type) => onPress('camera')} style={[styles.button]}>
                    <Typography style={styles.textStyle}>Select from Camera</Typography>
                </RectButton>
                <TouchableHighlight onPress={(type) => onPress('library')} style={styles.button}>
                    <Typography style={styles.textStyle}>Select from Library</Typography>
                </TouchableHighlight>
                <TouchableHighlight onPress={(type) => onPress('cancel')} style={styles.button}>
                    <Typography style={styles.textStyle}>cancle</Typography>
                </TouchableHighlight>
            </View>
            {/* </View> */}
            {/* </Modal> */}
        </View>
    )
}
class ImagePicker extends PureComponent {
    state = {
        isModalVisible: false
    }
    toggleImagePicker = () => {
        this.setState(({ isModalVisible }) => ({
            isModalVisible: !isModalVisible,
        }));
    }
    render() {
        const { isModalVisible } = this.state;

        return (
            <Modal visible={isModalVisible}
                animationType="fade"
                transparent={true} >
                <View style={styles.centeredView}>
                    <ImagePickerModelView onPress={type => {
                        switch (type) {
                            case 'camera':
                                launchCamera(
                                    {
                                        mediaType: 'photo',
                                        cameraType: 'front',
                                    },
                                    res => {
                                        console.warn(res);
                                        this.toggleImagePicker();
                                    },
                                );
                                break;
                            case 'library':
                                launchImageLibrary({
                                    mediaType: 'photo',
                                    // includeBase64: true,
                                },
                                    res => {
                                        console.warn(res);
                                        this.toggleImagePicker();
                                    },
                                );
                                break;
                            default:
                                this.toggleImagePicker();
                                break;
                        }
                    }} />
                </View>
            </Modal>
        )
    }
}

export default ImagePicker;
