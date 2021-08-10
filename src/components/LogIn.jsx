import React, { useContext } from 'react';
import { Text, TextInput, View, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import AppContext from '../context/AppContext';
import Icons from './Icons';

const LogIn = () => {
	const { 
		state,
		setPassword, 
		setEmail, 
		setHidePass,
		setPasswordRequired,
		setEmailRequired
	} = useContext(AppContext);

	let { emailRequired, passwordRequired, hidePass, email, password } = state;
	const emailValidator = (mail) => {
		mail === '' ? setEmailRequired(true) : setEmailRequired(false);
	}
	const passwordValidator = (pass) => {
		pass === '' ? setPasswordRequired(true) : setPasswordRequired(false);
	}
 	return (
		<View style={styles.loginContent}>
			<TextInput
				style={styles.textInput}
				placeholder="Correo o usuario"
				keyboardType="email-address"
				autoCompleteType={'email'}
				onBlur={() => emailValidator(email)}
				autoCapitalize={"none"}
				value={email}
				onChangeText={(email) => setEmail(email)}
				placeholderTextColor="#A8A7A7"
				selectionColor={'#FF0036'}
				autoFocus={true}
			/>
			{	emailRequired ? 
				<Text style={styles.textRequiredInput}>Usuario requerido</Text> :
				null
			}
			
			<View style={styles.positionRelative}>
				<TextInput
					style={styles.textInput}
					autoCompleteType={'password'}
					placeholder="Contraseña"
					secureTextEntry={hidePass}
					onBlur={() => passwordValidator(password)}
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
				{
					passwordRequired ?
					<Text style={styles.textRequiredInput}>Contraseña requerida</Text> :
					null
				}
			</View>
		
			<View style={styles.lostPasswordLink}>
				<Text style={styles.textLostPassword}>Olvidé mi contraseña</Text>
			</View>
		</View>
	);
}

export default LogIn;