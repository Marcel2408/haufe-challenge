import axios from 'axios';
import {
  REQUEST_CHARACTERS_FAILED,
  REQUEST_CHARACTERS_PENDING,
  REQUEST_CHARACTERS_SUCCESS,
} from './character.types';

const requestCharacters = (auth) => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_CHARACTERS_PENDING });
    const response = await axios.get('http://localhost:4000/api/v1/character', {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
    console.log(response.data);
    dispatch({ type: REQUEST_CHARACTERS_SUCCESS, payload: response.data.data.characters });
  } catch (error) {
    dispatch({ type: REQUEST_CHARACTERS_FAILED, payload: error.response.data.message });
  }
};

export default requestCharacters;
