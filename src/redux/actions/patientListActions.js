import { ActionTypes } from "../constants/action-types";
export const setPatientsList = (patients) => {
  return {
    type: ActionTypes.SET_PATIENTS_LIST,
    payload: patients,
  };
};