import { REMOVE_TO_FAV, ADD_TO_FAV } from "../actions";

const initialState = {
  favourites: {
    content: [],
  },
};

const memoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };

    case REMOVE_TO_FAV:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter(
            (_, i) => i !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};

export default memoryReducer;
