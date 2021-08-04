import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Inicio from '../containers/Inicio';
import Home from '../containers/Home';
import Orders from '../containers/Orders';
import Support from '../containers/Support';
import More from '../containers/More';
import Product from '../containers/Product';
import Checkout from '../containers/Checkout';
import useInitalState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';
import LoadingScreen from '../containers/LoadingScreen';

export default function NavigationRoutes({ screen }) {
    const initialState = useInitalState();
    const Stack = createStackNavigator();
    const options = {
        screenOptions: {
            headerShown: false,
        },
        initialRouteName: 'LoadingScreen'
    }
    return (
        <AppContext.Provider value={initialState}>
            <NavigationContainer>
                <Stack.Navigator {...options}>
                    <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
                    <Stack.Screen name="Inicio" component={Inicio} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Orders" component={Orders} />
                    <Stack.Screen name="Checkout" component={Checkout} />
                    <Stack.Screen name="Product" component={Product} />
                    <Stack.Screen name="Support" component={Support} />
                    <Stack.Screen name="More" component={More} />
                </Stack.Navigator>
            </NavigationContainer>
        </AppContext.Provider>
    )
}