import { ToastAndroid } from 'react-native';
import Params from '../utils/params';
import Api from '../utils/Api';

const useLogin = (navigation, email, password) => {
  const API = `${Params.dev.base}users/auth`;
  Api.post(API, { email, password })
    .then(resp => {
      navigation.navigate('Home');
    })
    .catch(err => {
      if (err.status === 401) {
        ToastAndroid.show("Usuario o contraseña incorrecta", ToastAndroid.SHORT);
      } else {
        ToastAndroid.show("Error en servicio, por favor intente más tarde", ToastAndroid.LONG);
      }
    })
};

export default useLogin;