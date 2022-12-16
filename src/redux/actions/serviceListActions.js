import { ActionTypes } from "../constants/action-types";
export const setServicesList = (services) => {
  return {
    type: ActionTypes.SET_SERVICES_LIST,
    payload: services,
  };
};