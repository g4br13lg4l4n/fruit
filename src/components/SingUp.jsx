import React, { useContext } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import AppContext from '../context/AppContext';
import Icons from './Icons';

const SingUp = () => {
	const { 
		state,
		email,
		setEmail,
		password, 
		setPassword,
		name,
		setName,
		phone,
		setPhone,
		setHidePass
	} = useContext(AppContext);

	let { hidePass } = state;
	return (
		<View style={styles.loginContent}>
			<TextInput
				style={styles.textInput}
				placeholder="Nombre completo"
				placeholderTextColor="#A8A7A7"
				autoCompleteType={'name'}
				selectionColor={'#FF0036'}
				autoFocus={true}
				value={name}
				onChangeText={(name) => setName(name)}
			/>
			<TextInput
				style={styles.textInput}
				placeholder="Teléfono"
				keyboardType="numeric"
				maxLength={10}
				autoCompleteType={'tel'}
				placeholderTextColor="#A8A7A7"
				selectionColor={'#FF0036'}
				value={phone}
				onChangeText={(phone) => setPhone(phone)}
			/>
			<TextInput
				style={styles.textInput}
				placeholder="Correo electrónico"
				autoCapitalize={"none"}
				keyboardType="email-address"
				autoCompleteType={'email'}
				placeholderTextColor="#A8A7A7"
				selectionColor={'#FF0036'}
				value={email}
				onChangeText={(email) => setEmail(email)}
			/>
			<View style={styles.positionRelative}>
				<TextInput
					style={styles.textInput}
					placeholder="Contraseña"
					secureTextEntry={hidePass}
					placeholderTextColor="#A8A7A7"
					selectionColor={'#FF0036'}
					value={password}
					onChangeText={(password) => setPassword(password)}
				/>
				<TouchableOpacity
					style={styles.eyePassword} 
					onPress={() => setHidePass(!hidePass)}>
					<Icons
						icon={hidePass ? 'closeEyeIcon' : 'openEyeIcon'}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default SingUp;
