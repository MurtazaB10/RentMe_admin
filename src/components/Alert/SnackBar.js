import React from "react";
import Alert from "./Alert";
import SnackBar from "@mui/material/Snackbar";

function Snackbar(props) {
  const {
    confirmationSnackbarMessage,
    confirmationSnackbarOpen,
    setConfirmationSnackbarOpen,
  } = props;
  let severity = "";
  
    confirmationSnackbarMessage === "Failed to Save!" ||
    confirmationSnackbarMessage === "Invalid email or password!" ||
    confirmationSnackbarMessage === "Failed to Update!" ||
    confirmationSnackbarMessage === "Failed to Delete!"
      ? (severity = "error")
      : (severity = "success");
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setConfirmationSnackbarOpen(false);
  };
  return (
    <SnackBar
      open={confirmationSnackbarOpen}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {confirmationSnackbarMessage}
      </Alert>
    </SnackBar>
  );
}

export default Snackbar;
