import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Inicio from '../containers/Inicio';
import Home from '../containers/Home';
import Product from '../containers/Product';
import Checkout from '../containers/Checkout';

export default function NavigationRoutes() {
    const isLogin = false;
    const Stack = createStackNavigator()
    const options = {
      screenOptions : {
        headerShown:false,
      },
      initialRouteName: isLogin ? "Home" : "LogIn"
    }
  
    return (
      <NavigationContainer>
        <Stack.Navigator {...options}>
          <Stack.Screen name="Inicio" component={Inicio}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Product" component={Product}/> 
          <Stack.Screen name="Checkout" component={Checkout}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }