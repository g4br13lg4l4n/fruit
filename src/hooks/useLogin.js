import { useState, useEffect } from 'react';
import Params from '../utils/params';
import Api from '../utils/Api';

const useLogin = credentials => {
  const [map, setMap] = useState({});
  const API = `${Params.dev.base}users/auth`;

  useEffect(async () => {
    const json = await Api.post(API, credentials);
    console.log('json ----->', json);
    setMap(json);
  }, []);
  return map;
};

export default useLogin;