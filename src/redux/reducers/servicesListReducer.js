import { ActionTypes } from "../constants/action-types";

const intialState = {
  services: [],
};
export const servicesListReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SERVICES_LIST:
      return { ...state, services: payload };
    default:
      return state;
  }
};
