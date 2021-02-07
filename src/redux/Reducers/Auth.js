import {authState, Logout, authDonars} from '../types';

const initalState = {
  login: false,
  register: false,
  loading: false,
  isLogIn: false,
  user: '',
  appLoading: true,
  donars: ''
};

export default (state = initalState, action) => {
  switch (action.type) {
    case authState:
      return {...state, ...action.payload};
    case Logout:
      return initalState;
      case authDonars:
        console.log(action.payload, 'Calling Auth Donrs')
        return {...state, loading: action.payload.loading, donars: action.payload.donars}
    default:
      return state;
  }
};
