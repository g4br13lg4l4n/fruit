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

  const filterProducts = word => {
    setState({
      ...state,
      inputFind: word, 
      productsFiltered: state.products.filter(product => product.title.toLowerCase().includes(word.toLowerCase()))
    });
  } 

  return {
    setInicioPage,
    filterProducts,
    state
  };
};

export default useInitialState;