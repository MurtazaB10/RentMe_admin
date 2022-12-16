import { ActionTypes } from "../constants/action-types";

const intialState = {
  patient: [],
};
export const patientInfoReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PATIENT_INFO:
      return { ...state, patient: payload };
    default:
      return state;
  }
};
