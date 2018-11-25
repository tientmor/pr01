import { AUTH_LOGIN, AUTH_CHECK } from '../constants/actionTypes';
import initialState from './initialState';

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        user: action.user,
        authenticated: true
      };
    case AUTH_CHECK:
      return {
        ...state,
        user: action.user,
        authenticated: true
      };
    default:
      return { ...state };
  }
};
