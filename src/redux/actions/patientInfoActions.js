import { ActionTypes } from "../constants/action-types";
export const setPatientInfo = (patient) => {
  return {
    type: ActionTypes.SET_PATIENT_INFO,
    payload: patient,
  };
};
