import React, { useContext } from 'react';
import { View, TextInput } from 'react-native';
import styles from '../styles/styles';
import AppContext from '../context/AppContext';

const SingUp = () => {
	const { user, password, setPassword, setUser } = useContext(AppContext);
  return (
    <View style={styles.loginContent}>
			<TextInput
				style={styles.textInput}
				placeholder="Nombre completo"
				placeholderTextColor="#A8A7A7"
				autoCompleteType={'name'}
				selectionColor={'#FF0036'}
				dataDetectorTypes={'name'}
				autoFocus={true}
			/>
			<TextInput
				style={styles.textInput}
				placeholder="Teléfono"
				keyboardType="numeric"
				maxLength={10}
				autoCompleteType={'tel'}
				dataDetectorTypes={'phoneNumber'}
				placeholderTextColor="#A8A7A7"
				selectionColor={'#FF0036'}
			/>
			<TextInput
				style={styles.textInput}
				placeholder="Email"
				keyboardType="email-address"
				autoCompleteType={'email'}
				dataDetectorTypes={'email'}
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
      		<TextInput
				style={styles.textInput}
				placeholder="Confirmar contraseña"
				secureTextEntry={true}
				placeholderTextColor="#A8A7A7"
				selectionColor={'#FF0036'} 
			/>
		</View>
  );
}

export default SingUp;
