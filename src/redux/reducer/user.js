import {
  GET_USERS_FAILED,
  GET_USERS_REQUESTED,
  GET_USERS_SUCCESS,
  REMOVE_USERS_FAILED,
  REMOVE_USERS_REQUESTED,
  REMOVE_USERS_SUCCESS
} from "../types";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export default function customReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case REMOVE_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case REMOVE_USERS_SUCCESS:
      const newState = state.users.filter(item => item.id !== action.data)
      return {
        loading: false,
        users: newState
      }
    case REMOVE_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    default:
      return state;
  }
}
