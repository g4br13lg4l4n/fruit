import React, { useState } from 'react';
import { Text, View, SafeAreaView, Image, ImageBackground } from 'react-native';
import CustomButton from '../components/CustomButton';
import styles from '../styles/styles';
import LogIn from './LogIn';
import SingUp from './SingUp';
import InicioMenu from '../components/InicioMenu';

const Inicio = ({ navigation }) => {
	const [text, setText] = useState('');
	return (
        <View style={styles.container}>
			<ImageBackground source={require('../../assets/background_2.png')} style={styles.image}>
				<Text style={styles.title}>Fruits & Vegetables</Text>
				<SafeAreaView style={styles.loginWrapper}>
                    <View style={styles.loginContent}>
                        <InicioMenu />
                    </View>
                    <View style={styles.loginContent}>
                        <LogIn />
                    </View>

					<View style={styles.loginContent}>
						<CustomButton
							onPress={() => navigation.navigate('Home')}
							title='Ingresar'
							styleButton={styles.redButton}
							styleText={styles.redButtonText}
						/>
					</View>
					<View style={{ alignItems: 'center' }}>
						<Text style={{ color: '#A8A7A7' }}>O</Text>
					</View>
					<View style={styles.loginSocialMedia}>
						<Image
							source={require('../../assets/face.png')}
						/>
						<Image
							source={require('../../assets/tw.png')}
						/>
						<Image
							source={require('../../assets/google.png')}
						/>
					</View>

				</SafeAreaView>
			</ImageBackground>
		</View>
    )
}

export default Inicio;