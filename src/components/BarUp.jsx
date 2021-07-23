import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import userIcon  from './userIcon';

const BarUp = () => {
    return(
        <View style={styles.barUpContainer}>
            <TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity>
                <SvgXml xml={userIcon} width="30" height="30" />
            </TouchableOpacity>
        </View>
    );
}

export default BarUp;