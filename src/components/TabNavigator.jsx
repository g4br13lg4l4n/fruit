import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import styles from '../styles/styles';
import Icons from './Icons';

const TabNavigator = ({ }) => {
    const route = useRoute();
    console.log(route.name);
    return (
        <View style={styles.tabNavigationContainer}>
            <TouchableOpacity style={styles.tabNavigatorTouchable}>
                <Icons icon={'homeIcon'} />
                <Text>Productos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabNavigatorTouchable}>
            <   Icons icon={'checkIcon'} />
                <Text>Pedidos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabNavigatorTouchable}>
                <Icons icon={'searchIcon'} />
                <Text>Buscar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabNavigatorTouchable}>
                <Icons icon={'settingsIcon'} />
                <Text>Mas</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TabNavigator;