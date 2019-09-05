import {
  REGISTER,
  USER_PATH,
  PRIVACY_PATH,
  DONE_PATH,
  CHECK_BOX_1,
  CHECK_BOX_2
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        user: action.payload
      };

    case USER_PATH:
      return {
        ...state,
        userPath: true,
        privacyPath: false,
        donePath: false
      };

    case PRIVACY_PATH:
      return {
        ...state,
        userPath: false,
        privacyPath: true,
        donePath: false
      };

    case DONE_PATH:
      return {
        ...state,
        userPath: false,
        privacyPath: false,
        donePath: true
      };

    case CHECK_BOX_1:
      return {
        ...state,
        checkBox1: !state.checkBox1
      };

    case CHECK_BOX_2:
      return {
        ...state,
        checkBox2: !state.checkBox2
      };

    default:
      return state;
  }
};
