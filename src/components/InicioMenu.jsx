import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import AppContext from '../context/AppContext';
import styles from '../styles/styles';


const InicioMenu = () => {
    const { state, setInicioPage } = useContext(AppContext);
    const { inicioPage } = state;

    const handleChangeInicio = option => () => {
        setInicioPage(option);
    };
    return (
        <View style={styles.containerInicioMenu}>
            <TouchableOpacity onPress={handleChangeInicio('LogIn')} style={styles.logInBtn}>
                <Text style={styles.logInBtnText}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleChangeInicio('SingUp')} style={styles.singUpBtn}>
                <Text style={styles.singUpBtnText}>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InicioMenu;