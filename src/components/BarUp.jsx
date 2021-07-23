import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import Icons from './Icons';
import {useRoute} from '@react-navigation/native';


const BarUp = () => {
    const route = useRoute();
    console.log('route ---->', route.name);
    return(
        <View style={styles.barUpContainer}>
            <TouchableOpacity>
                <Icons icon={'backIcon'}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icons icon={'userIcon'}/>
            </TouchableOpacity>
        </View>
    );
}

export default BarUp;