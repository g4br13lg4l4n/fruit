import React, { useContext } from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import AppContext from '../context/AppContext';
import styles from '../styles/styles';

const InicioMenu = () => {
    const { state, setInicioPage } = useContext(AppContext);
    const { inicioPage } = state;

    const handleChangeInicio = option => () => {
        setInicioPage(option);
    };
    const btnStylesLogIn = inicioPage === 'LogIn' ? styles.inicioActiveBtn : styles.inicioDesableBtn;
    const btnStylesSingUp = inicioPage === 'SingUp' ? styles.inicioActiveBtn : styles.inicioDesableBtn;
    const textBtnStylesLogIn = inicioPage === 'LogIn' ? styles.inicioActiveBtnText : styles.inicioDesableBtnText;
    const textBtnStylesSingUp = inicioPage === 'SingUp' ? styles.inicioActiveBtnText : styles.inicioDesableBtnText;
    return (
        <View style={styles.containerInicioMenu}>
            <TouchableOpacity onPress={handleChangeInicio('LogIn')} style={btnStylesLogIn}>
                <Text style={textBtnStylesLogIn}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleChangeInicio('SingUp')} style={btnStylesSingUp}>
                <Text style={textBtnStylesSingUp}>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InicioMenu;