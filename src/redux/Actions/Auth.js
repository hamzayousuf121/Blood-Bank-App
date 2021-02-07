import {authState, Logout, authDonars} from '../types';
import * as Auth from '../../services/Auth';

export const Login = (email, password) => {
  return async (dispatch) => {
    dispatch({type: authState, payload: {loading: true}});
    try {
      const {user} = await Auth.signInWithEmailAndPassword(email, password);
      if (user?.uid) {
        const userData = await Auth.getUser(uid);
        console.log('userData', userData);
        dispatch({
          type: authState,
          payload: {isLogin: true, loading: false, user: userData?._data},
        });
      }
    } catch (error) {
      console.log('error---> ', error);
      dispatch({type: authState, payload: {loading: false}});
    }
  };
};
export const Register = (email, password, name) => {
  return async (dispatch) => {
    dispatch({type: authState, payload: {loading: true}});
    console.log(email, password, name, 'response---> ');
    try {
      const {user} = await Auth.createUserWithEmailAndPassword(email, password);
      console.log(user, "response");
      if (user?.uid) {
        const data = {name, email, id: user.uid};
        const userData = await Auth.createUser(user.uid, data);
        
        console.log('userData', userData);
        dispatch({type: authState, payload: {register: true, loading: false}});
      }

    } catch (error) {
      console.log('error---> ', error);
      dispatch({type: authState, payload: {loading: false}});
    }
  };
};


export const SignOut = () => {
  return async (dispatch) => {
    try {
      const response = await Auth.logOut();
      console.log('response---> ', response);
      dispatch({type: Logout});
    } catch (error) {
      console.log('error---> ', error);
      dispatch({type: Logout});
    }
  };
};

export const getDonars = () => {
  return async (dispatch) => {
    dispatch({type: authState, payload: {loading: true}});
    try {
      const response = await Auth.getDonars();
      if (response) {
        dispatch({type: authDonars, payload: {loading: false, donars: response}});
      }
    } catch (error) {
      console.log('error---> ', error);
      dispatch({type: authState, payload: {loading: false}});
    }
  };
};

export const addDonars = (uid, data) => {
  return async (dispatch) => {
    dispatch({type: authState, payload: {loading: true}});
    try {
      const response = await Auth.setDonars(uid, data);
      if (response) {
        dispatch({type: authState, payload: {loading: false}});
      }
    } catch (error) {
      console.log('error---> ', error);
      dispatch({type: authState, payload: {loading: false}});
    }
  };
};

export const getCurrentUser = (uid) => {
  return async (dispatch) => {
    dispatch({type: authState, payload: {appLoading: true}});
    try {
      const userData = await Auth.getUser(uid);
      console.log('userData', userData);
      dispatch({
        type: authState,
        payload: {isLogIn: true, appLoading: false, user: userData?._data},
      });
    } catch (error) {
      console.log('error---> ', error);
      dispatch({type: authState, payload: {appLoading: false}});
    }
  };
};
