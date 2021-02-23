import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [reduxThunk, logger];
const store = createStore(
  rootReducer,
  {
    auth: { authenticated: localStorage.getItem('token') },
  },
  applyMiddleware(...middlewares)
);

export default store;
