import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';
import Icons from './Icons';
import { CommonActions } from '@react-navigation/native';


const BarUp = ({navigation, title }) => {
    const goBack = () => {
        navigation.dispatch(CommonActions.goBack());
    }
    return (
        <View style={styles.barUpContainer}>
            <TouchableOpacity onPress={() => goBack()}>
                <Icons icon={'backIcon'} />
            </TouchableOpacity>
            {title ? <Text style={styles.barUpTitle}> {title} </Text> : null}
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