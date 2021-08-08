import React, { useContext } from 'react';
import { View, TextInput } from 'react-native';
import styles from '../styles/styles';
import AppContext from '../context/AppContext';

const SingUp = () => {
	const { 
		email,
		setEmail,
		password, 
		setPassword,
		name,
		setName,
		phone,
		setPhone
	} = useContext(AppContext);
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
				placeholder="Email"
				autoCapitalize={"none"}
				keyboardType="email-address"
				autoCompleteType={'email'}
				placeholderTextColor="#A8A7A7"
				selectionColor={'#FF0036'}
				value={email}
				onChangeText={(email) => setEmail(email)}
			/>
			<TextInput
				style={styles.textInput}
				placeholder="Contraseña"
				secureTextEntry={true}
				placeholderTextColor="#A8A7A7"
				selectionColor={'#FF0036'}
				value={password}
				onChangeText={(password) => setPassword(password)}
			/>
		</View>
	);
}

export default SingUp;
