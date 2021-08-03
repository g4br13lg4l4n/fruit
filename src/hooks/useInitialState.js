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

  const setIsLogin = isLogin => {
    setState({
      ...state,
      isLogin
    });
  }

  const filterProducts = word => {
    setState({
      ...state,
      inputFind: word, 
      productsFiltered: state.products.filter(product => product.title.toLowerCase().includes(word.toLowerCase()))
    });
  } 

  const setPassword = password => {
    setState({
      ...state,
      password,
    });
  } 

  const setEmail = email => {
    setState({
      ...state,
      email
    });
  }

  const setName = name => {
    setState({
      ...state,
      name
    });
  }

  const setPhone = phone => {
    setState({
      ...state,
      phone
    })
  }

  return {
    setInicioPage,
    filterProducts,
    setIsLogin,
    setPassword,
    setEmail,
    setName,
    setPhone,
    state
  };
};

export default useInitialState;