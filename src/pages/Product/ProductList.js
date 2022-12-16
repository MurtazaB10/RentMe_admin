import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
} from "@material-ui/core";
import { setProducts } from "../../redux/actions/productActions";
import AddProductModal from "./AddProductModal";
import Snackbar from "../../components/Alert/SnackBar";
import EditProductModal from './EditProduct';
function ProductList() {
  const data = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [nameTerm, setNameTerm] = useState([]);
  const [prod, setProd] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] =
    useState("");
  const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] =
    useState(false);
  const [trigger, setTrigger] = useState(false);
  async function fetchData() {
    try {
      const result = await axios.post("/product");
      console.log(result);
      dispatch(setProducts(result.data.data));
      setSearchResults(result.data.data);
    } catch (error) {
      console.error(error);
    }
  }
  const change = (prop) => {
    setProd(prop);
  }
  const deleteProduct = async (prop) => {
    const data = {productId : prop._id};
    const r = await axios.post("/admin/delete-product",data).then((response) => {
      setConfirmationSnackbarMessage("Product deleted succesfully!");
      setConfirmationSnackbarOpen(true);
      setTrigger(!trigger);
    })
    .catch((err) => {
      setConfirmationSnackbarMessage("Failed to Delete!");
      setConfirmationSnackbarOpen(true);
    });
  }

  const search = () => {
    const res = axios.post(`/product/${nameTerm}`);
    console.log(res);
  }

  useEffect(() => {
    fetchData();
  }, [trigger]);

  useEffect(() => {
    try {
      const results = data.filter((product) => {
        if (product.name.toLowerCase().includes(nameTerm.toLowerCase()) || product.categoryy.toLowerCase().includes(nameTerm.toLowerCase())||product.description.toLowerCase().includes(nameTerm.toLowerCase())|| product.manufacturer.toLowerCase().includes(nameTerm.toLowerCase())||product.rentalprice.toLowerCase().includes(nameTerm.toLowerCase()) ) return true;
        else return false;
      });
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  }, [nameTerm]);

  return (
    <>
      <section className="dashboard">
        <div className=" container-fluid p-0">
          <div className="row" data-plugin="matchHeight" data-by-row="true">
            <div className="col-xxl-12 col-lg-12">
              {/* Panel Projects Status */}
              <div className="panel" id="projects-status">
                <div className="panel-heading appointment-schedule pt-3">
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <h3 className="panel-title">Product list</h3>
                    </div>
                  </div>
                  <hr />
                  <div className="row align-items-center m-0">
                    <div className="col-md-8 text-left">
                      <div className="row align-items-center mt-3 filter-btn-row">
                        <div className="col-md-6">
                          <div className="form-group mb-0">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Product"
                              onChange={(event) => {
                                setNameTerm(event.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <button className="btn btn-gradient-primary w-100" onClick={search}>
                            Search
                          </button>
                        </div>
                        <div className="col-md-2">
                          <button
                            type="button"
                            className="btn-raised btn btn-danger btn-floating position-static"
                            data-toggle="modal"
                            data-target="#addproModal"
                          >
                            <i
                              className="icon mdi mdi-plus"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />

                <div class="table-responsive p-3">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th width="20%">name</th>
                      <th width="20%">Category</th>
                      <th width="50%">Descriprion</th>
                      <th width="50%">Manufacturer</th>
                      <th width="20%">Quantity</th>
                      <th width="20%">Price</th>
                      <th width="20%">Deposit</th>
                      <th width="20%">Image</th>
                      <th width="20%" class="text-left">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.map((val,ind) => {
                      console.log(val);
                      return <tr key={ind}>
                      <td>{val.name}</td>
                      <td>{val.categoryy}</td>
                      <td>{val.description}</td>
                      <td>{val.manufacturer}</td>
                      <td>{val.quantity}</td>
                      <td>{val.rentalprice}</td>
                      <td>{val.costprice}</td>
                      <td><img style={{width:'50px',height:'50px'}} src={val.image[0].url}></img></td>
                      <td>
                      <div class="edit-icon">
                          <a data-toggle="modal"
              data-target="#editProductModal" onClick={() => change(val)} class="white mr-10">
                            <i class="icon mdi mdi-pencil"></i>
                          </a>
                          <a class="white mr-10" onClick={() => deleteProduct(val)}>
                            <i class="icon mdi mdi-delete"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    })}
                  </tbody>
                </table>
              </div>
            {/* </div>
          </div>
        </div>
      </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AddProductModal
        trigger={trigger}
        setTrigger={setTrigger}
        setConfirmationSnackbarMessage={setConfirmationSnackbarMessage}
        setConfirmationSnackbarOpen={setConfirmationSnackbarOpen}
      />
      <EditProductModal
          setTrigger={setTrigger}
          trigger={trigger}
          prod={prod}
        setConfirmationSnackbarMessage={setConfirmationSnackbarMessage}
        setConfirmationSnackbarOpen={setConfirmationSnackbarOpen}
      />
      <Snackbar
        confirmationSnackbarMessage={confirmationSnackbarMessage}
        confirmationSnackbarOpen={confirmationSnackbarOpen}
        setConfirmationSnackbarOpen={setConfirmationSnackbarOpen}
      />
    </>
  );
}
export default ProductList;
