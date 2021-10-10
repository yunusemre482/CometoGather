import * as actions from '../actionTypes/clubActionTypes';
import api from '../../api/';

export const getAllClubs = () => {
  console.log('getting clubs');
  return dispatch => {
    api
      .get(`/club/`)
      .then(res => {
        dispatch({
          type: actions.GET_ALL_CLUB,
          payload: res.data
        });
      })
      .catch(error => {
        console.log(error,"erroorr");
        dispatch({type: actions.GET_ALL_CLUB_ERROR, payload: error});
      });
  };
};
