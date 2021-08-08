import { ToastAndroid } from 'react-native';
import Params from '../utils/params';
import Api from '../utils/Api';
import resetRouter from './resetRouter';

const useSingUp = (navigation, form) => {
  const API = `${Params.dev.base}users/signup`;
  return new Promise((resolve, reject) => {
    Api.post(API, form)
      .then(resp => {
        resetRouter(navigation, 'Home');
        resolve(resp);
      })
      .catch(err => {
        if (err.status === 401) {
          ToastAndroid.show("Usuario o contraseña incorrecta", ToastAndroid.SHORT);
        } else {
          ToastAndroid.show("Error en servicio, por favor intente más tarde", ToastAndroid.LONG);
        }
        reject(err);
      })
  });
};

export default useSingUp;