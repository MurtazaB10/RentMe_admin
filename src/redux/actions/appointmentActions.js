import { ActionTypes } from "../constants/action-types";
export const setAppointmentList = (appointments) => {
  return {
    type: ActionTypes.SET_DOCTORS_APPOINTMENT_lIST,
    payload: appointments,
  };
};