import React, { useReducer } from 'react';
// import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER,
  USER_PATH,
  PRIVACY_PATH,
  DONE_PATH,
  CHECK_BOX_1,
  CHECK_BOX_2
} from '../types';

const AuthState = props => {
  const initialState = {
    user: {},
    isAuthenticated: false,
    userPath: false,
    privacyPath: false,
    donePath: false,
    checkBox1: false,
    checkBox2: false
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check that the password contains at least one number, one lowercase letter, & one uppercase letter
  const checkOne = password => {
    var re = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])');

    if (re.test(password)) {
      return true;
    }

    return false;
  };

  // Check that password and password2 match
  const checkTwo = (password, password2) => {
    if (password === password2) {
      return true;
    }
    return false;
  };

  // Check the previous functions
  const checkThree = (password, password2) => {
    let data1 = false;
    let data2 = false;

    data1 = checkOne(password);
    data2 = checkTwo(password, password2);

    if (data1 && data2) {
      return true;
    }
    return false;
  };

  // Store the user's details in AuthState
  // I would ususally add a PUT req to this func to store the data in a real DB
  const registerUser = formData => {
    let data = formData;

    dispatch({
      type: REGISTER,
      payload: data
    });
  };

  // Update user path
  const updateUserPath = () => {
    dispatch({
      type: USER_PATH
    });
  };

  // Update privacy path
  const updatePrivacyPath = () => {
    dispatch({
      type: PRIVACY_PATH
    });
  };

  // Update done path
  const updateDonePath = () => {
    dispatch({
      type: DONE_PATH
    });
  };

  // Validate path
  // This func allows us to maintain the correct color in the Navbar's tabs
  const validatePath = path => {
    if (path === '/') {
      updateUserPath();
    }
    if (path === '/privacy') {
      updatePrivacyPath();
    }
    if (path === '/done') {
      updateDonePath();
    }
  };

  // Update checkBox1
  const updateCheckBox1 = () => {
    dispatch({
      type: CHECK_BOX_1
    });
  };

  // Update checkBox2
  const updateCheckBox2 = () => {
    dispatch({
      type: CHECK_BOX_2
    });
  };

  return (
    <AuthContext.Provider
      value={{
        checkOne,
        checkTwo,
        checkThree,
        registerUser,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        userPath: state.userPath,
        privacyPath: state.privacyPath,
        donePath: state.donePath,
        updateUserPath,
        updatePrivacyPath,
        updateDonePath,
        validatePath,
        checkBox1: state.checkBox1,
        updateCheckBox1,
        checkBox2: state.checkBox2,
        updateCheckBox2
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
