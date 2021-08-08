import React, { useContext } from 'react';
import { Text, TextInput, View} from 'react-native';
import styles from '../styles/styles';
import AppContext from '../context/AppContext';

const LogIn = () => {
	const { email, password, setPassword, setEmail } = useContext(AppContext);
	return (
		<View style={styles.loginContent}>
			<TextInput
				style={styles.textInput}
				placeholder="Correo o usuario"
				keyboardType="email-address"
				autoCompleteType={'email'}
				autoCapitalize={"none"}
				value={email}
				onChangeText={(email) => setEmail(email)}
				placeholderTextColor="#A8A7A7"
				selectionColor={'#FF0036'}
				autoFocus={true}
			/>
			<TextInput
				style={styles.textInput}
				autoCompleteType={'password'}
				placeholder="Contraseña"
				secureTextEntry={true}
				value={password}
				onChangeText={(password) => setPassword(password)}
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