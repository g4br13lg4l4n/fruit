import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const setInicioPage = payload => {
    setState({
      ...state,
      inicioPage: payload
    });
  }

  return {
    setInicioPage,
    state
  };
};

export default useInitialState;