import axios from 'axios';
import { AUTH_ERROR, AUTH_USER } from './types';

export const signup = (formProps, redirect) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:4000/api/v1/user/signup', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    dispatch({ type: AUTH_ERROR, payload: '' });
    console.log(response);
    localStorage.setItem('token', response.data.token);
    redirect('/feature');
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error.response.data.message });
  }
};

export const signin = (formProps, redirect) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:4000/api/v1/user/login', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    dispatch({ type: AUTH_ERROR, payload: '' });
    localStorage.setItem('token', response.data.token);
    redirect('/feature');
  } catch (error) {
    console.log(error.response.data);
    dispatch({ type: AUTH_ERROR, payload: error.response.data.message });
  }
};

export const signout = () => {
  console.log('hello from signout action');
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: '',
  };
};
