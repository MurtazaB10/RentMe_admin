import { ActionTypes } from "../constants/action-types";

const intialState = {
  appointments: [],
};
export const appointmentListReducer = (state = intialState, { type, payload }) => {
  
  switch (type) {
    case ActionTypes.SET_DOCTORS_APPOINTMENT_lIST:
      return { ...state, appointments: payload };
    default:
      return state;
  }
};
