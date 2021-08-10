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
    const flag = !password || password.length === 0 ? true : false;
    setState({
      ...state,
      password,
      passwordRequired: flag
    });
  } 

  const setEmail = email => {
    const flag = !email || email.length === 0 ? true : false;
    setState({
      ...state,
      email,
      emailRequired: flag
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
    });
  }

  const setCategory = category => {
    setState({
      ...state,
      category
    });
  }

  const setHidePass = hidePass => {
    setState({
      ...state,
      hidePass
    });
  }

  const setEmailRequired = emailRequired => {
    setState({
      ...state,
      emailRequired
    })
  }

  const setPasswordRequired = passwordRequired => {
    setState({
      ...state,
      passwordRequired
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
    setCategory,
    setHidePass,
    setEmailRequired,
    setPasswordRequired,
    state
  };
};

export default useInitialState;