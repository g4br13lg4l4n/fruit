import { ToastAndroid } from 'react-native';
import Params from '../utils/params';
import Api from '../utils/Api';

const useSingUp = (navigation, form) => {
  const API = `${Params.dev.base}users/auth`;
  Api.post(API, form)
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

export default useSingUp;