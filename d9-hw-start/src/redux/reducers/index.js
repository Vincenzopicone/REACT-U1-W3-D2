import {
  IS_LOADING_OFF,
  IS_LOADING_ON,
  IS_ERROR,
  SET_ERROR_OFF,
  SET_ERROR_ON,
} from "../actions";

const initialState = {
  loading: false,
  error: false,
  msgError: "",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_ON:
      return { ...state, loading: true };
    case IS_LOADING_OFF:
      return { ...state, loading: false };
    case IS_ERROR:
      return { ...state, msgError: action.payload };
    case SET_ERROR_ON:
      return { ...state, error: true };
    case SET_ERROR_OFF:
      return { ...state, error: false };

    default:
      return state;
  }
};

export default appReducer;
