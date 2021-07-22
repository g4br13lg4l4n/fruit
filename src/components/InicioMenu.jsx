import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/styles';


const InicioMenu = () => {
    return (
        <View style={styles.containerInicioMenu}>
            <Text>Ingresar</Text>
            <Text>Registrar</Text>
        </View>
    )
}

export default InicioMenu;