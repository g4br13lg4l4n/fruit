import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';


const InicioMenu = ({ onPress }) => {
    return (
        <View style={styles.containerInicioMenu}>
            <TouchableOpacity onPress={onPress} style={styles.logInBtn}>
                <Text style={styles.logInBtnText}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress} style={styles.singUpBtn}>
                <Text style={styles.singUpBtnText}>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InicioMenu;