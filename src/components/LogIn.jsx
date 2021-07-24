import React from 'react';
import { Text, TextInput, View} from 'react-native';
import styles from '../styles/styles';

const LogIn = () => {
	return (
		<View style={styles.loginContent}>
			<TextInput
				style={styles.textInput}
				placeholder="Email o usuario"
				keyboardType="email-address"
				placeholderTextColor="#A8A7A7"
				selectionColor={'#FF0036'}
			/>
			<TextInput
				style={styles.textInput}
				placeholder="Contraseña"
				secureTextEntry={true}
				placeholderTextColor="#A8A7A7"
				selectionColor={'#FF0036'} 
			/>
			<View style={styles.lostPasswordLink}>
				<Text style={styles.textLostPassword}>Olvidé mi contraseña</Text>
			</View>
		</View>
	);
}

export default LogIn;