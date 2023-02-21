/// ACTION

export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_TO_FAV = "REMOVE_TO_FAV";
export const SAVE_JOB = "SAVE_JOB";
export const SEARCH_JOB = "SEARCH_JOB";

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

  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + props + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: SAVE_JOB, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
