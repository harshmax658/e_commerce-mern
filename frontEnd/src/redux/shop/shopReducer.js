// import ShopData from "./ShopData";
import { FETCH_COLLECTION_SUCCESS, FETCH_COLLECTION_FAILURE } from "./action";

const initial_state = {
  collection: null,
  isLoading: true,
  error: null,
};

const shopReducer = (state = initial_state, action) => {
  switch (action.type) {
    case FETCH_COLLECTION_SUCCESS: {
      return {
        ...state,
        collection: action.data,
        isLoading: false,
      };
    }
    case FETCH_COLLECTION_FAILURE: {
      return {
        ...state,
        error: action.data,
      };
    }

    default:
      return state;
  }
};

export default shopReducer;
