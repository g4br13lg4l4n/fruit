import { useState, useEffect } from 'react';

const useLogin = data => {
  const [map, setMap] = useState({});
  const API = ``;

  useEffect(async () => {
    const response = await fetch(API)
    const json = await response.json();
    setMap(json.data);
  }, []);
  return map;
};

export default useLogin;