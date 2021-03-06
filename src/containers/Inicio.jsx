import React, { useContext } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import CustomButton from '../components/CustomButton';
import styles from '../styles/styles';
import LogIn from '../components/LogIn';
import SingUp from '../components/SingUp';
import AppContext from '../context/AppContext';
import InicioMenu from '../components/InicioMenu';
import Icons from '../components/Icons';
import useLogin from '../hooks/useLogin';
import StoreData from '../utils/StoreData';
import useSingUp from '../hooks/useSingUp';

const Inicio = ({ navigation }) => {
	const { state } = useContext(AppContext);
    const { inicioPage, email, password, name, phone } = state;
	
	const login = () => {
		useLogin(navigation, email, password)
		.then(resp => {
			StoreData.setToken(resp.token);
		})
		.catch(err =>{});
	}
	const register = () => {
		useSingUp(navigation, { email, password, name, phone })
		.then(resp => {
			StoreData.setToken(resp.token);
		})
		.catch(err => {})
	}


	const foot = (page) => {
		if(page === 'LogIn') {
			return (
				<View>
					<View style={{ alignItems: 'center' }}>
					<Text style={{ color: '#A8A7A7' }}>O</Text>
				</View>
				<View style={styles.loginSocialMedia}>
					<Icons icon={'facebookIcon'} w={50} h={50}/>
					<Icons icon={'twIcon'} w={50} h={50}/>
					<Icons icon={'googleIcon'} w={50} h={50}/>
				</View>
				</View>
			)
		}
	}
	return (
        <View style={styles.container}>
			<ImageBackground source={require('../../assets/background_2.png')} style={styles.image}>
				<Text style={styles.title}>Fruits & Vegetables</Text>
				<View style={styles.loginWrapper}>
                    <View style={styles.loginContent}>
                        <InicioMenu />
                    </View>
                    <View style={styles.loginContent}>
						{ inicioPage === 'LogIn' ? <LogIn /> : <SingUp />}    
                    </View>

					<View style={styles.loginContent}>
						<CustomButton
							onPress={
								inicioPage === 'LogIn' ? 
								() => login() : 
								() => register()
							}
							title={inicioPage === 'LogIn' ? 'Ingresar' : 'Registrar'}
							styleButton={styles.redButton}
							styleText={styles.redButtonText}
						/>
					</View>
					{ foot(inicioPage) }
				</View>
			</ImageBackground>
		</View>
    )
}

export default Inicio;