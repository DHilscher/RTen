import { formatSessionData } from "../../lib/helpers";

export const getSessionsBegin = () => {
  return { type: "GET_SESSIONS_BEGIN" };
};

export const getSessionsSuccess = data => ({
  type: "GET_SESSIONS_SUCCESS",
  payload: data
});

export const getSessionsError = error => {
  return { type: "GET_SESSIONS_ERROR", error };
};

export const getSessions = () => {
  return dispatch => {
    dispatch(getSessionsBegin());
    fetch("https://r10app-95fea.firebaseio.com/sessions.json")
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        dispatch(getSessionsSuccess(data));
      })
      .catch(err => {
        dispatch(getSessionsError(err));
      });
  };
};

const initialState = {
  errorMsg: "",
  isLoading: false,
  sessions: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_SESSIONS_BEGIN":
      return {
        ...state,
        isLoading: true
      };
    case "GET_SESSIONS_SUCCESS":
      return {
        ...state,
        sessions: action.payload,
        isLoading: false
      };
    case "GET_SESSIONS_ERROR":
      return {
        ...state,
        errorMsg: action.errorMsg,
        isLoading: false
      };
    default:
      return state;
  }
};
