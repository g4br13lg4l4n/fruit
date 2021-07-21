import React from 'react';
import { StatusBar } from 'react-native';
import NavigationRoutes from './src/routers/index';

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationRoutes />
    </>
  );
}