const INITIAL_STATE = {
  clubs: [],
  selected: {},
  top_clubs: [],
  error: '',
};
import {
  GET_ALL_CLUB,
  GET_ONE_CLUB,
  DEL_CLUB,
  ADD_NEW_CLUB,
  ADD_USER_TO_CLUB,
  DEL_USER_FROM_CLUB,
  GET_ALL_CLUB_ERROR,
  GET_ONE_CLUB_ERROR,
  ADD_NEW_CLUB_ERROR,
  DEL_CLUB_ERROR,
  ADD_USER_TO_CLUB_ERROR,
} from '../actionTypes/clubActionTypes';

const clubReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_CLUB:
      return {
        ...state,
        clubs: action.payload.clubs,
      };
      break;
    case GET_ONE_CLUB:
      return {
        ...state,
        selected: action.payload.club,
      };
      break;
    case ADD_NEW_CLUB:
      return {
        ...state,
        club: action.payload.club,
      };
      break;
    default:
      return state;
  }
};

export default clubReducer;
