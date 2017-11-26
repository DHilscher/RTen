import { formatSessionData } from "../../lib/helpers";
import { queryFaves } from "../../config/models";

export const getFavesBegin = () => {
  return { type: "GET_FAVES_BEGIN" };
};

export const getFavesSuccess = data => ({
  type: "GET_FAVES_SUCCESS",
  payload: data
});

export const getFavesError = error => {
  return { type: "GET_FAVES_ERROR", error };
};

export const getFaves = () => {
  return dispatch => {
    dispatch(getFavesBegin());
    const allFave = queryFaves()
      .reduce((acc, curr) => {
        acc.push(curr.id);
        return acc;
      })
      .then(() => {
        dispatch(getFavesSuccess(allFave));
      })
      .catch(err => {
        dispatch(getFavesError(err));
      });
  };
};

const initialState = {
  errorMsg: "",
  isLoading: false,
  faves: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_FAVES_BEGIN":
      return {
        ...state,
        isLoading: true
      };
    case "GET_FAVES_SUCCESS":
      return {
        ...state,
        faves: action.payload,
        isLoading: false
      };
    case "GET_FAVES_ERROR":
      return {
        ...state,
        errorMsg: action.errorMsg,
        isLoading: false
      };
    default:
      return state;
  }
};
