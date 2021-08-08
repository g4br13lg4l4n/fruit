import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import styles from '../styles/styles';
import Icons from './Icons';

const TabNavigator = ({ navigation }) => {
    const route = useRoute();
    return (
        <View style={styles.tabNavigationContainer}>
            <TouchableOpacity 
                style={styles.tabNavigatorTouchable}
                onPress={() => navigation.navigate('Home')}>
                <Icons icon={route.name === 'Home' ? 'homeActiveIcon': 'homeIcon'} />
                <Text style={route.name === 'Home' ? styles.tabNavigatorActiveText : styles.tabNavigatorDesableText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.tabNavigatorTouchable}
                onPress={() => navigation.navigate('Orders')}>
                <Icons icon={route.name === 'Orders' ? 'checkActiveIcon' :'checkIcon'} />
                <Text style={route.name === 'Orders' ? styles.tabNavigatorActiveText : styles.tabNavigatorDesableText}>Pedidos</Text>
            </TouchableOpacity>
            <View style={styles.circleBasketContainer}>
                <TouchableOpacity 
                    style={[styles.tabNavigatorTouchable, styles.basketButtom]}
                    onPress={() => navigation.navigate('Checkout')}>
                        <Icons icon={'basketIcon'} w={40} h={40} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={styles.tabNavigatorTouchable}
                onPress={() => navigation.navigate('Support')}>
                <Icons icon={route.name === 'Support' ? 'helpActiveIcon' : 'helpIcon'} />
                <Text style={route.name === 'Support' ? styles.tabNavigatorActiveText : styles.tabNavigatorDesableText}>Soporte</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.tabNavigatorTouchable}
                onPress={() => navigation.navigate('More')}>
                <Icons icon={route.name === 'More' ? 'settingsActiveIcon' : 'settingsIcon'} />
                <Text style={route.name === 'More' ? styles.tabNavigatorActiveText : styles.tabNavigatorDesableText}>Mas</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TabNavigator;