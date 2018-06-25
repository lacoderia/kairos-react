import { fromJS } from 'immutable';
import {
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
} from './sessionActions';

const initialState = fromJS({
  isAuthenticated: false,
  user: {}
});

function sessionReducer(state = initialState, action) {
  switch(action.type){
    case LOGIN_SUCCESS:
      return state.merge({
        isAuthenticated: true,
        user: action.payload.user,
      })
    case SIGNOUT_SUCCESS:
    return state.merge({
      isAuthenticated: false,
      user: {},
    })
    default:
      return state;
  }
}

export default sessionReducer;
