import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/app/v1";
// axios.defaults.headers.common["Authorization"] = "Bearer "+localStorage.getItem("token");
require("dotenv").config();
ReactDOM.render(
  <App />,
  document.getElementById("root")
);
