import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';
import Icons from './Icons';
import {useRoute} from '@react-navigation/native';


const BarUp = ({ title }) => {
    const route = useRoute();
    return(
        <View style={styles.barUpContainer}>
            <TouchableOpacity>
                <Icons icon={'backIcon'}/>
            </TouchableOpacity>
            {title ? <Text style={styles.barUpTitle}> { title } </Text> : null}
            <TouchableOpacity>
            {
                /** 
                 * <Icons icon={'userIcon'}/>
                */
            }
            </TouchableOpacity>
        </View>
    );
}

export default BarUp;