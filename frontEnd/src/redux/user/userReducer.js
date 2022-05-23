import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILURE,
} from "./action";

const initialUserState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.data,
        error: null,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    case SIGN_IN_FAILURE:
    case SIGN_OUT_FAILURE:
    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.data,
      };
    default:
      return state;
  }
};
export default userReducer;
