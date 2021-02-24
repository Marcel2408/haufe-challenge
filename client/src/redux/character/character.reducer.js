import {
  REQUEST_CHARACTERS_FAILED,
  REQUEST_CHARACTERS_PENDING,
  REQUEST_CHARACTERS_SUCCESS,
} from './character.types';

const INITIAL_STATE_CHARACTERS = {
  isPending: false,
  characters: [],
  error: '',
};

const charactersReducer = (state = INITIAL_STATE_CHARACTERS, action = {}) => {
  switch (action.type) {
    case REQUEST_CHARACTERS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_CHARACTERS_SUCCESS:
      return { ...state, characters: action.payload, isPending: false, error: '' };
    case REQUEST_CHARACTERS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};

export default charactersReducer;
