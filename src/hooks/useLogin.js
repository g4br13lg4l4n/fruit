import { ToastAndroid } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import Params from '../utils/params';
import Api from '../utils/Api';

const useLogin = (navigation, email, password) => {
  const API = `${Params.dev.base}users/auth`;
  return new Promise((resolve, reject) => {
    Api.post(API, { email, password })
      .then(resp => {
        navigation.navigate('Home');
        navigation.dispatch(state => {
          const routes = state.routes.filter(r => r.name !== 'Inicio' && r.name !== 'LoadingScreen');
          return CommonActions.reset({
            ...state,
            routes,
            index: routes.length - 1,
          });
        });
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

export default useLogin;