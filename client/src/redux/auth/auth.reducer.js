import { AUTH_ERROR, AUTH_USER, DELETE_ERROR } from './auth.types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload, errorMessage: '' };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    case DELETE_ERROR:
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};
