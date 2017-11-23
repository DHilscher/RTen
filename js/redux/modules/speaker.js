import { formatDataObject } from "../../lib/helpers";

export const getSpeakerBegin = () => {
  return { type: "GET_SPEAKER_BEGIN" };
};

export const getSpeakerSuccess = data => ({
  type: "GET_SPEAKER_SUCCESS",
  payload: data
});

export const getSpeakerError = error => {
  return { type: "GET_SPEAKER_ERROR", error };
};

export const getSpeaker = speakerId => {
  return dispatch => {
    dispatch(getSpeakerBegin());
    fetch(
      `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`
    )
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        dispatch(getSpeakerSuccess(formatDataObject(data)));
      })
      .catch(err => {
        dispatch(getSpeakerError(err));
      });
  };
};

const initialState = {
  errorMsg: "",
  isLoading: false,
  speaker: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_SPEAKER_BEGIN":
      return {
        ...state,
        isLoading: true
      };
    case "GET_SPEAKER_SUCCESS":
      return {
        ...state,
        speaker: action.payload,
        isLoading: false
      };
    case "GET_SPEAKER_ERROR":
      return {
        ...state,
        errorMsg: action.errorMsg,
        isLoading: false
      };
    default:
      return state;
  }
};
