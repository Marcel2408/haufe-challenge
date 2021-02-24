import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './root-reducer';

const middlewares = [reduxThunk];
const store = createStore(
  rootReducer,
  {
    auth: { authenticated: localStorage.getItem('token') },
  },
  applyMiddleware(...middlewares)
);

export default store;
