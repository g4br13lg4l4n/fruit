import React from 'react';
//import { SvgXml } from 'react-native-svg';
import { View, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
//import userIcon  from './userIcon';
//import backIcon from './backIcon';
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