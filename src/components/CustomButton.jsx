import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ onPress, title, styleButton, styleText }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styleButton}>
            <Text style={styleText}>{ title }</Text>
        </TouchableOpacity>
    )
}

export default CustomButton