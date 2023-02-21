import { SAVE_JOB, SEARCH_JOB } from "../actions";

const initialState = {
  job: [],
  search: null,
};

const saveReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_JOB:
      return { ...state, job: action.payload };
    case SEARCH_JOB:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default saveReducer;
