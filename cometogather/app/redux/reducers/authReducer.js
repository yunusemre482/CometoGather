
import AsyncStorage from '@react-native-community/async-storage';
const INITIAL_STATE={
  isLoggedIn:false,
  isLoading:false,
  user:{},
  error:''
}
import {
  SIGN_IN_BEGINS,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,

  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,

  SIGN_OUT,
} from '../actionTypes/authActionTypes'

const authReducer=(state=INITIAL_STATE,action)=>{
  switch (action.type) {
    case SIGN_IN_BEGINS : return {
      ...state,
      isLoading: true,
    }
    break;

    case SIGN_IN_SUCCESS: 
    AsyncStorage.setItem('token', action.token); //save the token
    return {
      ...state,
      isloading:false,
      isLoggedIn:true,
      user:action.payload.user
    }
    break;
    case SIGN_IN_ERROR: return {
      ...state,
      isloading:false,
      isLoggedIn:false,
      error:action.payload.error
    }
    break;
    case SIGN_UP_SUCCESS: return {
      ...state,
      user:action.payload.user,
      isLoggedIn:true,
    }
    case SIGN_UP_ERROR: return {
      ...state,
      error:action.payload,
    }
    break;
    case SIGN_OUT: 
      AsyncStorage.removeItem('token'); //clear token on device
    return {
      ...state,
      isLoggedIn:false,
    }
    default:
      return state
  }
}

export default authReducer;