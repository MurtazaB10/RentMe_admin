import { ActionTypes } from "../constants/action-types";
export const setDoctorsList = (doctors) => {
  return {
    type: ActionTypes.SET_DOCTORS_LIST,
    payload: doctors,
  };
};
