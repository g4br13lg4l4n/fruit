import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import styles from '../styles/styles';
import Icons from './Icons';

const TabNavigator = ({ navigation }) => {
    const route = useRoute();
    console.log(route.name);

    return (
        <View style={styles.tabNavigationContainer}>
            <TouchableOpacity 
                style={styles.tabNavigatorTouchable}
                onPress={() => navigation.navigate('Home')}>
                <Icons icon={'homeIcon'} />
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.tabNavigatorTouchable}
                onPress={() => navigation.navigate('Orders')}>
                <Icons icon={'checkIcon'} />
                <Text>Pedidos</Text>
            </TouchableOpacity>
            <View style={styles.circleBasketContainer}>
                <TouchableOpacity 
                    style={[styles.tabNavigatorTouchable, styles.basketButtom]}
                    onPress={() => navigation.navigate('Checkout')}>
                        <Icons icon={'basketIcon'} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={styles.tabNavigatorTouchable}
                onPress={() => navigation.navigate('Support')}>
                <Icons icon={'helpIcon'} />
                <Text>Soporte</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.tabNavigatorTouchable}
                onPress={() => navigation.navigate('More')}>
                <Icons icon={'settingsIcon'} />
                <Text>Mas</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TabNavigator;