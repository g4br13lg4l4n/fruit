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
        switch (err.status) {
          case 401:
            ToastAndroid.show("Usuario o contraseña incorrecta", ToastAndroid.SHORT);
            break;
          case 409:
            err.json().then(res => {
              if(res.error.code === 11000) {
                Object.entries(res.error.keyValue).forEach((el, ky) => {
                  const message = `El ${el[ky]} ${res.error.keyValue[el[ky]]} ya es utilizado`
                  ToastAndroid.show(message, ToastAndroid.SHORT);
                });
              } else {
                Object.entries(res.error).forEach((element, key) => {
                  ToastAndroid.show(res.error[element[key]].message, ToastAndroid.SHORT);
                })
              }
            })
            .catch(errr => {})
            break;
          default:
            ToastAndroid.show("Error en servicio, por favor intente más tarde", ToastAndroid.LONG);
            break;
        }
        reject(err);
      })
  });
};

export default useSingUp;