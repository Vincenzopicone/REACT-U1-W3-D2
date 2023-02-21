/// ACTION

export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_TO_FAV = "REMOVE_TO_FAV";
export const SAVE_JOB = "SAVE_JOB";
export const SEARCH_JOB = "SEARCH_JOB";
export const IS_LOADING_ON = "IS_LOADING_ON";
export const IS_LOADING_OFF = "IS_LOADING_OFF";
export const IS_ERROR = "IS_ERROR";
export const SET_ERROR_ON = "SET_ERROR_ON";
export const SET_ERROR_OFF = "SET_ERROR_OFF";

/// DISPATCH

export const addToFav = (element) => ({
  type: ADD_TO_FAV,
  payload: element,
});

export const removeToFav = (element) => ({
  type: REMOVE_TO_FAV,
  payload: element,
});

/// FETCH

export const getJobs = (props) => {
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  return async (dispatch) => {
    try {
      dispatch({ type: IS_LOADING_ON });
      dispatch({ type: SET_ERROR_OFF });
      const response = await fetch(baseEndpoint + props + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: SAVE_JOB, payload: data });
        dispatch({ type: IS_LOADING_OFF });
        dispatch({ type: SET_ERROR_OFF });
      } else {
        dispatch({ type: SET_ERROR_ON });
        dispatch({
          type: IS_ERROR,
          payload: "Errore nel caricamento dei risultati",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: IS_LOADING_OFF });
    }
  };
};
