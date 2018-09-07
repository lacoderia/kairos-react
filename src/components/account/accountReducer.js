import { fromJS } from 'immutable';
import {
  ACCOUNT_UPDATE_FETCH,
  ACCOUNT_UPDATE_SUCCESS,
  ACCOUNT_UPDATE_ERROR,
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from './accountActions';

const initialState = fromJS({
  loading: false,
  error: '',
  dialog: '',
});

function accountReducer(state = initialState, action) {
  switch(action.type){
    case ACCOUNT_UPDATE_FETCH: 
      return state.merge({
        loading: true,
        error: '',
      })
    case ACCOUNT_UPDATE_SUCCESS: 
      return state.merge({
        loading: false,
        dialog: initialState.get('dialog'),
      })
    case ACCOUNT_UPDATE_ERROR: 
      return state.merge({
        loading: false,
        error: action.payload,
      })
    case OPEN_DIALOG:
      return state.merge({
        loading: initialState.get('loading'),
        error: initialState.get('error'),
        dialog: action.payload,
      })
    case CLOSE_DIALOG:
      return state.merge({
        loading: initialState.get('loading'),
        error: initialState.get('error'),
        dialog: initialState.get('dialog'),
      })
    default:
      return state;
  }
}

export default accountReducer;
