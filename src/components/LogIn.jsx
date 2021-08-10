import React, { useContext } from 'react';
import { Text, TextInput, View, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import AppContext from '../context/AppContext';
import Icons from './Icons';

const LogIn = () => {
	const { state, email, password, setPassword, setEmail, setHidePass } = useContext(AppContext);
	let { hidePass } = state;
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
			<View style={{ position: 'relative' }}>
				<TextInput
					style={styles.textInput}
					autoCompleteType={'password'}
					placeholder="Contraseña"
					secureTextEntry={hidePass}
					value={password}
					onChangeText={(password) => setPassword(password)}
					placeholderTextColor="#A8A7A7"
					selectionColor={'#FF0036'}
				/>
				<TouchableOpacity
					style={styles.eyePassword} 
					onPress={() => setHidePass(!hidePass)}>
					<Icons
						icon={hidePass ? 'closeEyeIcon' : 'openEyeIcon'}
					/>
				</TouchableOpacity>
			</View>
		
			<View style={styles.lostPasswordLink}>
				<Text style={styles.textLostPassword}>Olvidé mi contraseña</Text>
			</View>
		</View>
	);
}

export default LogIn;