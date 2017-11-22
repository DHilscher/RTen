// Name your actions

// Create some action creators

// Make an async action creator

// Create and export your reducer

export const getCocBegin = () => {
  return { type: "GET_COC_BEGIN" };
};

export const getCocSuccess = data => ({
  type: "GET_COC_SUCCESS",
  payload: data
});

export const getCocError = error => {
  return { type: "GET_COC_ERROR", error };
};

export const getCoc = () => {
  return dispatch => {
    dispatch(getCocBegin());
    fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        dispatch(getCocSuccess(data));
      })
      .catch(err => {
        dispatch(getCocError(err));
      });
  };
};

const initialState = {
  errorMsg: "",
  isLoading: false,
  codeOfConduct: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_COC_BEGIN":
      return {
        ...state,
        isLoading: true
      };
    case "GET_COC_SUCCESS":
      return {
        ...state,
        codeOfConduct: action.payload,
        isLoading: false
      };
    case "GET_COC_ERROR":
      return {
        ...state,
        errorMsg: action.errorMsg,
        isLoading: false
      };
    default:
      return state;
  }
};
