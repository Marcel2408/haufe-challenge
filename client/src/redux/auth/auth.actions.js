import axios from 'axios';
import { AUTH_ERROR, AUTH_USER } from './auth.types';

export const signup = (formProps, redirect) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:4000/api/v1/user/signup', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    console.log(response.headers);
    redirect('/list');
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error.response.data.message });
  }
};

export const login = (formProps, redirect) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:4000/api/v1/user/login', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    redirect('/list');
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error.response.data.message });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: '',
  };
};
