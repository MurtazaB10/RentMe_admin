import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
} from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Snackbar from "../../components/Alert/SnackBar";
function OrderList() {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [trigger, setTrigger] = useState(false);
  const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] =
    useState("");
  const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] =
    useState(false);
  const [dateData, setDateData] = useState([]);
  async function fetchData() {
    try {
      const result = await axios.get("/admin/order");
      console.log(result);
      setData(result.data.data);
      setDateData(result.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [trigger]);

  const dateFilter = () => {
    const results = data.filter((expense) => {
      var date = new Date(
        expense.createdAt.substring(0, 10)
      ).toLocaleDateString();
      var sdate = new Date(startDate).toLocaleDateString();
      var edate = new Date(endDate).toLocaleDateString();
      return date >= sdate && date <= edate;
    });
    setDateData(results);
  };

  const daily = () => {
    const results = data.filter((expense) => {
      var date = new Date(
        expense.createdAt.substring(0, 10)
      ).toLocaleDateString();
      var tdate = new Date().toLocaleDateString();
      return date === tdate;
    });
    setDateData(results);
  };

  const weekly = () => {
    const results = data.filter((expense) => {
      var date = new Date(
        expense.createdAt.substring(0, 10)
      ).toLocaleDateString();
      var tdate = new Date();
      var sdate = new Date();
      sdate.setDate(tdate.getDate() - 6);
      return (
        date >= sdate.toLocaleDateString() && date <= tdate.toLocaleDateString()
      );
    });
    setDateData(results);
  };

  const monthly = () => {
    const results = data.filter((expense) => {
      var date = new Date(
        expense.createdAt.substring(0, 10)
      ).toLocaleDateString();
      var tdate = new Date();
      var sdate = new Date();
      sdate.setDate(tdate.getDate() - 29);
      console.log(
        date,
        " ",
        sdate.toLocaleDateString(),
        " ",
        tdate.toLocaleDateString()
      );
      return (
        date >= sdate.toLocaleDateString() && date <= tdate.toLocaleDateString()
      );
    });
    setDateData(results);
  };

  return (
    <>
      <section className="dashboard">
        <div className=" container-fluid p-0">
          <div className="row" data-plugin="matchHeight" data-by-row="true">
            <div className="col-xxl-12 col-lg-12">
              <div className="panel" id="projects-status">
                <div className="panel-heading appointment-schedule pt-3">
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <h3 className="panel-title">Order list</h3>
                    </div>
                  </div>
                  <hr />
                  <div className="row align-items-center m-0">
                    <div className="col-md-6 text-left">
                      <div className="row mt-3 filter-btn-row">
                        <div className="col-md-4">
                          <button
                            onClick={daily}
                            className="btn btn-gradient-primary w-100"
                          >
                            Daily
                          </button>
                        </div>
                        <div className="col-md-4">
                          <button
                            onClick={weekly}
                            className="btn btn-gradient-primary w-100"
                          >
                            Weekly
                          </button>
                        </div>
                        <div className="col-md-4">
                          <button
                            onClick={monthly}
                            className="btn btn-gradient-primary w-100"
                          >
                            Monthly
                          </button>
                        </div>
                      </div>
                      <div className="row align-items-center mt-3 filter-btn-row">
                        <div className="col-md-4">
                          <div className="form-group mb-0">
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              isClearable
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-0">
                            <DatePicker
                              selected={endDate}
                              onChange={(date) => setEndDate(date)}
                              isClearable
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <button
                            className="btn btn-gradient-primary w-100"
                            onClick={dateFilter}
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                <TableContainer component={Paper}>
                  <Table aria-label="a simple table" title="Product List">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Customer Name</TableCell>
                        <TableCell align="center">Order Date</TableCell>
                        <TableCell align="center">Received Date</TableCell>
                        <TableCell align="center">Return Date</TableCell>
                        <TableCell align="center">Order Id</TableCell>
                        <TableCell align="center">Amount</TableCell>
                        <TableCell align="center">Transaction Id</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dateData &&
                        dateData.map((row) => (
                          <TableRow>
                            <TableCell
                              align="center"
                              component="th"
                              scope="row"
                            >
                              {row.user.username}
                            </TableCell>
                            <TableCell align="center">
                              {row.createdAt && row.createdAt.substring(0, 10)}
                            </TableCell>
                            <TableCell align="center">
                              {row.createdAt && row.createdAt.substring(0, 10)}
                            </TableCell>
                            <TableCell align="center">
                              {row.returndate &&
                                row.returndate.substring(0, 10)}
                            </TableCell>
                            <TableCell align="center">
                              {row.razorpay.orderId}
                            </TableCell>
                            <TableCell align="center">{row.amount}</TableCell>
                            <TableCell align="center">
                              {row.razorpay.paymentId}
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Snackbar
        confirmationSnackbarMessage={confirmationSnackbarMessage}
        confirmationSnackbarOpen={confirmationSnackbarOpen}
        setConfirmationSnackbarOpen={setConfirmationSnackbarOpen}
      />
    </>
  );
}
export default OrderList;
