import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Inicio from '../containers/Inicio';
import Home from '../containers/Home';
import Product from '../containers/Product';
import Checkout from '../containers/Checkout';
import useInitalState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';

export default function NavigationRoutes() {
    const initialState = useInitalState();
    const isLogin = false;
    const Stack = createStackNavigator()
    const options = {
        screenOptions: {
            headerShown: false,
        },
        initialRouteName: isLogin ? "Home" : "Inicio"
    }
    return (
        <AppContext.Provider value={initialState}>
            <NavigationContainer>
                <Stack.Navigator {...options}>
                    <Stack.Screen name="Inicio" component={Inicio} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Product" component={Product} />
                    <Stack.Screen name="Checkout" component={Checkout} />
                </Stack.Navigator>
            </NavigationContainer>
        </AppContext.Provider>
    )
}