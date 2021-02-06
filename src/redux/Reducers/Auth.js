import {authState, Logout} from '../types';

const initalState = {
  login: false,
  register: false,
  loading: false,
  isLogIn: false,
  user: '',
  appLoading: true
};

export default (state = initalState, action) => {
  switch (action.type) {
    case authState:
      return {...state, ...action.payload};
    case Logout:
      return initalState;
    default:
      return state;
  }
};
