import * as actions from '../actionTypes/authActionTypes'
import api from '../../api/'
export const signUp = user => {
  return dispatch => {
    api
      .post(`/auth/signup`, user)
      .then(res => {
        
        dispatch({
          type: actions.SIGN_UP_SUCCESS,
          payload: res.data.json()
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({type: actions.SIGN_UP_ERROR, payload: error})
      });
  };
};

export const signIn = (email, password) => {
 
  return dispatch => {
    
    dispatch({type:actions.SIGN_IN_BEGINS})
    api
      .post(`/auth/signin`, {email, password})
      .then(res => {
        dispatch({
          type: actions.SIGN_IN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({type:actions.SIGN_IN_ERROR, payload: error});
      });
  };
};

export const signOut = () => {
  return dispatch => {
    dispatch({
      type:  actions.SIGN_OUT
    });
  };
};
