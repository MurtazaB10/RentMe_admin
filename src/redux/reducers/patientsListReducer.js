import { ActionTypes } from "../constants/action-types";

const intialState = {
  patients: [],
};
export const patientsListReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PATIENTS_LIST:
      return { ...state, patients: payload };
    default:
      return state;
  }
};
