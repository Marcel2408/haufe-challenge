import axios from 'axios';
import {
  UPDATE_MYLIST_PENDING,
  UPDATE_MYLIST_SUCCESS,
  UPDATE_MYLIST_FAILED,
  GET_USER_MYLIST_PENDING,
  GET_USER_MYLIST_SUCCESS,
  GET_USER_MYLIST_FAILED,
  MAP_USER_MYLIST,
} from './user.types';

export const updateMylist = (auth, mylist, characterId) => async (dispatch) => {
  const updatedMylist = mylist.includes(characterId)
    ? mylist.filter((id) => characterId !== id)
    : [...mylist, characterId];
  try {
    dispatch({ type: UPDATE_MYLIST_PENDING });
    const response = await axios.patch(
      'http://localhost:4000/api/v1/user',
      {
        data: {
          mylist: updatedMylist,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      }
    );
    dispatch({
      type: UPDATE_MYLIST_SUCCESS,
      payload: response.data.data.user.mylist,
    });
  } catch (error) {
    dispatch({ type: UPDATE_MYLIST_FAILED, payload: error.response.data.message });
  }
};

export const mapUserMylist = (mylist) => {
  return {
    type: MAP_USER_MYLIST,
    payload: mylist,
  };
};

export const getUserMylist = (auth) => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_MYLIST_PENDING });
    const response = await axios.get('http://localhost:4000/api/v1/user', {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
    dispatch({
      type: GET_USER_MYLIST_SUCCESS,
      payload: response.data.data.user.mylist,
    });
  } catch (error) {
    dispatch({ type: GET_USER_MYLIST_FAILED, payload: error.response.data.message });
  }
};
