import session from '../../http/session';

export const LOGIN_FETCH = 'LOGIN_FETCH';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNOUT = 'SIGNOUT';

export function submitLogin(values, event, formApi) {
  return (dispatch) => {
    dispatch({ 
      type: LOGIN_FETCH,
    });
    return session.login(values.email, values.password)
    .then(response => {
      dispatch({ 
        type: LOGIN_SUCCESS,
        payload: response.data
      });
    })
    .catch(e => {
      console.log(e);
      dispatch({ 
        type: LOGIN_ERROR, 
        payload: e 
      });
    })
  }
}

export function submitSignout() {
  return (dispatch) => {
    dispatch({ 
      type: SIGNOUT
    });
  }  
}

const sessionActions = {
  submitLogin,
  submitSignout
};

export default sessionActions;