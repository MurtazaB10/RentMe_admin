import { ActionTypes } from "../constants/action-types";

const intialState = {
  doctors: [],
};
export const doctorsListReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DOCTORS_LIST:
      return { ...state, doctors: payload };
    default:
      return state;
  }
};
