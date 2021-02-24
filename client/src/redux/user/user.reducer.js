import {
  UPDATE_MYLIST_PENDING,
  UPDATE_MYLIST_SUCCESS,
  UPDATE_MYLIST_FAILED,
  GET_USER_MYLIST_PENDING,
  GET_USER_MYLIST_SUCCESS,
  GET_USER_MYLIST_FAILED,
  MAP_USER_MYLIST,
} from './user.types';

const INITIAL_STATE_USER = {
  isPending: false,
  mylist: [],
  error: '',
};

const userReducer = (state = INITIAL_STATE_USER, action = {}) => {
  switch (action.type) {
    case UPDATE_MYLIST_PENDING:
    case GET_USER_MYLIST_PENDING:
      return { ...state, isPending: true };
    case UPDATE_MYLIST_SUCCESS:
    case GET_USER_MYLIST_SUCCESS:
    case MAP_USER_MYLIST:
      return { ...state, mylist: action.payload, isPending: false, error: '' };
    case UPDATE_MYLIST_FAILED:
    case GET_USER_MYLIST_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};

export default userReducer;
