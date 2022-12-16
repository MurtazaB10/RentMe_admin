import { combineReducers } from "redux";
import { appointmentListReducer } from "./appointmentListReducer";
import { doctorsListReducer } from "./doctorListReducer";
import { patientInfoReducer } from "./patientInfoReducer";
import { patientsListReducer } from "./patientsListReducer";
import { productreducer } from "./productReducer";
import { servicesListReducer } from "./servicesListReducer";

const reducers = combineReducers({
  allProducts: productreducer,
  doctorsList: doctorsListReducer,
  doctorAppointmentList: appointmentListReducer,
  patientInfo: patientInfoReducer,
  patientsList: patientsListReducer,
  servicesList: servicesListReducer,
});
export default reducers;
