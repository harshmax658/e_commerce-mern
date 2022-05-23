export const SET_CURRENT_USER = "set_current_user";
export const GOOGLE_SIGN_IN_START = "GOOGLE_SIGN_IN_START";
export const EMAIL_SIGN_IN_START = "EMAIL_SIGN_IN_START";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";
export const IS_USER_AUTHENTICATE = "IS_USER_AUTHENTICATE";
export const SIGN_OUT_START = "SIGN_OUT_START";
export const SIGN_OUT_FAILURE = "SIGN_OUT_FAILURE";
export const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";
export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";

export const signUpStart = (data) => {
  return {
    type: SIGN_UP_START,
    data,
  };
};
export const signUpSuccess = (data) => {
  return {
    type: SIGN_UP_SUCCESS,
    data,
  };
};
export const signUpFailure = (data) => {
  return {
    type: SIGN_UP_FAILURE,
    data,
  };
};
export const signOutStart = () => {
  return {
    type: SIGN_OUT_START,
  };
};
export const signOutSuccess = () => {
  return {
    type: SIGN_OUT_SUCCESS,
  };
};
export const signOutFailure = (data) => {
  return {
    type: SIGN_OUT_FAILURE,
    data,
  };
};
export const setUser = (data) => {
  return {
    type: SET_CURRENT_USER,
    data,
  };
};
export const googleSignInStart = () => {
  return {
    type: GOOGLE_SIGN_IN_START,
  };
};
export const signInSuccess = (data) => {
  return {
    type: SIGN_IN_SUCCESS,
    data,
  };
};
export const signInfailure = (data) => {
  return {
    type: SIGN_IN_FAILURE,
    data,
  };
};
export const checkUsersSession = () => {
  return {
    type: IS_USER_AUTHENTICATE,
  };
};
export const emailSignInStart = (data) => {
  return {
    type: EMAIL_SIGN_IN_START,
    data,
  };
};
