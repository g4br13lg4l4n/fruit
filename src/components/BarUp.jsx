import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import Icons from './Icons';

const BarUp = () => {
    return(
        <View style={styles.barUpContainer}>
            <TouchableOpacity>
                <Icons icon={'backIcon'}/>
            </TouchableOpacity>
            
        </View>
    );
}

export default BarUp;