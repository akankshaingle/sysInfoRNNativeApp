import React from 'react'
import { View, Text, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Radio = ({
    field: { value, name },
    form: { setFieldValue },
    data,
    placeholder,
}) => {
    return (
        <View style={{ margin: 10 }}>
            {/* <Text>{placeholder}</Text> */}
            <View style={{ flexDirection: 'row', }}>
                {data.map((item) => {
                    return (
                        <RectButton
                            key={item.value}
                            onPress={() => {
                                setFieldValue(name, item.value)
                            }}
                            style={{
                                flexDirection: 'row', alignItems: 'center'
                            }}>
                            {value === item.value ? (<Icon
                                name="check-circle"
                                size={25}
                                // color="#2c9dd1"
                                color='dodgerblue'
                            />) :
                                (<Icon
                                    name="circle"
                                    size={25}
                                    color='dodgerblue'
                                />)}
                            <Text style={{ paddingHorizontal: 15 }}>{item.text}</Text>
                        </RectButton>
                    )
                })}
            </View>
        </View>
    )
}
export default Radio;


{/* <RadioButtonRN
    data={data}
    selectedBtn={(e) => console.log(e)}
    icon={
        <Icon
            name="check-circle"
            size={25}
            color="#2c9dd1"
        />
    }
/> */}